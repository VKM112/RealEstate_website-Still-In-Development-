import PropertyCard from "../propertyCard/PropertyCard";
import properties from "../../data/property";

const PropertyList = () => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertyList;
