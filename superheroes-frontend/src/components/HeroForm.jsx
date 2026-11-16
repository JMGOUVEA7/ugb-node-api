import { useState, useEffect } from 'react'

function HeroForm({ onSave, editingHero, onCancel }) {
  const [name, setName] = useState('')
  const [universe, setUniverse] = useState('')
  const [power, setPower] = useState('')
  const [saving, setSaving] = useState(false)

  // Preenche os campos quando um herói é selecionado para edição
  useEffect(() => {
    if (editingHero) {
      setName(editingHero.name || '')
      setUniverse(editingHero.universe || '')
      setPower(editingHero.power || '')
    } else {
      setName('')
      setUniverse('')
      setPower('')
    }
  }, [editingHero])

  async function handleSubmit(e) {
    e.preventDefault()

    if (saving) return

    setSaving(true)

    try {
      const success = await onSave({
        name,
        universe,
        power,
      })

      if (success) {
        setName('')
        setUniverse('')
        setPower('')
      }
    } catch (error) {
      // O componente pai apresenta a mensagem de erro.
    } finally {
      setSaving(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8"
    >
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        {editingHero ? 'Editar herói' : 'Cadastrar herói'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Nome do herói"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={saving}
          className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Universo"
          value={universe}
          onChange={(e) => setUniverse(e.target.value)}
          required
          disabled={saving}
          className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Poder"
          value={power}
          onChange={(e) => setPower(e.target.value)}
          required
          disabled={saving}
          className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-3 mt-5">
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg transition"
        >
          {saving
            ? 'Salvando...'
            : editingHero
              ? 'Salvar alterações'
              : 'Cadastrar'}
        </button>

        {editingHero && (
          <button
            type="button"
            onClick={onCancel}
            disabled={saving}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2 rounded-lg transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default HeroForm
