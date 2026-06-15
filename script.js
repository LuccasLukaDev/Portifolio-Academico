function inicializarDados() {
    if (!localStorage.getItem("projetos")) {
        localStorage.setItem("projetos", JSON.stringify([
            {
                nome: "Dashboard Interativo do Censo IBGE (2010 × 2022)",
                imagem: "img/janosys.png",
                descricao: "Aplicação web para visualização comparativa dos dados do Censo IBGE entre 2010 e 2022 em São José dos Campos, com gráficos dinâmicos, filtros por região e análise por faixa etária.",
                link: "https://github.com/LuccasLukaDev/Janosys-Project",
                tags: ["HTML", "CSS", "JavaScript", "Chart.js"]
            },
            {
                nome: "Plataforma de Normas Aeronáuticas — Akaer",
                imagem: "img/img-akaer-project.png",
                descricao: "Plataforma web para centralizar, organizar e correlacionar requisitos normativos aeronáuticos, com controle de acesso por perfil, histórico de versões e filtros avançados. Desenvolvida em parceria com a Akaer — empresa de engenharia aeroespacial e defesa de SJC — como projeto integrado da FATEC-SJC (2026/1).",
                link: "https://github.com/janosystime/Janosys-Project-1-Akaer",
                tags: ["React", "Node.js", "Prisma", "MySQL", "Docker"]
            }
        ]));
    }

    if (!localStorage.getItem("cursos")) {
        localStorage.setItem("cursos", JSON.stringify([
            { imagem: "img/inovadores.png" },
            { imagem: "img/pit.png" }
        ]));
    }

    if (!localStorage.getItem("formacoes"))   localStorage.setItem("formacoes",   JSON.stringify([]));
    if (!localStorage.getItem("competencias")) localStorage.setItem("competencias", JSON.stringify([]));
    if (!localStorage.getItem("links"))        localStorage.setItem("links",        JSON.stringify([]));
}

