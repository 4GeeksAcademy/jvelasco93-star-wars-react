import { useParams, Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import CardSection from "../components/CardSection.jsx"

export default function CategoryPage() {
  const { store } = useGlobalReducer()
  const { category } = useParams()

  if (!store.films.length) return <h1 className="text-center mt-5">Loading...</h1>

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-outline-secondary mb-3">← Back home</Link>
      <CardSection category={category} limit={null} />
    </div>
  )
}
