/* ─── FEEDBACK DE ARQUIVO ───────────────────────────────────── */
document.getElementById("imagem")?.addEventListener("change", function () {
    const label = document.getElementById("nomeCurso");
    if (label) label.textContent = this.files[0]?.name || "";
});

document.getElementById("imagemProjeto")?.addEventListener("change", function () {
    const label = document.getElementById("nomeProjeto-file");
    if (label) label.textContent = this.files[0]?.name || "";
});

/* ─── FORMAÇÃO ──────────────────────────────────────────────── */
document.getElementById("formFormacao")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const formacao = {
        instituicao: document.getElementById("instituicao").value,
        nivel:       document.getElementById("nivel").value,
        curso:       document.getElementById("curso").value,
        inicio:      document.getElementById("inicio").value,
        fim:         document.getElementById("fim").value,
        atual:       document.getElementById("atual").checked,
    };

    const formacoes = JSON.parse(localStorage.getItem("formacoes")) || [];
    formacoes.push(formacao);
    localStorage.setItem("formacoes", JSON.stringify(formacoes));

    alert("Formação adicionada com sucesso!");
    window.location.href = "index.html";
});

/* ─── CERTIFICADO ───────────────────────────────────────────── */
document.getElementById("formCurso")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const file = document.getElementById("imagem").files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const curso = { imagem: reader.result };
        const cursos = JSON.parse(localStorage.getItem("cursos")) || [];
        cursos.push(curso);
        localStorage.setItem("cursos", JSON.stringify(cursos));
        alert("Certificado adicionado com sucesso!");
        window.location.href = "index.html";
    };

    reader.readAsDataURL(file);
});

/* ─── PROJETO ───────────────────────────────────────────────── */
document.getElementById("formProjeto")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const file = document.getElementById("imagemProjeto").files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const projeto = {
            nome:      document.getElementById("nomeProjeto").value,
            descricao: document.getElementById("descricaoProjeto").value,
            link:      document.getElementById("linkProjeto").value,
            imagem:    reader.result,
            tags:      []
        };

        const projetos = JSON.parse(localStorage.getItem("projetos")) || [];
        projetos.push(projeto);
        localStorage.setItem("projetos", JSON.stringify(projetos));
        alert("Projeto adicionado com sucesso!");
        window.location.href = "index.html";
    };

    reader.readAsDataURL(file);
});

/* ─── COMPETÊNCIA ───────────────────────────────────────────── */
document.getElementById("formCompetencia")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const competencia = { nome: document.getElementById("nomeCompetencia").value };
    const competencias = JSON.parse(localStorage.getItem("competencias")) || [];
    competencias.push(competencia);
    localStorage.setItem("competencias", JSON.stringify(competencias));
    alert("Competência adicionada com sucesso!");
    window.location.href = "index.html";
});

/* ─── LINK ──────────────────────────────────────────────────── */
document.getElementById("formLink")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const link = {
        nome:      document.getElementById("nomeLink").value,
        descricao: document.getElementById("descricaoLink").value,
        url:       document.getElementById("urlLink").value,
    };

    const links = JSON.parse(localStorage.getItem("links")) || [];
    links.push(link);
    localStorage.setItem("links", JSON.stringify(links));
    alert("Link adicionado com sucesso!");
    window.location.href = "index.html";
});

/* ─── VOLTAR ────────────────────────────────────────────────── */
function voltarIndex() {
    window.location.href = "index.html";
}