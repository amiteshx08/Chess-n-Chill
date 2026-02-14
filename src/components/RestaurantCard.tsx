import { IMG_BASE_URL } from "../utils/constants";
interface RestaurantCardProps {
  resData: {
    info: {
      id: string;
      name: string;
      cuisines: string[];
      avgRating: number;
      sla: { slaString: string };
      cloudinaryImageId: string;
      isOpen: boolean;
    };
  };
}
const RestaurantCard = (props: RestaurantCardProps) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      
        <img
          className="res-img"
          alt="res-logo"
          src={IMG_BASE_URL + resData.info.cloudinaryImageId}
        />
      
      <div className="res-info">
        <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>reviews</h4>
      </div>
      
    </div>
  );
};

export default RestaurantCard;
