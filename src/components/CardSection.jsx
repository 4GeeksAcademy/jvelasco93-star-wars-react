import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

const categoryConfig = {
  films: {
    label: 'Films',
    titleKey: 'title',
    fields: [
      { key: 'episode_id', label: 'Episode' },
      { key: 'director', label: 'Director' },
      { key: 'release_date', label: 'Release Date' },
    ]
  },
  planets: {
    label: 'Planets',
    titleKey: 'name',
    fields: [
      { key: 'climate', label: 'Climate' },
      { key: 'population', label: 'Population' },
      { key: 'terrain', label: 'Terrain' },
    ]
  },
  people: {
    label: 'People',
    titleKey: 'name',
    fields: [
      { key: 'gender', label: 'Gender' },
      { key: 'height', label: 'Height' },
      { key: 'birth_year', label: 'Birth' },
    ]
  }
}

export default function CardSection({ category }) {
  const { store } = useGlobalReducer()
  const config = categoryConfig[category]
  const items = store[category]

  if (!items || items.length === 0) return null

  return (
    <>
      <h2 className="mt-4 mb-3">{config.label}</h2>
      <div className="row">
        {items.slice(0, 6).map((item) => (
          <div className="col-md-4 mb-3" key={item.url}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item[config.titleKey]}</h5>
                <ul className="list-unstyled mb-0">
                  {config.fields.map((field) => (
                    <li key={field.key}><strong>{field.label}:</strong> {item[field.key]}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
