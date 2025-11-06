/**
 * CMS Standalone - Bike Anjo Institucional
 *
 * DEPLOY: Arquivos são copiados automaticamente via GitHub Actions,
 * mas o servidor NÃO inicia automaticamente (não está no docker-compose).
 *
 * Para usar: conectar ao servidor e executar manualmente "npm start"
 * Ver cms/DEPLOY.md para instruções completas.
 *
 * SEGURANÇA: Implementação básica. Uso apenas local/manual no servidor.
 */

require("dotenv").config();
const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const JWT_SECRET = process.env.JWT_SECRET || "change-me-in-production";
const CONTENT_DIR = path.resolve(process.env.CONTENT_DIR || "../public/data");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Lista de arquivos JSON disponíveis
// Organizados por categoria para melhor navegação no CMS
const CONTENT_FILES = [
  // Home e Conteúdo Geral
  "homeFaq",
  "ourStory",

  // Pessoas e Equipe
  "team",
  "testimonials",

  // Projetos e Recursos
  "faq",
  "courseModules",

  // Parcerias e Mídia
  "partners",
  "media",

  // Organização
  "localOrg",

  // Transparência
  "transparency",
];

// Middleware de autenticação
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }
    req.user = user;
    next();
  });
}

// ===== ROTAS PÚBLICAS =====

// Login
app.post("/api/login", async (req, res) => {
  const { password } = req.body;

  // Validar senha: admin padrão ou senha "ian"
  const validPasswords = [ADMIN_PASSWORD, "ian"];

  if (!validPasswords.includes(password)) {
    return res.status(401).json({ error: "Senha incorreta" });
  }

  const token = jwt.sign({ admin: true }, JWT_SECRET, { expiresIn: "24h" });

  res.json({ token, message: "Login realizado com sucesso" });
});

// Verificar se está autenticado
app.get("/api/verify", authenticateToken, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// Listar arquivos disponíveis
app.get("/api/files", authenticateToken, (req, res) => {
  res.json({ files: CONTENT_FILES });
});

// ===== ROTAS DE CONTEÚDO =====

// Ler arquivo JSON
app.get("/api/content/:file", authenticateToken, async (req, res) => {
  try {
    const { file } = req.params;

    if (!CONTENT_FILES.includes(file)) {
      return res.status(404).json({ error: "Arquivo não encontrado" });
    }

    const filePath = path.join(CONTENT_DIR, `${file}.json`);
    const content = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(content);

    res.json({ file, data });
  } catch (error) {
    console.error("Error reading file:", error);
    res
      .status(500)
      .json({ error: "Erro ao ler arquivo", message: error.message });
  }
});

// Salvar arquivo JSON
app.post("/api/content/:file", authenticateToken, async (req, res) => {
  try {
    const { file } = req.params;
    const { data } = req.body;

    if (!CONTENT_FILES.includes(file)) {
      return res.status(404).json({ error: "Arquivo não encontrado" });
    }

    // Validar que é JSON válido
    JSON.stringify(data);

    const filePath = path.join(CONTENT_DIR, `${file}.json`);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    res.json({ success: true, message: "Arquivo salvo com sucesso" });
  } catch (error) {
    console.error("Error saving file:", error);
    res
      .status(500)
      .json({ error: "Erro ao salvar arquivo", message: error.message });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    contentDir: CONTENT_DIR,
  });
});

// Servir admin.html na raiz e em /admin
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 CMS Standalone rodando em http://localhost:${PORT}`);
  console.log(`📁 Diretório de conteúdo: ${CONTENT_DIR}`);
  console.log(`🔐 Acesse: http://localhost:${PORT}/admin`);
  console.log(`⚠️  Se usar porta diferente, configure PORT no .env`);
});
