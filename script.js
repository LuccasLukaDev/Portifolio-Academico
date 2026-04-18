function inicializarDados() {

  if (!localStorage.getItem("projetos")) {
    localStorage.setItem("projetos", JSON.stringify([
      {
        nome: "Dashboard IBGE",
        imagem: "img/janosys.png",
        descricao: "Aplicação web com gráficos interativos",
        link: "https://github.com/LuccasLukaDev/Janosys-Project"
      }
    ]));
  }

  if (!localStorage.getItem("cursos")) {
    localStorage.setItem("cursos", JSON.stringify([
      {
        imagem: "img/inovadores.png"
      },
      {
        imagem: "img/pit.png"
      }
    ]));
  }

  if (!localStorage.getItem("formacoes")) {
    localStorage.setItem("formacoes", JSON.stringify([]));
  }

  if (!localStorage.getItem("competencias")) {
    localStorage.setItem("competencias", JSON.stringify([]));
  }

  if (!localStorage.getItem("links")) {
    localStorage.setItem("links", JSON.stringify([]));
  }

}

function mudarConteudo(event, secao) {
  document
    .querySelectorAll(".sidebar button")
    .forEach((btn) => btn.classList.remove("ativo"));

  event.target.classList.add("ativo");

  const conteudo = document.getElementById("conteudo");

  conteudo.classList.remove("formacoes-layout");
  conteudo.classList.add("animar");

  setTimeout(() => {
    if (secao === "apresentacao") {
      conteudo.innerHTML = `
                <h2>Apresentação</h2>
                <p>
                    👋 Olá! Sou <strong>Lucas da Silva Alves</strong>, Desenvolvedor Full Stack 💻 
                    com experiência em desenvolvimento <strong>Android 📱</strong>, sistemas e 
                    tecnologias como <strong>Java ☕</strong>, <strong>Python 🐍</strong>, 
                    <strong>HTML 🌐</strong>, <strong>CSS 🎨</strong> e 
                    <strong>JavaScript ⚡</strong>, entre outras.

                    <br><br>

                    🚀 Busco criar soluções eficientes e inovadoras, aprendendo constantemente 
                    e entregando projetos de qualidade.

                    <br><br>

                    🌍 Falo <strong>Português 🇧🇷</strong> e <strong>Inglês 🇺🇸</strong> fluentemente 
                    e estou sempre aberto a novos desafios e oportunidades na área de tecnologia.
                </p>
            `;
    }

    if (secao === "formacao") {
      conteudo.classList.add("formacoes-layout");

      conteudo.innerHTML = `
                <div class="card-formacoes">

                    <div class="formacoes">
                        <h2><i class="fas fa-graduation-cap"></i> Formações</h2>

                        <h4>FATEC - Centro Paula Souza - Superior</h4>
                        <p>Desenvolvimento de Software Multiplataforma | Atual - 2028</p>

                        <h4>UNIP - UNIVERSIDADE PAULISTA - Superior</h4>
                        <p>Análise e Desenvolvimento de Sistemas | 2018 - 2019</p>

                        <h4>ETEC - Centro Paula Souza - Técnico</h4>
                        <p>Desenvolvimento de Sistemas | 2022 - 2024</p>

                        <h4>Microcamp - Técnico</h4>
                        <p>Inglês | 2015 - 2018</p>

                        <h4>Microcamp - Técnico</h4>
                        <p>Informática | 2016 - 2018</p>
                    </div>

                    <div class="linguagens">
                        <h2><i class="fas fa-language"></i> Linguas</h2>
                        <h4>Fluente</h4>
                        <p>Português <br> Inglês</p>

                        <h4>Intermediário</h4>
                        <p>Espanhol</p>

                        <h4>Básico</h4>
                        <p>Alemão <br> Japones</p>
                    </div>

                </div>
            `;

      carregarFormacoes();
    }

    if (secao === "cursos") {
      conteudo.innerHTML = `
                <h2>Cursos e Certificações</h2>
                <h3>*Clique em um certificado para visualizar em outra aba*</h3>

                <div class="container-certificado">
                </div>
            `;

      carregarCursos();
    }

    if (secao === "projetos") {
      conteudo.innerHTML = `
            <h2>Projetos Desenvolvidos</h2>

            <div class="projetos-container" id="listaProjetos">

                <div class="projeto-card">
                    <img src="img/janosys.png" alt="Projeto Tectoy">
                    <h3>Dashboard Censo IBGE 2010 x 2022 — SJC</h3>
                    <p> 
                    Aplicação web para visualização e análise dos dados do Censo 2022 x 2010 de São José dos Campos, utilizando 
                    gráficos interativos e filtros por região e faixa etária para facilitar a interpretação das informações.</p>
                    <button class="btn-projeto" onclick="abrirProjeto('https://github.com/LuccasLukaDev/Janosys-Project')">
                        <i class="fa-brands fa-github"></i> Ver Repositório
                    </button>
                </div>

                <div class="projeto-card">
                    <img src="img/janosys.png" alt="Projeto Tectoy">
                    <h3>Dashboard Censo IBGE 2010 x 2022 — SJC</h3>
                    <p> 
                    Aplicação web para visualização e análise dos dados do Censo 2022 x 2010 de São José dos Campos, utilizando 
                    gráficos interativos e filtros por região e faixa etária para facilitar a interpretação das informações.</p>
                    <button class="btn-projeto" onclick="abrirProjeto('https://github.com/LuccasLukaDev/Janosys-Project')">
                        <i class="fa-brands fa-github"></i> Ver Repositório
                    </button>
                </div>
            </div>
        `;

      carregarProjetos();
    }

    if (secao === "competencias") {
      conteudo.innerHTML = `
                <div class="card-tecnologias">
                    <div class="tech-categorias">
                        <h3>Front-end</h3>
                        <div>
                            <div class="tech-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/>
                            </div>
                            <div class="tech-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
                            </div>
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Back-end</h3>
                        <div>
                            <div class="tech-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"/>
                            </div>
                            <div class="tech-wrapper">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg"/>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"/>
                            </div>
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Nuvem & DevOps</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"/>
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Mobile</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" />
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Geral & Desktop</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"/>
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Controle de Versão</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            `;

      carregarCompetencias();
    }

    if (secao === "links") {
      conteudo.innerHTML = `
                <h2><i class="fa-solid fa-link"></i> Links Profissionais</h2>

                <div class="links-container">

                    <a href="https://www.linkedin.com/" target="_blank" class="link-card">
                        <i class="fa-brands fa-linkedin fa-2x"></i>
                        <div>
                            <h3>LinkedIn</h3>
                            <p>Perfil profissional</p>
                        </div>
                    </a>

                    <a href="https://github.com/" target="_blank" class="link-card">
                        <i class="fa-brands fa-github fa-2x"></i>
                        <div>
                            <h3>GitHub</h3>
                            <p>Repositórios e projetos</p>
                        </div>
                    </a>

                    <a href="mailto:luccaslukadev@gmail.com" class="link-card">
                        <i class="fa-solid fa-envelope fa-2x"></i>
                        <div>
                            <h3>Email</h3>
                            <p>Contato profissional</p>
                        </div>
                    </a>

                </div>
            `;

      carregarLinks();
    }

    conteudo.classList.remove("animar");
  }, 150);
}

