import { useEffect, useState } from 'react'
import { getHeroes } from '../services/api'
import HeroCard from '../components/HeroCard'

function Heroes() {
  const [heroes, setHeroes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
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

    loadHeroes()
  }, [])

  if (loading) {
    return <p className="text-slate-500">Carregando heróis...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Heróis
        </h1>

        <p className="text-black-500 mt-2">
          Gerencie os heróis cadastrados na API.
        </p>
      </div>

      {heroes.length === 0 ? (
        <p className="text-slate-500">
          Nenhum herói cadastrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Heroes
