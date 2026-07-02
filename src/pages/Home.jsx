import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useEffect} from "react";
import CardSection from "../components/CardSection.jsx";
import useFetchStarWars from "../hooks/useFetchStarWars.jsx";

export const Home = () => {
  const {store} =useGlobalReducer()
  useFetchStarWars();
  if (store.films.length === 0 || store.planets.length === 0 || store.people.length === 0) return <h1>Loading...</h1>
  return (
    <div className="container">
      <CardSection category="films" />
      <CardSection category="planets" />
      <CardSection category="people" />
    </div>
  )
};

