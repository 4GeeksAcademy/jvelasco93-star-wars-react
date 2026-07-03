import { Link, useParams, useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { categoryConfig } from "../config.js"
import FavoriteButton from "../components/FavoriteButton.jsx"
import StarWarsImage from "../components/StarWarsImage.jsx"

export default function Detail() {
  const { store } = useGlobalReducer()
  const { category, id } = useParams()
  const navigate = useNavigate()

  const config = categoryConfig[category]
  const item = store[category]?.find(i => i.url.endsWith(`/${id}`))

  if (!store.films.length) return <h1 className="text-center mt-5">Loading...</h1>
  if (!config || !item) return <h1 className="text-center mt-5">Item not found</h1>

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3 mx-auto" style={{ maxWidth: '600px' }}>
        <Link to="/" className="btn btn-outline-secondary btn-sm">← Back home</Link>
        <Link to={`/${category}`} className="btn btn-primary btn-sm">{config.label} →</Link>
      </div>

      <div className="card mx-auto" style={{ maxWidth: '600px' }}>
        <StarWarsImage category={category} id={id} alt={item[config.titleKey]} />
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="card-title mb-0">{item[config.titleKey]}</h1>
            <FavoriteButton url={item.url} name={item[config.titleKey]} category={category} />
          </div>
          <ul className="list-unstyled mt-4">
            {config.fields.map((field) => (
              <li key={field.key} className="mb-2">
                <strong>{field.label}:</strong> {item[field.key]}
              </li>
            ))}
          </ul>
          <button className="btn btn-outline-primary mt-3" onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  )
}
