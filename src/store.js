export const initialStore = () => ({
  films: [],
  planets: [],
  people: [],
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
    default:
      throw Error('Unknown action.');
  }
}
