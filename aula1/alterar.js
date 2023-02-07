// const objPersonagem = {
//     nome: "Gandalf",
//     classe: "mago",
//     nivel: "20",
//     aliado: {
//         nome: "Saruman",
//         classe: "mago"
//     },
//     status: "desaparecido"
// }

// delete objPersonagem.aliado

// console.log(objPersonagem.aliado) //undefined



// delete objPersonagem.aliado
// delete objPersonagem["status"]


// console.log(objPersonagem.aliado) //undefined
// console.log(objPersonagem.status) //undefined


// const delProp = delete objPersonagem.aliado
// const delPropInexistente = delete objPersonagem["endereco"]

// console.log(delProp) //true
// console.log(delPropInexistente) //true

// console.log(objPersonagem)





const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
  };
  
  console.log(pessoa.nome);
  
  console.log(pessoa.telefone);
  
  pessoa.telefone = "11 2223333444";
  
  console.log(pessoa.telefone);
  
  pessoa.nome = "Luma Silva";
  
  console.log(pessoa);
  
  const novaPessoa = {
    nome: "Pedro",
  };
  
  pessoa = novaPessoa;