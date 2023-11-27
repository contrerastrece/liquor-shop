import Carousel from "../components/Carousel"
import Search from "../components/Search"
import Popular from "../components/Popular"

export const Home = () => {

  return (
    <div className="pb-20 flex flex-col gap-3 ">
       <Search />
        <hr />
        <h2>Explore Categories</h2>
        <Carousel/>
        <hr />
        <h2>Popular Liquor</h2>
        <Popular/>
    </div>
  )
}

