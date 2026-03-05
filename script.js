function mudarConteudo(event, secao) {

    // remover botão ativo
    document.querySelectorAll(".sidebar button")
        .forEach(btn => btn.classList.remove("ativo"));

    event.target.classList.add("ativo");

    const conteudo = document.getElementById("conteudo");

    if (secao === "apresentacao") {
        conteudo.innerHTML = `
            <h2>Apresentação</h2>
            <p>Sou estudante da FATEC em Desenvolvimento de Software Multiplataforma.</p>
            <p>Tenho experiência com desenvolvimento Android, suporte técnico e soluções administrativas.</p>
            <p>Busco crescimento profissional na área de desenvolvimento full stack.</p>
        `;
    }

    if (secao === "formacao") {
        conteudo.innerHTML = `
            <h2>Formação Acadêmica</h2>
            <p>FATEC - Desenvolvimento de Software Multiplataforma (Atual)</p>
            <p>ETEC - Desenvolvimento de Sistemas (2022 - 2024)</p>
            <p>UNIP - Análise e Desenvolvimento de Sistemas</p>
        `;
    }

    if (secao === "cursos") {
        conteudo.innerHTML = `
            <h2>Cursos e Certificações</h2>
            <p>Informática - Microcamp</p>
            <p>Inglês - Microcamp</p>
            <p>Fundamentos em Tecnologias</p>
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
            <h2>Links Profissionais</h2>
            <p><a href="https://www.linkedin.com/in/lucas-da-silva-alves-18852b2b3" target="_blank" style="color:#38bdf8;">LinkedIn</a></p>
        `;
    }
}