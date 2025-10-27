const express = require("express");
const cors = require("cors");
const emailService = require("./services/emailService");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Middleware de autenticação
app.use("/api/send-email", (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
});

// Rota para envio de email
app.post("/api/send-email", async (req, res) => {
  try {
    const { to, subject, template, data } = req.body;

    // Validação básica
    if (!to || !subject || !template) {
      return res.status(400).json({
        success: false,
        message: "Campos obrigatórios: to, subject, template",
      });
    }

    // Enviar email
    const result = await emailService.sendEmail({
      to,
      subject,
      template,
      data: data || {},
    });

    res.json({
      success: true,
      message: "Email enviado com sucesso",
      result,
    });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    res.status(500).json({
      success: false,
      message: "Erro interno do servidor",
      error: error.message,
    });
  }
});

// Rota de teste
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "API funcionando" });
});

app.listen(PORT, () => {
  console.log(`🚀 API rodando na porta ${PORT}`);
});
