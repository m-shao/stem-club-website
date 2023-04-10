import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'

import minglunIcon from './images/minglun-icon.svg'
import nehaIcon from './images/neha-icon.svg'
import zaaraIcon from './images/zaara-icon.svg'

function App() {

    return (
        <div className="App">
            <div className='flex flex-col h-screen'>
                <Navbar/>
                <Hero/>
            </div>
            <div className=' bg-stem-green p-6 pt-52 flex justify-center'>
                <div className='w-full max-w-6xl flex flex-col items-center text-center gap-20'>
                    <h1 className='text-5xl font-extrabold text-white'>Meet Our Team</h1>
                    <div className='flex justify-center gap-20 max-w-4xl w-full flex-wrap'>
                        <Card
                            icon={minglunIcon}
                            name={"Minglun Shao"}
                            title={"Vice President"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus autem deserunt quod atque modi esse quia, asperiores minus expedita dolorum?"}/>
                        <Card
                            icon={nehaIcon}
                            name={"Neha Kasoju"}
                            title={"President"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus autem deserunt quod atque modi esse quia, asperiores minus expedita dolorum?"}/>
                        <Card
                            icon={zaaraIcon}
                            name={"Zaara Mahzar"}
                            title={"Vice President"}
                            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus autem deserunt quod atque modi esse quia, asperiores minus expedita dolorum?"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