function mudarConteudo(event, secao) {
    document.querySelectorAll(".sidebar button").forEach(btn => btn.classList.remove("ativo"));
    event.currentTarget.classList.add("ativo");

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

                        <div class="formacao-item">
                            <h4>FATEC — Centro Paula Souza</h4>
                            <p>Superior · Desenvolvimento de Software Multiplataforma · Atual – 2028</p>
                        </div>
                        <div class="formacao-item">
                            <h4>UNIP — Universidade Paulista</h4>
                            <p>Superior · Análise e Desenvolvimento de Sistemas · 2018 – 2019</p>
                        </div>
                        <div class="formacao-item">
                            <h4>ETEC — Centro Paula Souza</h4>
                            <p>Técnico · Desenvolvimento de Sistemas · 2022 – 2024</p>
                        </div>
                        <div class="formacao-item">
                            <h4>Microcamp</h4>
                            <p>Técnico · Inglês · 2015 – 2018</p>
                        </div>
                        <div class="formacao-item">
                            <h4>Microcamp</h4>
                            <p>Técnico · Informática · 2016 – 2018</p>
                        </div>
                    </div>

                    <div class="linguagens">
                        <h2><i class="fas fa-language"></i> Línguas</h2>
                        <h4>Fluente</h4>
                        <p>Português<br>Inglês</p>
                        <h4>Intermediário</h4>
                        <p>Espanhol</p>
                        <h4>Básico</h4>
                        <p>Alemão<br>Japonês</p>
                    </div>
                </div>
            `;

            carregarFormacoes();
        }

        if (secao === "cursos") {
            conteudo.innerHTML = `
                <h2>Cursos e Certificações</h2>
                <h3>Clique em um certificado para ampliar</h3>
                <div class="container-certificado"></div>
            `;
            carregarCursos();
        }

        if (secao === "projetos") {
            conteudo.innerHTML = `
                <h2>Projetos Desenvolvidos</h2>
                <div class="projetos-container" id="listaProjetos"></div>
            `;
            carregarProjetos();
        }

        if (secao === "competencias") {
            conteudo.innerHTML = `
                <h2>Competências Técnicas</h2>
                <div class="card-tecnologias">
                    <div class="tech-categorias">
                        <h3>Front-end</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" title="HTML5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" title="CSS3">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="JavaScript">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original-wordmark.svg" title="React Native">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" title="Bootstrap">
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Back-end</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" title="Java">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" title="PHP">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" title="Python">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg" title="Flask">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" title="MySQL">
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Nuvem & DevOps</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" title="AWS">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" title="Docker">
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Mobile</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original-wordmark.svg" title="Expo">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" title="Android Studio">
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Geral & Desktop</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" title="C#">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" title="C++">
                        </div>
                    </div>

                    <div class="tech-categorias">
                        <h3>Controle de Versão</h3>
                        <div class="tech-wrapper">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" title="Git">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" title="GitHub">
                        </div>
                    </div>
                </div>
            `;

            carregarCompetencias();
        }

        if (secao === "links") {
            conteudo.innerHTML = `
                <h2>Links Profissionais</h2>
                <div class="links-container">
                    <a href="https://www.linkedin.com/in/lucas-da-silva-alves-18852b2b3" target="_blank" class="link-card">
                        <i class="fa-brands fa-linkedin fa-lg"></i>
                        <div>
                            <h3>LinkedIn</h3>
                            <p>Perfil profissional</p>
                        </div>
                    </a>
                    <a href="https://github.com/LuccasLukaDev" target="_blank" class="link-card">
                        <i class="fa-brands fa-github fa-lg"></i>
                        <div>
                            <h3>GitHub</h3>
                            <p>Repositórios e projetos</p>
                        </div>
                    </a>
                    <a href="mailto:luccaslukadev@gmail.com" class="link-card">
                        <i class="fa-solid fa-envelope fa-lg"></i>
                        <div>
                            <h3>Email</h3>
                            <p>luccaslukadev@gmail.com</p>
                        </div>
                    </a>
                </div>
            `;

            carregarLinks();
        }

        conteudo.classList.remove("animar");
    }, 160);
}

/* ─── LOADERS ───────────────────────────────────────────────── */

function carregarFormacoes() {
    const formacoes = JSON.parse(localStorage.getItem("formacoes")) || [];
    const container = document.querySelector(".formacoes");
    if (!container || !formacoes.length) return;

    formacoes.forEach(f => {
        const anoFinal = f.atual ? "Atual" : f.fim;
        container.innerHTML += `
            <div class="formacao-item">
                <h4>${f.instituicao} — ${f.nivel}</h4>
                <p>${f.curso} · ${f.inicio} – ${anoFinal}</p>
            </div>
        `;
    });
}

function carregarCursos() {
    const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
    const container = document.querySelector(".container-certificado");
    if (!container) return;

    container.innerHTML = cursos.map(c => `
        <div class="item-certificado" onclick="abrirImagem('${c.imagem}')">
            <img src="${c.imagem}" class="img-certificado" alt="Certificado">
        </div>
    `).join('');
}

function abrirImagem(caminho) {
    window.open(caminho, "_blank");
}

function carregarProjetos() {
    const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
    const container = document.getElementById("listaProjetos");
    if (!container) return;

    container.innerHTML = projetos.map(p => {
        const tags = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
        return `
            <div class="projeto-card">
                <img src="${p.imagem}" alt="${p.nome}">
                <div class="projeto-card-body">
                    <h3>${p.nome}</h3>
                    <p>${p.descricao}</p>
                    ${tags ? `<div class="projeto-tags">${tags}</div>` : ''}
                    <button class="btn-projeto" onclick="abrirProjeto('${p.link}')">
                        <i class="fa-brands fa-github"></i> Ver Repositório
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function abrirProjeto(link) {
    window.open(link, "_blank");
}

function carregarCompetencias() {
    const competencias = JSON.parse(localStorage.getItem("competencias")) || [];
    if (!competencias.length) return;

    const extra = document.createElement("div");
    extra.className = "tech-categorias";
    extra.innerHTML = `
        <h3>Outras</h3>
        <div class="tech-wrapper" style="flex-direction:column;align-items:flex-start;gap:4px;">
            ${competencias.map(c => `<span style="font-size:13px;color:var(--text-secondary)">${c.nome}</span>`).join('')}
        </div>
    `;
    document.querySelector(".card-tecnologias")?.appendChild(extra);
}

function carregarLinks() {
    const links = JSON.parse(localStorage.getItem("links")) || [];
    const container = document.querySelector(".links-container");
    if (!container || !links.length) return;

    links.forEach(l => {
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

function acessarAdmin() {
    const senha = prompt("Senha de administrador:");
    if (senha === "admin123") {
        window.location.href = "indexAdm.html";
    } else if (senha !== null) {
        alert("Senha incorreta!");
    }
}

window.onload = () => {
    inicializarDados();
};