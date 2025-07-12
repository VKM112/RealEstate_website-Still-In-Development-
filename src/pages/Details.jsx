import { useParams } from "react-router-dom";
import properties from "../data/properties";

const Details = () => {
  const { id } = useParams();
  const property = properties.find((prop) => prop.id === parseInt(id));

  if (!property) return <div>Property not found</div>;

  return (
    <div className="p-4">
      <h1 className="text-3xl">{property.title}</h1>
      <img src={property.image} className="w-full h-96 object-cover mt-2"/>
      <p className="mt-4">{property.description}</p>
      <p>Price: ₹ {property.price}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default Details;