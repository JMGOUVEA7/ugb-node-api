const API_URL = '/api'


// HERÓIS

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


// FILMES

// buscar todos os filmes
export async function getMovies() {
  const response = await fetch(`${API_URL}/movies`)

  if (!response.ok) {
    throw new Error('Erro ao buscar os filmes.')
  }

  return response.json()
}

// cadastrar filme
export async function createMovie(movie) {
  const response = await fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })

  if (!response.ok) {
    throw new Error('Erro ao cadastrar o filme.')
  }

  return response.json()
}

// atualizar filme
export async function updateMovie(id, movie) {
  const response = await fetch(`${API_URL}/movies/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  })

  if (!response.ok) {
    throw new Error('Erro ao atualizar o filme.')
  }

  return response.json()
}

// excluir filme
export async function deleteMovie(id) {
  const response = await fetch(`${API_URL}/movies/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Erro ao excluir o filme.')
  }

  return true
}