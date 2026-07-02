import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export default function FavoriteButton({ url, name, category }) {
  const { store, dispatch } = useGlobalReducer()

  function isFavorite() {
    return store.favorites.some(fav => fav.url === url)
  }

  function handleToggleFavorite() {
    dispatch({
      type: 'toggle_favorite',
      payload: { category, url, name }
    })
  }

  const heartClassName = `fa-${isFavorite() ? 'solid' : 'regular'} fa-heart heart-icon${isFavorite() ? ' text-danger' : ''}`

  return <i className={heartClassName} onClick={handleToggleFavorite} />
}
