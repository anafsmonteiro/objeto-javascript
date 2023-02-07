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
// Que para extrair chaves e valores de objetos é possível utilizar métodos de Object;
const chavesDoObjeto = Object.keys(cliente);  //Que funções como .entries, .key e .value podem ser úteis na hora de trabalhar com objetos;

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
console.error("Erro. É necessário ter um endereço cadastrado")
}