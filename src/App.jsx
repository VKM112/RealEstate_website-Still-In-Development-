import PropertyList from "./components/propertyList/PropertyList"
import './App.css'
import SearchBar from "./components/searchBar/searchBar"
const App = () => {
  return(
    <div className="Main">
      <h1>Welcome to realestate business</h1>
      <SearchBar/>
      <PropertyList />
    </div>
  )
}

export default App