
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
 
  return (
    <div>
      <Navbar />
      <div className='m-[50px]'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default App
