import PropertyCard from "../propertyCard/PropertyCard";
import properties from "../../data/property";
import './Propertylist.css'

const PropertyList = () => {
    return(
        <div className="card">
            {properties.map((property) => {
                return <PropertyCard key={property.id} property={property}/>
            })}
        </div>
    )
};

export default PropertyList