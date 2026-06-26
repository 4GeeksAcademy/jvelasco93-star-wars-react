import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container mt-4 text-center">
      <h1>Home Page</h1>
      <img
        src="https://storage.googleapis.com/breathecode-asset-images/a06070cd653134050d7731546dee5459f8297bfda19bfff8e5b49d43ab36c899.jpg?raw=true"
        alt=""
        className="img-fluid"
      />
    </div>
  );
};
