const dados = require("./cliente.json");
         //   require é uma função que puxa um arquivo para ler no js.
console.log(dados);
console.log(typeof dados);
                        //.stringfy transformou o objeto em string
const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);
                    //.parse transformou a string em objeto
const objetoCliente = JSON.parse(clienteEmString);

console.log(objetoCliente);
console.log(typeof objetoCliente);