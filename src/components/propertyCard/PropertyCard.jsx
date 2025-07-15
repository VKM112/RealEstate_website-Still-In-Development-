const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} />
      <div className="card-content">
        <h2>{property.title}</h2>
        <p>Price: ₹{property.price.toLocaleString()}</p>
        <p>Location: {property.location}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
