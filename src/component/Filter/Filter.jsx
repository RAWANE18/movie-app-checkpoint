
import { useState } from "react";
import "./Filter.css";
import { IoSearch } from "react-icons/io5";
export default function Filter({Filter}) {
    const [input, setInput] = useState('');
    const [rating, setRating] = useState(0);
  const handleFilter = () => {
    Filter(input, rating);
  };
  return (
    <>
    <div className="container">
      <div className="filter">
     
        <input
          id="title-filter"
          type="text"
          value={input}
           onChange={(e)=>setInput(e.target.value)}
           placeholder="search"
        />
          <IoSearch id="icon" />
        </div>
        <div className="rate">
      
        <input
          id="rating-filter"
          type="number"
          min="0"
          max="5"
          value={rating}
          onChange={(e)=>setRating(e.target.value)}
          placeholder="rating"
        />
        
 <button onClick={handleFilter}>filter</button>
 </div >
      </div >
    </>
  );
}
