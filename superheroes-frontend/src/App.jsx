import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Heroes from './pages/Heroes'
import Movies from './pages/Movies'

function App() {
  const [activePage, setActivePage] = useState('heroes')

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        activePage={activePage}
        onNavigate={setActivePage}
      />

      <main className="flex-1 p-8">

        {activePage === 'heroes' && <Heroes />}

        {activePage === 'movies' && <Movies />}

      </main>

    </div>
  )
}

export default App