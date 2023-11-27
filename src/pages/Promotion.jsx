import { HiChevronLeft } from "react-icons/hi2"
import { Link } from "react-router-dom"

export const Promotion = () => {
  return (
    <div>
      <Link to="/" className="flex items-center mb-5">
        <HiChevronLeft style={{ fontSize: "2rem" }} />
        <h2 className="text-3xl">Promotion</h2>
      </Link>
    </div>
  )
}
