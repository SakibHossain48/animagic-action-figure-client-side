import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const AllToys = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [limit, setLimit] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [toysData, setToysData] = useState([])

  useTitle('All Toys')

  useEffect(() => {
    fetch('https://animagic-action-figure-server.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setToysData(data))
  }, [])

  useEffect(() => {
    if (toysData.length > 20) {
      const limitedData = toysData.slice(0, 20);
      setLimit(limitedData);
      setShowBtn(true);
    }
  }, [toysData]);

  useEffect(() => {
    fetch(`https://animagic-action-figure-server.vercel.app/allToys/${searchText}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setToysData(data)
      })
  }, [searchText])

  const handleClick = () => {
    setLimit(toysData);
    setShowBtn(false);
  };

  return (
    <div className="my-10 px-10 flex flex-col items-center">
      <div className="form-control mb-10">
        <div className="input-group">
          <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search…" className="input input-bordered focus:outline-none" />
          <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </div>
      </div>
      <p className="text-3xl font-bold text-center mb-10">All Toys Here</p>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Toy Details</th>
            </tr>
          </thead>
          <tbody>
            {toysData.length > 20
              ? limit.map((toyData, index) => (
                <tr key={toyData._id} className="hover">
                  <th>{index + 1}</th>
                  <th>{toyData?.sellerName}</th>
                  <td>{toyData?.toyName}</td>
                  <td>{toyData?.category?.join(', ')}</td>
                  <td>$ {toyData?.price}</td>
                  <td>{toyData?.quantity} Pice</td>
                  <td>
                    <Link to={`/toyDetails/${toyData._id}`}>
                      <button className="btn">view details</button>
                    </Link>
                  </td>
                </tr>
              ))
              : toysData.map((toyData, index) => (
                <tr key={toyData._id} className="hover">
                  <th>{index + 1}</th>
                  <th>{toyData?.sellerName}</th>
                  <td>{toyData?.toyName}</td>
                  <td>{toyData?.category?.join(', ')}</td>
                  <td>$ {toyData?.price}</td>
                  <td>{toyData?.quantity} Pice</td>
                  <td>
                    <Link to={`/toyDetails/${toyData._id}`}>
                      <button className="btn">view details</button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {showBtn && (
        <button onClick={handleClick} className="btn mx-auto my-5">
          Show More
        </button>
      )}
    </div>
  );
};

export default AllToys;
