console.log('Conhecendo as listas')

// Criando uma lista de destinos
const listaDeDestinos = new Array(
  'Salvador',
  'São Paulo',
  'Rio de Janeiro',
  'Curitiba',
)

// Adicionando mais itens na lista
listaDeDestinos.push('Brasília')

// Removendo itens da lista
listaDeDestinos.splice(1, 1)

// Imprimindo minha lista
console.log('Destinos possíveis:')
console.log(listaDeDestinos)

// Selecionando um índice específico
console.log(listaDeDestinos[3])
