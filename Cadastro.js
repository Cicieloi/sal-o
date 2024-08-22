document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registration-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Coletar dados do formulário
        const nome = document.getElementById('nome').value;
        const procedimento = document.getElementById('procedimento').value;
        const sexo = document.getElementById('sexo').value;
        const idade = document.getElementById('idade').value;
        const comoNosConheceu = document.getElementById('comoNosConheceu').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const cpf = document.getElementById('cpf').value;
        const formaPagamento = document.getElementById('formaPagamento').value;

        // Dados do formulário
        const dadosCadastro = {
            nome: nome,
            procedimento: procedimento,
            sexo: sexo,
            idade: idade,
            comoNosConheceu: comoNosConheceu,
            email: email,
            telefone: telefone,
            cpf: cpf,
            formaPagamento: formaPagamento
        };

        // Converter em JSON
        const jsonString = JSON.stringify(dadosCadastro, null, 2);
        console.log(jsonString);
        document.getElementById('registration-form').reset();
    });
});