function carregarFormacoes() {
  const formacoes = JSON.parse(localStorage.getItem("formacoes")) || [];

  const container = document.querySelector(".formacoes");

  if (!container) return;

  formacoes.forEach((f) => {
    const anoFinal = f.atual ? "Atual" : f.fim;

    container.innerHTML += `
            <h4>${f.instituicao} - ${f.nivel}</h4>
            <p>${f.curso} | ${f.inicio} - ${anoFinal}</p>
        `;
  });
}

function carregarCursos() {
  const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
  const container = document.querySelector(".container-certificado");

  if (!container) return;

  container.innerHTML = "";

  cursos.forEach((c) => {
    const div = document.createElement("div");
    div.classList.add("item-certificado");

    const img = document.createElement("img");
    img.src = c.imagem;
    img.classList.add("img-certificado");

    img.addEventListener("click", () => abrirImagem(c.imagem));

    div.appendChild(img);
    container.appendChild(div);
  });
}

function abrirImagem(base64) {
  const byteString = atob(base64.split(",")[1]);
  const mimeString = base64.split(",")[0].split(":")[1].split(";")[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([ab], { type: mimeString });
  const url = URL.createObjectURL(blob);

  window.open(url, "_blank");
}

function carregarProjetos() {
  const projetos = JSON.parse(localStorage.getItem("projetos")) || [];

  const container = document.getElementById("listaProjetos");

  if (!container) return;

  projetos.forEach((p) => {
    container.innerHTML += `
      <div class="projeto-card">

        <img src="${p.imagem}">

        <h3>${p.nome}</h3>

        <p>${p.descricao}</p>

        <button class="btn-projeto" onclick="abrirProjeto('${p.link}')">
          <i class="fa-brands fa-github"></i> Ver Repositório
        </button>

      </div>
    `;
  });
}

function abrirProjeto(link){
  window.open(link, "_blank");
}

function carregarCompetencias() {
  const competencias = JSON.parse(localStorage.getItem("competencias")) || [];

  const container = document.getElementById("listaCompetencias");

  if (!container) return;

  competencias.forEach((c) => {
    container.innerHTML += `
        <p>${c.nome}</p>
        `;
  });
}

function carregarLinks() {
  const links = JSON.parse(localStorage.getItem("links")) || [];

  const container = document.querySelector(".links-container");

  if (!container) return;

  links.forEach((l) => {
    container.innerHTML += `
        <a href="${l.url}" target="_blank" class="link-card">
            <span class="link-icone">🌐</span>
            <div>
                <h3>${l.nome}</h3>
                <p>${l.descricao}</p>
            </div>
        </a>
        `;
  });
}

function acessarAdmin(){

    const senha = prompt("Digite a senha de administrador:");

    if(senha === "admin123"){
        window.location.href = "indexAdm.html";
    }
    else if(senha !== null){
        alert("Senha incorreta!");
    }

}

window.onload = () => {
  inicializarDados();
  carregarFormacoes();
};
