const API_BASE = "/api";
let authToken = null;
let currentFile = null;
let filesList = [];
let currentData = null;
let currentItemIndex = 0;
let isNewItem = false;

// Verificar autenticação ao carregar
window.addEventListener("DOMContentLoaded", async () => {
  const savedToken = localStorage.getItem("cms_token");
  if (savedToken) {
    authToken = savedToken;
    const isValid = await verifyToken();
    if (isValid) {
      showCMS();
      loadFiles();
    } else {
      showLogin();
    }
  } else {
    showLogin();
  }
});

async function verifyToken() {
  try {
    const response = await fetch(`${API_BASE}/verify`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function handleLogin() {
  const password = document.getElementById("password-input").value;
  const errorDiv = document.getElementById("login-error");

  try {
    const response = await fetch(`${API_BASE}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    const data = await response.json();

    if (response.ok) {
      authToken = data.token;
      localStorage.setItem("cms_token", authToken);
      showCMS();
      loadFiles();
      showStatus("Login realizado com sucesso!", "success");
    } else {
      errorDiv.textContent = data.error || "Erro ao fazer login";
      errorDiv.style.display = "block";
    }
  } catch (error) {
    errorDiv.textContent = "Erro de conexão";
    errorDiv.style.display = "block";
  }
}

function showLogin() {
  document.getElementById("login-screen").style.display = "block";
  document.getElementById("cms-screen").style.display = "none";
}

function showCMS() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("cms-screen").style.display = "block";
}

async function loadFiles() {
  try {
    const response = await fetch(`${API_BASE}/files`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    filesList = data.files;
    renderFilesList();
  } catch (error) {
    showStatus("Erro ao carregar arquivos", "danger");
  }
}

function renderFilesList() {
  const container = document.getElementById("files-list");

  // Mapear categorias
  const categories = {
    "Home e Conteúdo Geral": ["homeFaq", "ourStory"],
    "Pessoas e Equipe": ["team", "testimonials"],
    "Projetos e Recursos": ["faq", "courseModules"],
    "Parcerias e Mídia": ["partners", "media"],
    Organização: ["localOrg"],
    Transparência: ["transparency"],
  };

  let html = "";
  let globalIndex = 1;

  // Renderizar por categoria
  Object.entries(categories).forEach(([categoryName, files]) => {
    // Verificar se algum arquivo da categoria está na lista
    const categoryFiles = files.filter((file) => filesList.includes(file));

    if (categoryFiles.length > 0) {
      html += `<div class="file-category">${categoryName}</div>`;

      categoryFiles.forEach((file) => {
        const isDisabled = file === "courseModules";
        html += `
          <div class="file-item ${isDisabled ? "disabled" : ""}" data-file="${file}" ${isDisabled ? "" : `onclick="loadFile('${file}')"`}>
            <strong>${globalIndex}. ${file}</strong>
          </div>
        `;
        globalIndex++;
      });
    }
  });

  container.innerHTML = html;
}

async function loadFile(filename) {
  currentFile = filename;
  currentItemIndex = 0;
  isNewItem = false; // Resetar flag ao carregar arquivo

  // Atualizar UI
  document.querySelectorAll(".file-item").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.file === filename) {
      item.classList.add("active");
    }
  });

  document.getElementById("editor-placeholder").style.display = "none";
  document.getElementById("visual-editor").style.display = "block";
  document.getElementById("current-file-name").textContent = `${filename}`;

  // Mostrar botão "Nova História" apenas para ourStory
  const btnNewStory = document.getElementById("btn-new-story");
  if (filename === "ourStory") {
    btnNewStory.style.display = "inline-block";
  } else {
    btnNewStory.style.display = "none";
  }

  await loadVisualPreview(filename);
}

async function loadVisualPreview(filename) {
  try {
    const response = await fetch(`${API_BASE}/content/${filename}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    currentData = data.data;

    renderVisualPreview(filename, currentData);
    updateNavigation();
    showStatus("Arquivo carregado", "success");
  } catch (error) {
    showStatus("Erro ao carregar arquivo", "danger");
  }
}

function renderVisualPreview(filename, data) {
  const preview = document.getElementById("content-preview");

  // Detectar tipo de conteúdo e renderizar apropriadamente
  if (Array.isArray(data)) {
    if (filename === "faq") {
      renderFAQ(data);
    } else if (filename === "team") {
      renderTeam(data);
    } else if (filename === "testimonials") {
      renderTestimonials(data);
    } else if (filename === "partners") {
      renderPartners(data);
    } else if (filename === "ourStory") {
      renderOurStory(data);
    } else if (filename === "media") {
      renderMedia(data);
    } else {
      renderGenericArray(data);
    }
  } else {
    if (filename === "homeFaq") {
      renderHomeFaq(data);
    } else if (filename === "transparency") {
      renderTransparency(data);
    } else {
      renderGenericObject(data);
    }
  }
}

function renderFAQ(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML =
      '<p class="text-muted">Nenhuma pergunta cadastrada.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  const accordionId = "accordion-faq";
  const accordionItems = data
    .map((item, index) => {
      const headerId = `header-${index}`;
      const collapseId = `collapse-${index}`;
      const isFirst = index === 0;

      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="${headerId}">
            <button class="accordion-button ${isFirst ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? "true" : "false"}" aria-controls="${collapseId}">
              ${item.title || "Sem título"}
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? "show" : ""}" aria-labelledby="${headerId}" data-bs-parent="#${accordionId}">
            <div class="accordion-body">
              <div class="d-flex justify-content-end mb-2">
                <button class="btn btn-sm btn-outline-primary" onclick="editItemByIndex(${index})">
                  <span class="material-symbols-outlined me-1">edit</span>
                  Editar
                </button>
              </div>
              ${
                item.items && item.items.length > 0
                  ? `<p class="mb-0">${escapeHtml(item.items[0].text || "")}</p>`
                  : `<p class="text-muted mb-0">Sem resposta cadastrada.</p>`
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="accordion" id="${accordionId}">
      ${accordionItems}
    </div>
  `;
  currentData = data;
}

function renderTeam(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML = '<p class="text-muted">Nenhuma pessoa cadastrada.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  const teamCards = data
    .map((item, index) => {
      const colorValue = item.colorCard || "transparent";
      return `
        <div class="team-card" onclick="editItemByIndex(${index})">
          ${item.imageUrl ? `<img src="${item.imageUrl}" alt="${item.name || ""}" class="team-card-image" onerror="this.style.display='none'">` : '<div class="team-card-image" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center;"><span class="material-symbols-outlined" style="font-size: 48px; color: #ccc;">person</span></div>'}
          <div class="team-card-info">
            <h6 class="team-card-name">${escapeHtml(item.name || "Sem nome")}</h6>
            <p class="team-card-position">${escapeHtml(item.position || "")}</p>
            <p class="team-card-from">${escapeHtml(item.from || "")}</p>
          </div>
          <div class="team-card-color-indicator" style="background-color: ${colorValue};"></div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="team-grid">
      ${teamCards}
    </div>
  `;
  currentData = data;
}

function renderTestimonials(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML =
      '<p class="text-muted">Nenhum depoimento cadastrado.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  const accordionId = "accordion-testimonials";
  const accordionItems = data
    .map((item, index) => {
      const headerId = `header-${index}`;
      const collapseId = `collapse-${index}`;
      const isFirst = index === 0;

      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="${headerId}">
            <button class="accordion-button ${isFirst ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? "true" : "false"}" aria-controls="${collapseId}">
              ${item.name || "Sem nome"} ${item.role ? `- ${item.role}` : ""}
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? "show" : ""}" aria-labelledby="${headerId}" data-bs-parent="#${accordionId}">
            <div class="accordion-body">
              <div class="d-flex justify-content-end mb-2">
                <button class="btn btn-sm btn-outline-primary" onclick="editItemByIndex(${index})">
                  <span class="material-symbols-outlined me-1">edit</span>
                  Editar
                </button>
              </div>
              <p class="mb-2"><strong>Nome:</strong> ${item.name || ""}</p>
              <p class="mb-2"><strong>Papel:</strong> ${item.role || ""}</p>
              <p class="mb-0">${escapeHtml(item.text || "")}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="accordion" id="${accordionId}">
      ${accordionItems}
    </div>
  `;
  currentData = data;
}

function renderPartners(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML = '<p class="text-muted">Nenhum parceiro cadastrado.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  const accordionId = "accordion-partners";
  const accordionItems = data
    .map((item, index) => {
      const headerId = `header-${index}`;
      const collapseId = `collapse-${index}`;
      const isFirst = index === 0;

      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="${headerId}">
            <button class="accordion-button ${isFirst ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? "true" : "false"}" aria-controls="${collapseId}">
              ${item.name || "Sem nome"}
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? "show" : ""}" aria-labelledby="${headerId}" data-bs-parent="#${accordionId}">
            <div class="accordion-body">
              <div class="d-flex justify-content-end mb-2">
                <button class="btn btn-sm btn-outline-primary" onclick="editItemByIndex(${index})">
                  <span class="material-symbols-outlined me-1">edit</span>
                  Editar
                </button>
              </div>
              <p class="mb-2"><strong>Nome:</strong> ${item.name || ""}</p>
              <p class="mb-2"><strong>URL:</strong> <a href="${item.url || "#"}" target="_blank">${item.url || ""}</a></p>
              <p class="mb-0"><strong>Imagem:</strong> ${item.imageUrl || "N/A"}</p>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="accordion" id="${accordionId}">
      ${accordionItems}
    </div>
  `;
  currentData = data;
}

function renderHomeFaq(data) {
  const preview = document.getElementById("content-preview");
  if (!data.questions || data.questions.length === 0) {
    preview.innerHTML =
      '<p class="text-muted">Nenhuma pergunta cadastrada.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  const accordionId = "accordion-homeFaq";
  const accordionItems = data.questions
    .map((item, index) => {
      const headerId = `header-${index}`;
      const collapseId = `collapse-${index}`;
      const isFirst = index === 0;

      return `
        <div class="accordion-item">
          <h2 class="accordion-header" id="${headerId}">
            <button class="accordion-button ${isFirst ? "" : "collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? "true" : "false"}" aria-controls="${collapseId}">
              ${item.title || "Sem título"}
            </button>
          </h2>
          <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? "show" : ""}" aria-labelledby="${headerId}" data-bs-parent="#${accordionId}">
            <div class="accordion-body">
              <div class="d-flex justify-content-end mb-2">
                <button class="btn btn-sm btn-outline-primary" onclick="editHomeFaqItem(${index})">
                  <span class="material-symbols-outlined me-1">edit</span>
                  Editar
                </button>
              </div>
              <p class="mb-2">${escapeHtml(item.content || "")}</p>
              ${
                item.hasLinks && item.links && item.links.length > 0
                  ? `
                <div class="mt-3">
                  <small class="text-muted"><strong>Links:</strong> (readonly)</small>
                  <ul class="small">
                    ${item.links.map((link) => `<li>${escapeHtml(link.placeholder || "")} → ${escapeHtml(link.text || "")} (${escapeHtml(link.url || "")})</li>`).join("")}
                  </ul>
                </div>
              `
                  : ""
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="accordion" id="${accordionId}">
      ${accordionItems}
    </div>
  `;
  currentData = data;
}

function renderOurStory(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML = '<p class="text-muted">Nenhum evento cadastrado.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  // Reverter array para mostrar mais recentes primeiro
  const reversedData = [...data].reverse();

  const storyCards = reversedData
    .map((item, index) => {
      // Calcular índice original (invertido)
      const originalIndex = data.length - 1 - index;
      return `
        <div class="story-card" onclick="editItemByIndex(${originalIndex})">
          <div class="story-card-year">
            <span>${item.year || ""}</span>
            <span class="material-symbols-outlined">edit</span>
          </div>
          <div class="story-card-description">
            ${escapeHtml(item.description || "")}
          </div>
        </div>
      `;
    })
    .join("");

  preview.innerHTML = `
    <div class="story-grid">
      ${storyCards}
    </div>
  `;
  currentData = data;
}

function renderMedia(data) {
  const preview = document.getElementById("content-preview");
  if (!data || data.length === 0) {
    preview.innerHTML = '<p class="text-muted">Nenhuma mídia cadastrada.</p>';
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "none";

  // Coletar todos os anos e tipos de mídia únicos
  const years = [...new Set(data.map((item) => item.year))].sort(
    (a, b) => b - a,
  );
  const mediaTypes = [
    ...new Set(
      data.flatMap((yearData) =>
        yearData.months.flatMap((month) =>
          month.items.map((item) => item.media),
        ),
      ),
    ),
  ].sort();

  const mediaTypeLabels = {
    site: "Site",
    jornal: "Jornal",
    youtube: "YouTube",
    vimeo: "Vimeo",
    tv: "TV",
    radio: "Rádio",
    revista: "Revista",
    artigo: "Artigo",
    internet: "Internet",
    premio: "Prêmio",
    mencaohonrosa: "Menção Honrosa",
  };

  // Criar HTML dos filtros
  const yearsOptions = years
    .map((year) => `<option value="${year}">${year}</option>`)
    .join("");
  const mediaTypesFilters = mediaTypes
    .map(
      (type) => `
    <label class="form-check form-check-inline">
      <input class="form-check-input media-type-filter" type="checkbox" value="${type}" checked>
      <span class="form-check-label">${mediaTypeLabels[type] || type}</span>
    </label>
  `,
    )
    .join("");

  // Função para renderizar os cards (será chamada ao filtrar)
  const renderMediaCards = (filteredData) => {
    if (!filteredData || filteredData.length === 0) {
      return '<p class="text-muted">Nenhum item encontrado com os filtros selecionados.</p>';
    }

    return filteredData
      .map((yearData) => {
        const monthsHtml = yearData.months
          .filter((month) => month.items.length > 0)
          .map((month) => {
            const itemsHtml = month.items
              .map((item, itemIndex) => {
                // Encontrar índices completos para edição
                const yearIndex = data.findIndex((y) => y.id === yearData.id);
                const monthIndex = yearData.months.findIndex(
                  (m) => m.id === month.id,
                );

                return `
              <div class="media-card" onclick="editMediaItem(${yearIndex}, ${monthIndex}, ${itemIndex})">
                <div class="media-card-header">
                  <h6 class="media-card-title">${escapeHtml(item.title || "")}</h6>
                  <span class="media-badge media-badge-${item.media}">${mediaTypeLabels[item.media] || item.media}</span>
                </div>
                <p class="media-card-link"><a href="${item.link?.url || "#"}" target="_blank">${escapeHtml(item.link?.text || "")}</a></p>
                <div class="media-card-meta">
                  <span class="media-card-date">${escapeHtml(item.date || "")}</span>
                  <span class="media-card-location">${escapeHtml(item.location || "")}</span>
                </div>
              </div>
            `;
              })
              .join("");

            return `
            <div class="media-month-group">
              <h5 class="media-month-title">${month.month} ${yearData.year}</h5>
              <div class="media-cards-row">
                ${itemsHtml}
              </div>
            </div>
          `;
          })
          .join("");

        return monthsHtml;
      })
      .join("");
  };

  const initialCards = renderMediaCards(data);

  preview.innerHTML = `
    <div class="media-container">
      <div class="media-filters">
        <div class="mb-3">
          <label class="form-label"><strong>Filtrar por Ano:</strong></label>
          <select class="form-select" id="filter-year" onchange="applyMediaFilters()">
            <option value="">Todos os anos</option>
            ${yearsOptions}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label"><strong>Filtrar por Tipo de Mídia:</strong></label>
          <div class="media-type-filters">
            ${mediaTypesFilters}
          </div>
        </div>
        <button class="btn btn-sm btn-outline-secondary" onclick="clearMediaFilters()">Limpar Filtros</button>
      </div>
      <div class="media-months" id="media-months-container">
        ${initialCards}
      </div>
    </div>
  `;

  // Armazenar dados originais para filtragem
  window.mediaAllData = data;
  currentData = data;

  // Adicionar event listeners aos checkboxes
  setTimeout(() => {
    document.querySelectorAll(".media-type-filter").forEach((cb) => {
      cb.addEventListener("change", applyMediaFilters);
    });
  }, 100);
}

function renderTransparency(data) {
  const preview = document.getElementById("content-preview");
  document.getElementById("navigation-buttons").style.display = "none";

  const accordionId = "accordion-transparency";

  // Bylaws
  const bylawsFields = data.bylaws?.cnpjData?.fields || [];
  const bylawsFieldsHtml = bylawsFields
    .map(
      (field) => `
    <p class="mb-1"><strong>${escapeHtml(field.label || "")}</strong> ${escapeHtml(field.value || "")}</p>
  `,
    )
    .join("");

  // Financial Reports
  const financialReportsList =
    data.financialReports?.annualReports?.reports || [];
  const financialReportsHtml = financialReportsList
    .map(
      (report) => `
    <li><a href="${report.url || "#"}" target="_blank">${escapeHtml(report.text || "")}</a></li>
  `,
    )
    .join("");

  // Activity Reports
  const activityReportsList =
    data.activityReports?.reportsSection?.reports || [];
  const activityReportsHtml = activityReportsList
    .map(
      (report) => `
    <li><a href="${report.url || "#"}" target="_blank">${escapeHtml(report.text || "")}</a></li>
  `,
    )
    .join("");

  preview.innerHTML = `
    <div class="accordion" id="${accordionId}">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-bylaws" aria-expanded="true" aria-controls="collapse-bylaws">
            ${escapeHtml(data.bylaws?.title || "Estatuto e CNPJ")}
          </button>
        </h2>
        <div id="collapse-bylaws" class="accordion-collapse collapse show" data-bs-parent="#${accordionId}">
          <div class="accordion-body">
            <h6>${escapeHtml(data.bylaws?.subtitle || "")}</h6>
            <p>${escapeHtml(data.bylaws?.description || "")}</p>
            ${data.bylaws?.downloadButton?.url ? `<p><a href="${data.bylaws.downloadButton.url}" target="_blank">${escapeHtml(data.bylaws.downloadButton.text || "")}</a></p>` : ""}
            <div class="mt-3">
              <h6>${escapeHtml(data.bylaws?.cnpjData?.title || "")}</h6>
              ${bylawsFieldsHtml}
            </div>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-financial" aria-expanded="false" aria-controls="collapse-financial">
            ${escapeHtml(data.financialReports?.title || "Relatórios Financeiros")}
          </button>
        </h2>
        <div id="collapse-financial" class="accordion-collapse collapse" data-bs-parent="#${accordionId}">
          <div class="accordion-body">
            <h6>${escapeHtml(data.financialReports?.subtitle || "")}</h6>
            <p>${escapeHtml(data.financialReports?.description || "")}</p>
            ${data.financialReports?.realtimeButton?.url ? `<p><a href="${data.financialReports.realtimeButton.url}" target="_blank">${escapeHtml(data.financialReports.realtimeButton.text || "")}</a></p>` : ""}
            <div class="mt-3">
              <h6>${escapeHtml(data.financialReports?.annualReports?.title || "")}</h6>
              <p>${escapeHtml(data.financialReports?.annualReports?.description || "")}</p>
              <ul>
                ${financialReportsHtml}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-activity" aria-expanded="false" aria-controls="collapse-activity">
            ${escapeHtml(data.activityReports?.title || "Relatório de Atividades")}
          </button>
        </h2>
        <div id="collapse-activity" class="accordion-collapse collapse" data-bs-parent="#${accordionId}">
          <div class="accordion-body">
            <h6>${escapeHtml(data.activityReports?.subtitle || "")}</h6>
            <p>${escapeHtml(data.activityReports?.description || "")}</p>
            <div class="mt-3">
              <h6>${escapeHtml(data.activityReports?.reportsSection?.subtitle || "")}</h6>
              <p>${escapeHtml(data.activityReports?.reportsSection?.description || "")}</p>
              <ul>
                ${activityReportsHtml}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  currentData = data;
}

function renderGenericArray(data) {
  const preview = document.getElementById("content-preview");
  if (data.length === 0) {
    preview.innerHTML = '<p class="text-muted">Array vazio.</p>';
    return;
  }

  const item = data[currentItemIndex] || data[0];
  preview.innerHTML = `
    <div class="item-card">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <h5>Item ${currentItemIndex + 1}</h5>
        <button class="btn btn-sm btn-outline-primary" onclick="editCurrentItem()">
          <span class="material-symbols-outlined me-1">edit</span>
          Editar
        </button>
      </div>
      <pre class="bg-light p-3 rounded">${JSON.stringify(item, null, 2)}</pre>
    </div>
  `;
  currentData = data;
}

function renderGenericObject(data) {
  const preview = document.getElementById("content-preview");
  preview.innerHTML = `
    <div class="item-card">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <h5>Conteúdo</h5>
        <button class="btn btn-sm btn-outline-primary" onclick="editCurrentItem()">
          <span class="material-symbols-outlined me-1">edit</span>
          Editar
        </button>
      </div>
      <pre class="bg-light p-3 rounded">${JSON.stringify(data, null, 2)}</pre>
    </div>
  `;
  currentData = data;
}

function updateNavigation() {
  if (!Array.isArray(currentData) || currentData.length === 0) {
    document.getElementById("navigation-buttons").style.display = "none";
    return;
  }

  document.getElementById("navigation-buttons").style.display = "flex";
  document.getElementById("current-item").textContent = currentItemIndex + 1;
  document.getElementById("total-items").textContent = currentData.length;

  document.getElementById("btn-prev").disabled = currentItemIndex === 0;
  document.getElementById("btn-next").disabled =
    currentItemIndex === currentData.length - 1;
}

function navigateItem(direction) {
  if (!Array.isArray(currentData) || currentData.length === 0) return;

  currentItemIndex += direction;
  if (currentItemIndex < 0) currentItemIndex = 0;
  if (currentItemIndex >= currentData.length)
    currentItemIndex = currentData.length - 1;

  renderVisualPreview(currentFile, currentData);
  updateNavigation();
}

function editItemByIndex(index) {
  currentItemIndex = index;
  isNewItem = false;
  editCurrentItem();
}

function editHomeFaqItem(index) {
  currentItemIndex = index;
  isNewItem = false;
  editCurrentItem();
}

function editMediaItem(yearIndex, monthIndex, itemIndex) {
  // Armazenar índices para edição de media
  window.currentMediaIndices = { yearIndex, monthIndex, itemIndex };
  currentItemIndex = itemIndex;
  isNewItem = false;
  editCurrentItem();
}

function applyMediaFilters() {
  const yearFilter = document.getElementById("filter-year")?.value || "";
  const selectedTypes = Array.from(
    document.querySelectorAll(".media-type-filter:checked"),
  ).map((cb) => cb.value);

  if (!window.mediaAllData) return;

  let filtered = [...window.mediaAllData];

  // Filtrar por ano
  if (yearFilter) {
    filtered = filtered.filter((item) => item.year.toString() === yearFilter);
  }

  // Filtrar por tipo de mídia
  if (selectedTypes.length > 0) {
    filtered = filtered
      .map((yearData) => ({
        ...yearData,
        months: yearData.months
          .map((month) => ({
            ...month,
            items: month.items.filter((item) =>
              selectedTypes.includes(item.media),
            ),
          }))
          .filter((month) => month.items.length > 0),
      }))
      .filter((yearData) => yearData.months.length > 0);
  }

  // Renderizar cards filtrados
  const container = document.getElementById("media-months-container");
  if (!container) return;

  if (filtered.length === 0) {
    container.innerHTML =
      '<p class="text-muted">Nenhum item encontrado com os filtros selecionados.</p>';
    return;
  }

  // Reutilizar lógica de renderização (simplificada)
  const mediaTypeLabels = {
    site: "Site",
    jornal: "Jornal",
    youtube: "YouTube",
    vimeo: "Vimeo",
    tv: "TV",
    radio: "Rádio",
    revista: "Revista",
    artigo: "Artigo",
    internet: "Internet",
    premio: "Prêmio",
    mencaohonrosa: "Menção Honrosa",
  };

  const monthsHtml = filtered
    .map((yearData) => {
      return yearData.months
        .map((month) => {
          const itemsHtml = month.items
            .map((item, itemIndex) => {
              const yearIndex = window.mediaAllData.findIndex(
                (y) => y.id === yearData.id,
              );
              const monthIndex = yearData.months.findIndex(
                (m) => m.id === month.id,
              );

              return `
          <div class="media-card" onclick="editMediaItem(${yearIndex}, ${monthIndex}, ${itemIndex})">
            <div class="media-card-header">
              <h6 class="media-card-title">${escapeHtml(item.title || "")}</h6>
              <span class="media-badge media-badge-${item.media}">${mediaTypeLabels[item.media] || item.media}</span>
            </div>
            <p class="media-card-link"><a href="${item.link?.url || "#"}" target="_blank">${escapeHtml(item.link?.text || "")}</a></p>
            <div class="media-card-meta">
              <span class="media-card-date">${escapeHtml(item.date || "")}</span>
              <span class="media-card-location">${escapeHtml(item.location || "")}</span>
            </div>
          </div>
        `;
            })
            .join("");

          return `
        <div class="media-month-group">
          <h5 class="media-month-title">${month.month} ${yearData.year}</h5>
          <div class="media-cards-row">
            ${itemsHtml}
          </div>
        </div>
      `;
        })
        .join("");
    })
    .join("");

  container.innerHTML = monthsHtml;

  // Re-adicionar event listeners após re-renderizar
  setTimeout(() => {
    document.querySelectorAll(".media-type-filter").forEach((cb) => {
      cb.removeEventListener("change", applyMediaFilters);
      cb.addEventListener("change", applyMediaFilters);
    });
  }, 50);
}

function clearMediaFilters() {
  document.getElementById("filter-year").value = "";
  document
    .querySelectorAll(".media-type-filter")
    .forEach((cb) => (cb.checked = true));
  applyMediaFilters();
  // Re-adicionar event listeners se necessário
  document.querySelectorAll(".media-type-filter").forEach((cb) => {
    cb.removeEventListener("change", applyMediaFilters);
    cb.addEventListener("change", applyMediaFilters);
  });
}

function newStory() {
  if (currentFile !== "ourStory") return;

  isNewItem = true;
  currentItemIndex = -1; // Indica que é novo item

  // Criar item vazio
  const newItem = {
    id: Math.max(...currentData.map((item) => item.id || 0), 0) + 1,
    year: new Date().getFullYear(),
    description: "",
  };

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  document.getElementById("editModalTitle").textContent = "Nova História";

  // Gerar formulário dinamicamente
  const form = document.getElementById("editForm");
  form.innerHTML = generateForm(newItem);

  modal.show();
}

function editCurrentItem() {
  let item = null;

  // Lógica específica para homeFaq (objeto com questions array)
  if (currentFile === "homeFaq" && !isNewItem) {
    item = currentData.questions[currentItemIndex];
  }
  // Lógica específica para media (estrutura aninhada)
  else if (
    currentFile === "media" &&
    !isNewItem &&
    window.currentMediaIndices
  ) {
    const { yearIndex, monthIndex, itemIndex } = window.currentMediaIndices;
    item = currentData[yearIndex].months[monthIndex].items[itemIndex];
  }
  // Lógica padrão
  else if (!isNewItem) {
    item = Array.isArray(currentData)
      ? currentData[currentItemIndex]
      : currentData;
  }

  // Se não é novo item, usar item existente
  if (!isNewItem && item) {
    const modal = new bootstrap.Modal(document.getElementById("editModal"));
    document.getElementById("editModalTitle").textContent =
      `Editar ${currentFile} - Item ${currentItemIndex + 1}`;

    // Gerar formulário dinamicamente
    const form = document.getElementById("editForm");
    form.innerHTML = generateForm(item);

    modal.show();
  }
}

function generateFAQForm(item) {
  const answerText =
    item.items && item.items.length > 0 ? item.items[0].text || "" : "";
  const itemId =
    item.items && item.items.length > 0 ? item.items[0].id || "" : "";

  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="mb-3">
      <label class="form-label"><strong>Título da Pergunta</strong></label>
      <input type="text" class="form-control" id="field_title" value="${escapeHtml(item.title || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Resposta</strong></label>
      <textarea class="form-control" id="field_answer" rows="6">${escapeHtml(answerText)}</textarea>
    </div>
    <div class="id-display">Item ID: ${itemId}</div>
  `;
}

function generateHomeFaqForm(item) {
  const linksHtml =
    item.links && item.links.length > 0
      ? item.links
          .map(
            (link, idx) => `
    <div class="mb-2 p-2 bg-light rounded">
      <small class="text-muted d-block">Link ${idx + 1} (readonly)</small>
      <small><strong>Placeholder:</strong> ${escapeHtml(link.placeholder || "")}</small><br>
      <small><strong>Texto:</strong> ${escapeHtml(link.text || "")}</small><br>
      <small><strong>URL:</strong> ${escapeHtml(link.url || "")}</small>
    </div>
  `,
          )
          .join("")
      : "";

  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="mb-3">
      <label class="form-label"><strong>Título da Pergunta</strong></label>
      <input type="text" class="form-control" id="field_title" value="${escapeHtml(item.title || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Conteúdo</strong></label>
      <textarea class="form-control" id="field_content" rows="6">${escapeHtml(item.content || "")}</textarea>
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Has Links</strong> (readonly)</label>
      <input type="checkbox" class="form-check-input" ${item.hasLinks ? "checked" : ""} disabled>
      <small class="text-muted d-block">${item.hasLinks ? "Sim" : "Não"}</small>
    </div>
    ${
      linksHtml
        ? `
      <div class="mb-3">
        <label class="form-label"><strong>Links</strong> (readonly)</label>
        ${linksHtml}
      </div>
    `
        : ""
    }
  `;
}

function generateMediaForm(item) {
  if (!item) return "<p>Item inválido</p>";

  const mediaTypes = [
    "site",
    "jornal",
    "youtube",
    "vimeo",
    "tv",
    "radio",
    "revista",
    "artigo",
    "internet",
    "premio",
    "mencaohonrosa",
  ];
  const mediaTypeLabels = {
    site: "Site",
    jornal: "Jornal",
    youtube: "YouTube",
    vimeo: "Vimeo",
    tv: "TV",
    radio: "Rádio",
    revista: "Revista",
    artigo: "Artigo",
    internet: "Internet",
    premio: "Prêmio",
    mencaohonrosa: "Menção Honrosa",
  };

  const mediaOptions = mediaTypes
    .map(
      (type) =>
        `<option value="${type}" ${item.media === type ? "selected" : ""}>${mediaTypeLabels[type] || type}</option>`,
    )
    .join("");

  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="mb-3">
      <label class="form-label"><strong>Título</strong></label>
      <input type="text" class="form-control" id="field_title" value="${escapeHtml(item.title || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Texto do Link</strong></label>
      <input type="text" class="form-control" id="field_link_text" value="${escapeHtml(item.link?.text || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>URL do Link</strong></label>
      <input type="text" class="form-control" id="field_link_url" value="${escapeHtml(item.link?.url || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Data</strong></label>
      <input type="text" class="form-control" id="field_date" value="${escapeHtml(item.date || "")}">
      <small class="text-muted">Formato: DD/MM/AAAA</small>
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Localização</strong></label>
      <input type="text" class="form-control" id="field_location" value="${escapeHtml(item.location || "")}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Tipo de Mídia</strong></label>
      <select class="form-select" id="field_media">
        ${mediaOptions}
      </select>
    </div>
  `;
}

function generateTeamForm(item) {
  // Extrair cor CSS para usar no quadrado
  const colorValue = item.colorCard || "transparent";

  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="form-section">
      <div class="form-section-title">Informações Pessoais</div>
      <div class="mb-3">
        <label class="form-label"><strong>Nome</strong></label>
        <input type="text" class="form-control" id="field_name" value="${escapeHtml(item.name || "")}">
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Cargo</strong></label>
          <input type="text" class="form-control" id="field_position" value="${escapeHtml(item.position || "")}">
        </div>
        <div class="col-md-6 mb-3">
          <label class="form-label"><strong>Origem</strong></label>
          <input type="text" class="form-control" id="field_from" value="${escapeHtml(item.from || "")}">
        </div>
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">Visual</div>
      <div class="mb-3">
        <label class="form-label"><strong>Cor do Card</strong></label>
        <div>
          <span class="color-preview" style="background-color: ${colorValue};"></span>
          <span class="text-muted small ms-2">${colorValue}</span>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>URL da Imagem</strong></label>
        <div class="input-group">
          <button class="btn btn-outline-secondary upload-btn-prefix" type="button" disabled title="quem sabe na próxima">
            <span class="material-symbols-outlined">add_photo</span>
          </button>
          <input type="text" class="form-control" id="field_imageUrl" value="${escapeHtml(item.imageUrl || "")}" readonly>
        </div>
      </div>
    </div>
  `;
}

function generatePartnersForm(item) {
  const heightLg = item.height?.lg || "";
  const widthLg = item.width?.lg || "";

  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="form-section">
      <div class="form-section-title">Informações do Parceiro</div>
      <div class="mb-3">
        <label class="form-label"><strong>Nome do Parceiro</strong></label>
        <input type="text" class="form-control" id="field_name" value="${escapeHtml(item.name || "")}">
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>URL do Site</strong></label>
        <input type="text" class="form-control" id="field_url" value="${escapeHtml(item.url || "")}" readonly>
      </div>
      <div class="mb-3">
        <label class="form-label"><strong>URL da Imagem</strong></label>
        <div class="input-group">
          <button class="btn btn-outline-secondary upload-btn-prefix" type="button" disabled title="quem sabe na próxima">
            <span class="material-symbols-outlined">add_photo</span>
          </button>
          <input type="text" class="form-control" id="field_imageUrl" value="${escapeHtml(item.imageUrl || "")}">
        </div>
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">Dimensões Desktop</div>
      <div class="dimensions-group">
        <div>
          <label class="form-label"><strong>Altura (LG)</strong></label>
          <input type="number" step="0.01" class="form-control" id="field_height_lg" value="${heightLg}">
        </div>
        <div>
          <label class="form-label"><strong>Largura (LG)</strong></label>
          <input type="number" step="0.01" class="form-control" id="field_width_lg" value="${widthLg}">
        </div>
      </div>
    </div>
  `;
}

function generateOurStoryForm(item) {
  return `
    <div class="id-display">ID: ${item.id || ""}</div>
    <div class="mb-3">
      <label class="form-label"><strong>Ano</strong></label>
      <input type="number" class="form-control" id="field_year" value="${item.year || ""}">
    </div>
    <div class="mb-3">
      <label class="form-label"><strong>Descrição</strong></label>
      <textarea class="form-control" id="field_description" rows="10">${escapeHtml(item.description || "")}</textarea>
    </div>
  `;
}

function generateForm(item) {
  if (!item || typeof item !== "object") {
    return "<p>Item inválido</p>";
  }

  // Usar formulários específicos para tipos conhecidos
  if (currentFile === "faq") {
    return generateFAQForm(item);
  } else if (currentFile === "homeFaq") {
    return generateHomeFaqForm(item);
  } else if (currentFile === "team") {
    return generateTeamForm(item);
  } else if (currentFile === "partners") {
    return generatePartnersForm(item);
  } else if (currentFile === "ourStory") {
    return generateOurStoryForm(item);
  } else if (currentFile === "media") {
    return generateMediaForm(item);
  }

  // Fallback: geração automática para outros tipos
  let html = "";
  for (const [key, value] of Object.entries(item)) {
    const fieldId = `field_${key}`;
    if (typeof value === "string" && value.length > 100) {
      html += `
        <div class="mb-3">
          <label class="form-label"><strong>${key}</strong></label>
          <textarea class="form-control" id="${fieldId}" rows="4">${escapeHtml(value)}</textarea>
        </div>
      `;
    } else if (typeof value === "object") {
      html += `
        <div class="mb-3">
          <label class="form-label"><strong>${key}</strong> (JSON)</label>
          <textarea class="form-control" id="${fieldId}" rows="4">${JSON.stringify(value, null, 2)}</textarea>
        </div>
      `;
    } else {
      html += `
        <div class="mb-3">
          <label class="form-label"><strong>${key}</strong></label>
          <input type="text" class="form-control" id="${fieldId}" value="${escapeHtml(String(value))}">
        </div>
      `;
    }
  }
  return html;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function saveItem() {
  const form = document.getElementById("editForm");

  // Salvar baseado no tipo de arquivo
  if (currentFile === "homeFaq") {
    // homeFaq é um objeto com questions array
    const item = currentData.questions[currentItemIndex];
    item.title = document.getElementById("field_title").value;
    item.content = document.getElementById("field_content").value;
    // hasLinks e links são readonly, não atualizamos
  } else if (currentFile === "media") {
    // media tem estrutura aninhada
    if (window.currentMediaIndices) {
      const { yearIndex, monthIndex, itemIndex } = window.currentMediaIndices;
      const item = currentData[yearIndex].months[monthIndex].items[itemIndex];
      item.title = document.getElementById("field_title").value;
      if (!item.link) item.link = {};
      item.link.text = document.getElementById("field_link_text").value;
      item.link.url = document.getElementById("field_link_url").value;
      item.date = document.getElementById("field_date").value;
      item.location = document.getElementById("field_location").value;
      item.media = document.getElementById("field_media").value;
      // Atualizar dados globais também
      if (window.mediaAllData) {
        const globalItem =
          window.mediaAllData[yearIndex].months[monthIndex].items[itemIndex];
        globalItem.title = item.title;
        globalItem.link = item.link;
        globalItem.date = item.date;
        globalItem.location = item.location;
        globalItem.media = item.media;
      }
    }
  } else if (!Array.isArray(currentData)) {
    // Se não é array, tratar como objeto único
    saveObjectItem();
    return;
  } else if (currentFile === "faq") {
    const item = currentData[currentItemIndex];
    // FAQ: atualizar title e items[0].text
    item.title = document.getElementById("field_title").value;
    if (!item.items || !Array.isArray(item.items) || item.items.length === 0) {
      item.items = [{ id: "item1", text: "" }];
    }
    item.items[0].text = document.getElementById("field_answer").value;
  } else if (currentFile === "team") {
    const item = currentData[currentItemIndex];
    // Team: atualizar apenas campos editáveis
    item.name = document.getElementById("field_name").value;
    item.position = document.getElementById("field_position").value;
    item.from = document.getElementById("field_from").value;
    // imageUrl não é editável ainda (readonly)
  } else if (currentFile === "partners") {
    const item = currentData[currentItemIndex];
    // Partners: atualizar name, imageUrl e dimensões LG
    item.name = document.getElementById("field_name").value;
    item.imageUrl = document.getElementById("field_imageUrl").value;

    // Preservar estrutura de height e width
    if (!item.height) item.height = {};
    if (!item.width) item.width = {};

    // Atualizar apenas valores LG (preservar XS se existir)
    const heightLg = parseFloat(
      document.getElementById("field_height_lg").value,
    );
    const widthLg = parseFloat(document.getElementById("field_width_lg").value);

    if (!isNaN(heightLg)) item.height.lg = heightLg;
    if (!isNaN(widthLg)) item.width.lg = widthLg;
  } else if (currentFile === "ourStory") {
    if (isNewItem) {
      // Criar novo item
      const newItem = {
        id:
          currentData.length > 0
            ? Math.max(...currentData.map((item) => item.id || 0), 0) + 1
            : 1,
        year: parseInt(document.getElementById("field_year").value),
        description: document.getElementById("field_description").value,
      };
      // Adicionar ao array
      currentData.push(newItem);
      isNewItem = false;
    } else {
      // Editar item existente
      const item = currentData[currentItemIndex];
      item.year = parseInt(document.getElementById("field_year").value);
      item.description = document.getElementById("field_description").value;
    }
  } else {
    // Fallback: geração automática para outros tipos
    const fields = form.querySelectorAll(
      "input:not([readonly]), textarea:not([readonly])",
    );
    fields.forEach((field) => {
      const key = field.id.replace("field_", "");
      let value = field.value;

      // Tentar parsear JSON se parecer ser objeto/array
      if (
        field.tagName === "TEXTAREA" &&
        (value.trim().startsWith("{") || value.trim().startsWith("["))
      ) {
        try {
          value = JSON.parse(value);
        } catch (e) {
          // Mantém como string se não for JSON válido
        }
      }

      item[key] = value;
    });
    currentData[currentItemIndex] = item;
  }

  // Atualizar preview
  if (currentFile === "media" && window.currentMediaIndices) {
    // Para media, re-renderizar completamente
    renderMedia(currentData);
    window.currentMediaIndices = null;
  } else {
    renderVisualPreview(currentFile, currentData);
  }

  // Fechar modal
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("editModal"),
  );
  modal.hide();

  // Resetar flag ao fechar
  if (isNewItem) {
    isNewItem = false;
  }

  // Limpar índices de media
  if (window.currentMediaIndices) {
    window.currentMediaIndices = null;
  }

  showStatus(
    'Item atualizado! Clique em "Salvar Alterações" para salvar no arquivo.',
    "info",
  );
}

function saveObjectItem() {
  // Implementar para objetos únicos
  showStatus("Salvando objeto...", "info");
}

async function saveCurrentFile() {
  if (!currentFile) return;

  const statusDiv = document.getElementById("save-status");

  try {
    const data = currentData;

    if (data === null || data === undefined) {
      throw new Error("Dados inválidos");
    }

    statusDiv.innerHTML = '<span class="text-info">Salvando...</span>';

    const response = await fetch(`${API_BASE}/content/${currentFile}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({ data }),
    });

    const result = await response.json();

    if (response.ok) {
      statusDiv.innerHTML =
        '<span class="text-success">✓ Salvo com sucesso!</span>';
      showStatus("Arquivo salvo com sucesso!", "success");
    } else {
      statusDiv.innerHTML = `<span class="text-danger">Erro: ${result.error}</span>`;
      showStatus("Erro ao salvar", "danger");
    }
  } catch (error) {
    statusDiv.innerHTML = `<span class="text-danger">Erro: ${error.message}</span>`;
    showStatus("Erro ao salvar: " + error.message, "danger");
  }
}

function showStatus(message, type) {
  const statusDiv = document.getElementById("status-message");
  statusDiv.className = `status-message alert alert-${type} alert-dismissible fade show`;
  statusDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
  `;
  setTimeout(() => {
    statusDiv.remove();
  }, 5000);
}

// Enter para login
document.addEventListener("keypress", (e) => {
  if (
    e.key === "Enter" &&
    document.getElementById("login-screen").style.display !== "none"
  ) {
    handleLogin();
  }
});
