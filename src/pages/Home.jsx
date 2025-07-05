import { useState } from "react";
import property from '../data/property'
import PropertyList from '../components/propertyList/PropertyList'
import SearchBar from '../components/searchBar/SearchBar'

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const filterProperty=property.filter((prop) => {
        prop.location.toLowerCase().includes(searchQuery.toLowerCase())
    });

    return(
        <div>
            <h1>Find Your Dream Home</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <PropertyList property={filterProperty}/>
        </div>
    )
}

export default Home;