import React from 'react';


export default function SearchResults({ searchResult }) {
  return (
    <div className='container-fluid p-5'>
      <h1>Search Results</h1>
      <div className="overflow-auto mt-3" style={{ maxHeight: "38rem" }}>
        <table className="table table-striped table-hover mt-3 fs-5">
          <thead>
            <tr className="tr_color">
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Product Barcode</th>
             
            </tr>
          </thead>
          <tbody>
            {searchResult.map((element, id) => (
              <tr key={id}>
                <th scope="row">{id + 1}</th>
                <td>{element.ProductName}</td>
                <td>{element.ProductPrice}</td>
                <td>{element.ProductBarcode}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
