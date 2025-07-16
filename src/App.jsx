import { BrowserRouter, Routes, Route } from "react-router-dom";
import PropertyList from "./components/propertyList/PropertyList";
import SearchBar from "./components/searchBar/SearchBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="Main">
        <h1>Welcome to Real Estate Business</h1>
        <SearchBar />

        <Routes>
          <Route path="/" element={<PropertyList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
