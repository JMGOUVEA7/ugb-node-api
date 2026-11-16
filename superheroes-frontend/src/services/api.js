const API_URL = '/api'

export async function getHeroes() {
  const response = await fetch(`${API_URL}/heroes`)

  if (!response.ok) {
    throw new Error('Erro ao buscar os heróis.')
  }

  return response.json()
}

export async function createHero(hero) {
  const response = await fetch(`${API_URL}/heroes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  })

  if (!response.ok) {
    throw new Error('Erro ao cadastrar o herói.')
  }

  return response.json()
}

export async function updateHero(id, hero) {
  const response = await fetch(`${API_URL}/heroes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  })

  if (!response.ok) {
    throw new Error('Erro ao atualizar o herói.')
  }

  return response.json()
}

export async function deleteHero(id) {
  const response = await fetch(`${API_URL}/heroes/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Erro ao excluir o herói.')
  }

  return true
}
