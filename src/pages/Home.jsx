import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardSection from "../components/CardSection.jsx";

export const Home = () => {
  const {store} =useGlobalReducer()
  if (store.films.length === 0 || store.planets.length === 0 || store.people.length === 0) return <h1>Loading...</h1>
  return (
    <div className="container">
      <CardSection category="films" />
      <CardSection category="people" />
      <CardSection category="planets" />
    </div>
  )
};

