import { useEffect, useState } from 'react'

import {
  getHeroes,
  createHero,
  updateHero,
  deleteHero,
} from '../services/api'

import HeroCard from '../components/HeroCard'
import HeroForm from '../components/HeroForm'

function Heroes() {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [editingHero, setEditingHero] = useState(null)

  async function loadHeroes() {
    try {
      const data = await getHeroes()
      setHeroes(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadHeroes()
  }, [])

  async function handleSave(hero) {
    try {
      if (editingHero) {
        await updateHero(editingHero.id, hero)
      } else {
        await createHero(hero)
      }

      setEditingHero(null)
      setError('')
      await loadHeroes()
    } catch (error) {
      setError(error.message)
    }
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      'Tem certeza que deseja excluir este herói?'
    )

    if (!confirmed) return

    try {
      await deleteHero(id)
      setError('')
      await loadHeroes()
    } catch (error) {
      setError(error.message)
    }
  }

  if (loading) {
    return <p className="text-slate-500">Carregando heróis...</p>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Heróis
        </h1>

        <p className="text-slate-500 mt-2">
          Gerencie os heróis cadastrados na API.
        </p>
      </div>

      {error && (
        <p className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
          {error}
        </p>
      )}

      <HeroForm
        onSave={handleSave}
        editingHero={editingHero}
        onCancel={() => setEditingHero(null)}
      />

      {heroes.length === 0 ? (
        <p className="text-slate-500">
          Nenhum herói cadastrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {heroes.map((hero) => (
            <HeroCard
              key={hero.id}
              hero={hero}
              onEdit={setEditingHero}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Heroes
