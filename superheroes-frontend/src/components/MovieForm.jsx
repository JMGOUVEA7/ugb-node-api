import { useState, useEffect } from 'react'

function MovieForm({ onSave, editingMovie, onCancel }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [saving, setSaving] = useState(false)

  // preencher os campos quando um filme for selecionado para edicao
  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title || '')
      setYear(editingMovie.year || '')
    } else {
      setTitle('')
      setYear('')
    }
  }, [editingMovie])

  // enviar formulario
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

      <h2 className="text-xl font-bold text-black-800 mb-5">
        {editingMovie ? 'Editar filme' : 'Cadastrar filme'}
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

      <div className="flex gap-3 mt-5">

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white px-5 py-2 rounded-lg transition"
        >
          {saving
            ? 'Salvando...'
            : editingMovie
              ? 'Salvar alterações'
              : 'Cadastrar filme'}
        </button>

        {editingMovie && (
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

export default MovieForm