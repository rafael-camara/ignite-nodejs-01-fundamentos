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

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/users') {
    return res.end('Listagem de usuários')
  }

  if (method === 'POST' && url === '/users') {
    return res.end('Criando um novo usuário')
  }

  return res.end('Hello World')
})

server.listen(3333)