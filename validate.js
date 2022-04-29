function validarDados() {
    window.event.preventDefault()

    if (document.form.nome.value == "") {
        alert("O campo Nome é obrigatório")
        document.form.nome.focus()
    } else if (document.form.nome.value.length > 50) {
        alert("O campo Nome deve conter no máximo 50 caracteres")
        document.form.nome.focus()
    } else if (document.form.email.value == "") {
        alert("O campo Email é obrigatório")
        document.form.email.focus()
    } else if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1) {
        alert("Insira um email válido. Ex: nome@dominio.com")
        document.form.email.focus()
    } else if (document.form.assunto.value == "") {
        alert("O campo Assunto é obrigatório")
        document.form.assunto.focus()
    } else if (document.form.assunto.value.length > 50) {
        alert("O campo Assunto deve conter no máximo 50 caracteres")
        document.form.assunto.focus()
    } else if (document.form.mensagem.value == "") {
        alert("O campo Mensagem é obrigatório")
        document.form.mensagem.focus()
    } else if (document.form.mensagem.value.length > 300) {
        alert("Sua mensagem deve conter no máximo 300 caracteres")
        document.form.mensagem.focus()
    } else {
        alert("Formulário enviado, obrigado pelo contato!")
        document.form.nome.value = ""
        document.form.email.value = ""
        document.form.assunto.value = ""
        document.form.mensagem.value = ""
    }
}

document.querySelector("form").addEventListener("submit", validarDados)