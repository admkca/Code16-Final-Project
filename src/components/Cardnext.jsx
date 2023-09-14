import React from 'react';

function Cardnext() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-4">
        <div className="col-sm-4 text-center">
          <img id="ingym" src="src\images\ingym.png" alt="" />
          <h1>Olymp Shevchenka</h1>
          <button className="ingym-btn">Learn More</button>
        </div>
        <div className="col-sm-4 text-center">
          <img id="ingym" src="src\images\ingym-2.png" alt="" />
          <h1>Olymp Stryiska</h1>
          <button className="ingym-btn">Learn More</button>
        </div>
        <div className="col-sm-4 text-center">
          <img id="ingym" src="src\images\image 23 (2).png" alt="" />
          <h1>Olymp Sokilnyky</h1>
          <button className="ingym-btn">Learn More</button>
        </div>
        <div className="col-sm-4 py-5 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="12" viewBox="0 0 49 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#45B126"/>
                <circle cx="25" cy="6" r="6" fill="#9E9E9E"/>
                <circle cx="43" cy="6" r="6" fill="#9E9E9E"/>
            </svg>
        </div>
        
      </div>
    </div>
  );
}

export default Cardnext;
