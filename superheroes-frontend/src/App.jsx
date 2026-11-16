import Sidebar from './components/Sidebar'
import Heroes from './pages/Heroes'

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <main className="flex-1 p-8">
        <Heroes />
      </main>

    </div>
  )
}

export default App
