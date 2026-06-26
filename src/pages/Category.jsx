import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FALLBACK from "../assets/img/rigo-baby.jpg";
const categoryConfig = {
  films: {
    label: "Films",
    titleKey: "title",
    fields: [
      { key: "episode_id", label: "Episode" },
      { key: "director", label: "Director" },
      { key: "release_date", label: "Release Date" },
    ],
  },
  people: {
    label: "People",
    titleKey: "name",
    fields: [
      { key: "gender", label: "Gender" },
      { key: "birth_year", label: "Birth" },
      { key: "height", label: "Height" },
      { key: "skin_color", label: "Skin" },
    ],
  },
  planets: {
    label: "Planets",
    titleKey: "name",
    fields: [
      { key: "climate", label: "Climate" },
      { key: "terrain", label: "Terrain" },
      { key: "population", label: "Population" },
      { key: "diameter", label: "Diameter" },
    ],
  },
  species: {
    label: "Species",
    titleKey: "name",
    fields: [
      { key: "classification", label: "Classification" },
      { key: "language", label: "Language" },
      { key: "average_height", label: "Avg Height" },
    ],
  },
  vehicles: {
    label: "Vehicles",
    titleKey: "name",
    fields: [
      { key: "model", label: "Model" },
      { key: "manufacturer", label: "Manufacturer" },
      { key: "cost_in_credits", label: "Cost" },
    ],
  },
  starships: {
    label: "Starships",
    titleKey: "name",
    fields: [
      { key: "model", label: "Model" },
      { key: "manufacturer", label: "Manufacturer" },
      { key: "hyperdrive_rating", label: "Hyperdrive" },
    ],
  },
};

export function Category() {
  const { category } = useParams();
  const [data, setData] = useState(null);

  const config = categoryConfig[category];

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`https://swapi.info/api/${category}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    }

    void getData();
  }, [category]);

  function imgUrl(url) {
    const id = url.split("/").filter(Boolean).pop();
    return `https://github.com/breatheco-de/swapi-images/blob/master/public/images/${category}/${id}.jpg?raw=true`;
  }

  if (!config) {
    return (
      <div className="container mt-4">
        <h5>Category not found</h5>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h1>{config.label}</h1>

      {data && (
        <div className="row">
          {data.map((item) => (
            <div
              key={item.url}
              className={`col-12 col-md-6 col-lg-4 col-xl-3 mb-4 ${category}`}
            >
              <div className="card h-100 px-0">
                <div className="image-wrapper">
                  <img
                    src={imgUrl(item.url)}
                    alt={item[config.titleKey]}
                    className="card-img-top"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://placehold.co/600x400?text=NO+IMAGE";
                    }}
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">{item[config.titleKey]}</h4>

                  {config.fields.map((field) => (
                    <p key={field.key} className="card-text mb-1">
                      <strong>{field.label}:</strong> {item[field.key]}
                    </p>
                  ))}
                </div>

                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-outline-primary">More info</button>
                  <button className="btn btn-outline-warning">
                    Add to Favorites
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
