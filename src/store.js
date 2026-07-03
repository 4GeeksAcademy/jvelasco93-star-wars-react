export const initialStore = () => ({
  films: [],
  planets: [],
  people: [],
  favorites: []
})

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_films': {
      return {...store, films: action.payload}
    }
    case 'set_planets': {
      return {...store, planets: action.payload}
    }
    case 'set_people': {
      return {...store, people: action.payload}
    }
    case 'set_all_data': {
      return {...store, ...action.payload}
    }
    case 'toggle_favorite': {
      const exists = store.favorites.find(fav => fav.url === action.payload.url)
      if (exists) {
        return {...store, favorites: store.favorites.filter(fav => fav.url !== action.payload.url)}
      }
      return {...store, favorites: [...store.favorites, action.payload]}
    }
    default:
      throw Error('Unknown action.');
  }
}
