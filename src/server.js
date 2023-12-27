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

const server = http.createServer(async (req, res) => {
  const { method, url } = req

  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

  if (method === 'GET' && url === '/users') {
    return res
      .setHeader('Content-Type', 'application/json')
      .end(JSON.stringify(users))
  }

  if (method === 'POST' && url === '/users') {
    const { name, email } = req.body

    users.push({
      id: 1,
      name,
      email
    })

    return res.writeHead(201).end('Criando um novo usuário')
  }

  return res.writeHead(404).end()
})

server.listen(3333)