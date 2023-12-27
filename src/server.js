import http from 'node:http'

// - Criar usuários
// - Listar usuários
// - Edição de usuários
// - Deletar usuários

// CRUD - Create, Read, Update, Delete

// - HTTP
// - Métodos HTTP: GET, POST, PUT, PATCH, DELETE
// - URL
// - Status Code: 200, 201, 404, 500

// GET => Buscar um recurso no servidor
// POST => Criar um novo recurso no servidor
// PUT => Atualizar um recurso existente no servidor
// PATCH => Atualizar uma informação de um recurso existente no servidor
// DELETE => Deletar um recurso do servidor

// HTTP Status Codes => https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

// Stateful - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

const users = []

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    users.push({
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    })

    return res.writeHead(201).end('Criando um novo usuário')
  }

  return res.writeHead(404).end()
})

server.listen(3333)