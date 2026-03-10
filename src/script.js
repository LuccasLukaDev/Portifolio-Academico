function mudarConteudo(event, secao) {

    document.querySelectorAll(".sidebar button")
        .forEach((btn) => btn.classList.remove("ativo"));

    event.target.classList.add("ativo");

    const conteudo = document.getElementById("conteudo");

    conteudo.classList.remove('formacoes-layout')
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

            conteudo.classList.add('formacoes-layout')
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
        }

        if (secao === "cursos") {
            conteudo.innerHTML = `
                <h2>Cursos e Certificações</h2>
                <div class="container-certificado">
                    <div class="item-certificado">
                        <a href="../img/inovadores.png" target="_blank" download>
                            <img src="../img/inovadores.png" alt="certificado" class="img-certificado">
                        </a>
                        <p class="texto-certificado"></p>
                    </div>

                    <div class="item-certificado">
                        <img src="../img/pit.png" alt="certificado" class="img-certificado">
                    </div>

                    <div class="item-certificado">
                        <img src="../img/noimg.png" alt="certificado" class="img-certificado">
                    </div>

                    <div class="item-certificado">
                        <img src="../img/noimg.png" alt="certificado" class="img-certificado">
                    </div>
                </div>
            `;
        }

        if (secao === "projetos") {
            conteudo.innerHTML = `
                <h2>Projetos Desenvolvidos</h2>
                <p>Aplicações Android para dispositivos Tectoy (PDV, Mini PDV, Totens).</p>
                <p>Aplicações demonstrativas para eventos executivos.</p>
                <p>Sistema de monitoramento de ônibus em tempo real.</p>
            `;
        }

        if (secao === "competencias") {
            conteudo.innerHTML = `
                <h2>Competências</h2>
                <p><strong>Técnicas:</strong> C, C++, Java, React Native, HTML, CSS, JavaScript, PHP, Python, C#, SQL, Git</p>
                <p><strong>Interpessoais:</strong> Empatia, Disciplina, Resiliência, Adaptabilidade</p>
                <p><strong>Idiomas:</strong> Português (Nativo), Inglês (Fluente)</p>
            `;
        }

        if (secao === "links") {
            conteudo.innerHTML = `
                <h2>🌐 Links Profissionais</h2>

                <div class="links-container">

                    <a href="https://www.linkedin.com/in/lucas-da-silva-alves-18852b2b3" target="_blank" class="link-card">
                        <span class="link-icone">💼</span>
                        <div>
                            <h3>LinkedIn</h3>
                            <p>Perfil profissional</p>
                        </div>
                    </a>

                    <a href="https://github.com/" target="_blank" class="link-card">
                        <span class="link-icone">🐙</span>
                        <div>
                            <h3>GitHub</h3>
                            <p>Repositórios e projetos</p>
                        </div>
                    </a>

                    <a href="mailto:luccaslukadev@gmail.com" class="link-card">
                        <span class="link-icone">📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>Contato profissional</p>
                        </div>
                    </a>

                </div>
            `;
        }

        conteudo.classList.remove('animar');
        carregarFormacoes()
        
    }, 150);
}

function carregarFormacoes(){

    const formacoes = JSON.parse(localStorage.getItem("formacoes")) || []

    const container = document.querySelector(".formacoes")

    if(!container) return

    container.innerHTML += ""

    formacoes.forEach(f => {

        const anoFinal = f.atual ? "Atual" : f.fim

        container.innerHTML += `
            <h4>${f.instituicao} - ${f.nivel}</h4>
            <p>${f.curso} | ${f.inicio} - ${anoFinal}</p>
        `
    })

}

window.onload = carregarFormacoes