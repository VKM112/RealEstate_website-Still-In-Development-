import './PropertyCard.css'

const PropertyCard = ({property}) => {
    return (
        <div className="Card-component">
            <img id="PropertyImage" src={property.image} alt={property.title}/>
            <h2 id="Heading">{property.title}</h2>
            <p id="Price">Price: {property.price}</p>
            <p id="location">{property.location}</p>
            <br/>
        </div>
    )
}

export default PropertyCard