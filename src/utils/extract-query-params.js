// ?search=Rafael&page=2 => substr(1) => search=Rafael&page=2
// search=Rafael&page=2 => split('&') => ['search=Rafael', 'page=2']

// ['search', 'Rafael']
// ['page', '2']

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = param.split('=')

    queryParams[key] = value

    return queryParams
  }, {})
}