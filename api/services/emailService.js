const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Log file path
const LOG_FILE = path.join(__dirname, '../logs/emails.json');

// Configuração do transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Function to log email activity
function logEmail(emailData, result, error = null) {
  try {
    // Create logs directory if it doesn't exist
    const logsDir = path.dirname(LOG_FILE);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    // Read existing logs or initialize empty array
    let logs = [];
    if (fs.existsSync(LOG_FILE)) {
      const content = fs.readFileSync(LOG_FILE, 'utf8');
      if (content.trim()) {
        logs = JSON.parse(content);
      }
    }

    // Create log entry
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: error ? 'failed' : 'success',
      to: emailData.to,
      subject: emailData.subject,
      template: emailData.template,
      data: emailData.data,
      result: error ? null : {
        messageId: result.messageId,
        accepted: result.accepted,
        rejected: result.rejected
      },
      error: error ? error.message : null
    };

    // Add to logs
    logs.push(logEntry);

    // Keep only last 1000 entries
    if (logs.length > 1000) {
      logs = logs.slice(-1000);
    }

    // Write back to file
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2), 'utf8');
  } catch (logError) {
    console.error('Failed to write email log:', logError);
    // Don't throw - logging shouldn't break the main flow
  }
}

// Função para processar template
function processTemplate(templateName, data = {}) {
  try {
    const templatePath = path.join(__dirname, '../templates', `${templateName}.html`);
    
    if (!fs.existsSync(templatePath)) {
      throw new Error(`Template ${templateName} não encontrado`);
    }

    let template = fs.readFileSync(templatePath, 'utf8');
    
    // Substituir variáveis no template
    Object.keys(data).forEach(key => {
      const regex = new RegExp(`{{${key}}}`, 'g');
      template = template.replace(regex, data[key]);
    });

    return template;
  } catch (error) {
    throw new Error(`Erro ao processar template: ${error.message}`);
  }
}

// Função principal de envio
async function sendEmail({ to, subject, template, data = {} }) {
  const emailData = { to, subject, template, data };
  
  try {
    // Processar template
    const htmlContent = processTemplate(template, data);

    // Configuração do email
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'Equipe Bike Anjo <noreply@bikeanjo.org>',
      to: Array.isArray(to) ? to.join(', ') : to,
      subject: subject,
      html: htmlContent
    };

    // Enviar email
    const result = await transporter.sendMail(mailOptions);
    
    const response = {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected
    };

    // Log success
    logEmail(emailData, response);
    
    return response;

  } catch (error) {
    // Log failure
    logEmail(emailData, null, error);
    
    throw new Error(`Erro ao enviar email: ${error.message}`);
  }
}

module.exports = {
  sendEmail,
  processTemplate
};
