import { useState } from 'react'

function MovieForm({ onSave }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (saving) return

    setSaving(true)

    try {
      const success = await onSave({
        title,
        year: Number(year),
      })

      if (success) {
        setTitle('')
        setYear('')
      }
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
        Cadastrar filme
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Título do filme"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={saving}
          className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Ano de lançamento"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
          disabled={saving}
          className="border border-slate-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <button
        type="submit"
        disabled={saving}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg mt-5 transition"
      >
        {saving ? 'Salvando...' : 'Cadastrar filme'}
      </button>

    </form>
  )
}

export default MovieForm