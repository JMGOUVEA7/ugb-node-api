const API_URL = '/api'

export async function getHeroes() {
    const response = await fetch(`${API_URL}/heroes`)

    if (!response.ok) {
        throw new Error('Erro ao buscar os heróis.')
    }

    return response.json()
}