export const categoryConfig = {
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
