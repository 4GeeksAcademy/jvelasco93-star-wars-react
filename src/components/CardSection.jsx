import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import { categoryConfig } from "../config.js"
import { Link } from "react-router-dom"
import FavoriteButton from "./FavoriteButton.jsx"
import StarWarsImage from "./StarWarsImage.jsx"

function extraerId(url) {
  return url.split('/').pop()
}

function CardFooter({ item, category, titleKey }) {
  return (
    <div className="card-footer d-flex justify-content-between align-items-center">
      <Link to={`/${category}/${extraerId(item.url)}`} className="btn btn-primary btn-sm">Details</Link>
      <FavoriteButton url={item.url} name={item[titleKey]} category={category} />
    </div>
  )
}

function CardItem({ item, category, config }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <StarWarsImage category={category} id={extraerId(item.url)} alt={item[config.titleKey]} />
        <div className="card-body">
          <h5 className="card-title">{item[config.titleKey]}</h5>
          <ul className="list-unstyled mb-0">
            {config.fields.map((field) => (
              <li key={field.key}><strong>{field.label}:</strong> {item[field.key]}</li>
            ))}
          </ul>
        </div>
        <CardFooter item={item} category={category} titleKey={config.titleKey} />
      </div>
    </div>
  )
}

export default function CardSection({ category, limit = 6 }) {
  const { store } = useGlobalReducer()
  const config = categoryConfig[category]
  const items = store[category]

  const visibleItems = limit ? items.slice(0, limit) : items

  if (!items || items.length === 0) return null

  return (
    <>
      <h2 className="mt-4 mb-3 d-flex justify-content-between align-items-center">
        {config.label}
        {limit !== null && limit !== undefined && items.length > limit && (
          <Link to={`/${category}`} className="btn btn-outline-primary btn-sm">View all →</Link>
        )}
      </h2>
      <div className="row">
        {visibleItems.map((item) => (
          <CardItem key={item.url} item={item} category={category} config={config} />
        ))}
      </div>
    </>
  )
}
