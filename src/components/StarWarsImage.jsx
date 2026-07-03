export default function StarWarsImage({ category, id, alt, className = 'card-img-top card-img-fixed' }) {
  const imgUrl = `https://github.com/breatheco-de/swapi-images/blob/master/public/images/${category}/${id}.jpg?raw=true`
  const placeholder = 'https://placehold.co/600x400?text=Image+Unavailable'

  return (
    <img
      src={imgUrl}
      className={className}
      alt={alt}
      loading="lazy"
      onError={(e) => { e.target.src = placeholder }}
    />
  )
}
