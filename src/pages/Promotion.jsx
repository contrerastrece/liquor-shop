import { HiChevronLeft } from "react-icons/hi2"
import { Link } from "react-router-dom"
import { LottieAnimation } from "../components/LottieAnimation"
import b from '../assets/3.json';
export const Promotion = () => {
  return (
    <div>
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-3xl">Promotion</h2>
      </Link>
      <div className="">
        <LottieAnimation animacion={b} alto={300}/>
      </div>
    </div>
  )
}
