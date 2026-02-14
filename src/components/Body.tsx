import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_LIST } from "../utils/constants";
import Shimmer from "./Shimmer";

interface Restaurant {
  info: {
    id: string;
    name: string;
    cuisines: string[];
    avgRating: number;
    sla: { slaString: string };
    cloudinaryImageId: string;
    isOpen: boolean;
  };
}

const Body = () => {
  // This creates a special state variable : useState hook
  const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetchData();
  }, []); // this hook is used to re render the website after the api is called

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST); // api calling
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,)
  };

  // condtional rendering
  if (listOfRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
