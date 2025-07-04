
const SearchBar = ({ searchQuery, setSearchQuery }) => {

    return (
        <div>
            <input
                type='text'
                placeholder="Search By Location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}
export default SearchBar