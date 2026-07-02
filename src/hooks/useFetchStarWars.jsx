import { useEffect } from "react";
import useGlobalContext from "./useGlobalReducer";

export default function useFetchStarWars() {
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    async function fetchAll() {
      try {
        const [filmsRes, planetsRes, peopleRes] = await Promise.all([
          fetch('https://swapi.info/api/films'),
          fetch('https://swapi.info/api/planets'),
          fetch('https://swapi.info/api/people'),
        ])
        const [films, planets, people] = await Promise.all([
          filmsRes.json(),
          planetsRes.json(),
          peopleRes.json(),
        ])
        dispatch({ type: 'set_all_data', payload: { films, planets, people } })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    void fetchAll()
  }, [dispatch]);
}