import React, { useState } from 'react';
import axios from 'axios';
import SearchResults from './SearchResults';

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search term:", searchTerm); // Debug log

    try {
      const response = await axios.get(`http://localhost:3001/api/products`, {
        params: { name: searchTerm }
      });
      console.log("Search response:", response.data); // Debug log
      setSearchResult(response.data);
    } catch (error) {
      console.error("Error fetching product", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/">{props.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white fs-4" aria-current="page" href="/about">About</a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-primary fs-5" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {searchResult.length > 0 && <SearchResults searchResult={searchResult} />}
    </div>
  );
}
