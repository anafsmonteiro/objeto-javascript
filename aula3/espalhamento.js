const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0], //Vamos dizer que queremos espalhar o que está dentro do objeto de endereço. Para isso, usaremos o operador de espalhamento reticência e chamaremos o cliente.enderecos[0], no índice zero.
}

console.log(encomenda);

//Que o spread operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extraí-los de um array e formar um novo array.