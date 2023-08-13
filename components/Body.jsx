import React from 'react';



function Body({ darkMode }) {
  return (
    
    <div className="container-fluid home-container" >
      <div className="row">
        <div className="col-sm-4 justify-content-center d-flex flex-column  mb-5 ps-5">
          <div>
            <h1>Olimp — фітнес-мережа <br /> твоїх результатів</h1>
            <p style={{ color: "green" }}>Мережа фітнес-клубів у Львові</p>
            <button style={{ backgroundColor: "#45B126", borderRadius: "15px", color: "white", padding: "10px 20px", border: "none" }}>Купити абонемент</button>
          </div>
        </div>
        <div className="col-sm-8 d-flex align-items-end">
          <img src="src\images\image 18.png" width={1396} height={1080} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body;
