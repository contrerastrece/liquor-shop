
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Popular from './components/Popular'

function App() {

  return (
    <div className='pb-20 flex flex-col gap-3'>
     <Navbar/>
     <hr />
     <h2>Explore Categories</h2>
     <Carousel/>
     <hr />
     <h2>Popular Liquor</h2>
     <Popular/>
     
     <Footer/>
    </div>
  )
}

export default App
