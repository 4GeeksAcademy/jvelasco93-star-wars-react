import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://swapi.info/api/");
        const data = await res.json();
        setCategories(Object.keys(data));
      } catch (err) {
        console.error(err);
      }
    }

    getData();
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars</span>
        </Link>
        <div className="ml-auto d-flex gap-2 align-items-center">
          {categories?.map((cat) => (
            <Link
              key={cat}
              to={`/${cat}`}
              className="btn btn-outline-secondary btn-sm"
            >
              {cat.charAt(0).toUpperCase().concat(cat.slice(1))}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
