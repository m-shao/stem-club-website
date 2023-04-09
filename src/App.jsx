import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {

    return (
        <div className="App">
            <div className='flex flex-col h-screen'>
                <Navbar/>
                <Hero/>
            </div>
        </div>
    )
}

export default App
