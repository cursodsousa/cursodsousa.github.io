function renderCursos(cursos) {
  const container = document.getElementById("cupons-section");
  if (!container) {
    return;
  }

  const html = cursos
    .map((curso) => {
      const buttonText = curso.available ? "Obter com Desconto" : "Indisponivel";
      const buttonAction = curso.available
        ? `return redirectComCupom('${curso.url}')`
        : "return false;";

      return `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card course-card">
            <div class="view overlay">
              <img src="${curso.image}" class="card-img-top" alt="${curso.title}" />
              <a href="#" onclick="${buttonAction}">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <h4 class="card-title">${curso.title}</h4>
              <p class="card-text">${curso.description}</p>
              <a href="#" onclick="${buttonAction}" class="btn btn-primary btn-md">
                ${buttonText}
                <i class="fas fa-shopping-cart ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  container.innerHTML = html;
}

function loadCursos() {
  const loading = document.getElementById("cursos-loading");
  fetch("data/cursos.json", { cache: "no-store" })
    .then((response) => response.json())
    .then((cursos) => {
      if (loading) {
        loading.remove();
      }
      renderCursos(cursos);
    })
    .catch(() => {
      if (loading) {
        loading.textContent =
          "Nao foi possivel carregar os cursos no momento.";
      }
    });
}

document.addEventListener("DOMContentLoaded", loadCursos);
