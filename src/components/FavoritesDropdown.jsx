import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

function extraerId(url) {
  return url.split('/').pop()
}

export default function FavoritesDropdown() {
  const { store, dispatch } = useGlobalReducer()

  function handleRemoveFavorite(e, fav) {
    e.preventDefault()
    e.stopPropagation()
    dispatch({ type: 'toggle_favorite', payload: fav })
  }

  return (
    <div className="dropdown">
      <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa-solid fa-heart heart-icon me-1" />
        <span className="badge bg-danger">{store.favorites.length}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: '250px' }}>
        {store.favorites.length === 0 ? (
          <li><span className="dropdown-item-text text-muted">No favorites yet</span></li>
        ) : (
          store.favorites.map((fav) => (
            <li key={fav.url} className="d-flex align-items-center">
              <Link to={`/${fav.category}/${extraerId(fav.url)}`} className="dropdown-item">
                {fav.name}
              </Link>
              <button
                className="btn btn-sm btn-link text-danger me-2"
                onClick={(e) => handleRemoveFavorite(e, fav)}
                title="Remove"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
