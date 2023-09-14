import React from 'react';

function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div><h1>Offers</h1></div>
        <hr className='text-success' />
    
        <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  /> Annual Memberships </h3>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" >
            <div className="card-body">
              <h1 className="card-title">Morning Annual</h1>
              <p className="card-text">Includes:</p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Access to All Clubs from 7:00 AM to 4:00 PM
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Gym Facilities
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Morning Group Facilites
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Standard workout program for 2-3 days
              </p>
              <hr />
              <h2>4480 UAH</h2>
              <a href="#" className="btn btn-success">
              Buy Membership
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" >
            <div className="card-body">
              <h1 className="card-title">Daytime Annual</h1>
              <p className="card-text">Includes:</p>

              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Access to all clubs from 12:00 PM to 4:00 PM
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Gym facilities
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
               Standard workout program for 2-3 days
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                One-time freeze for one month
              </p>
              <hr />
              <h2>3840 UAH</h2>

              <a href="#" className="btn btn-success">
              Buy Membership
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" >
            <div className="card-body">
              <h1 className="card-title">Unlimited Annual</h1>
              <p className="card-text">Includes:</p>

              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Access to the entire network from 7:00 AM to 10:00 PM
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                 Gym access
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Morning and evening group classes
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Standard workout program for 2-3 days
              </p>
            
              
              <hr />
              <h2>5660 UAH</h2>
              <a href="#" className="btn btn-success">
              Buy Membership
              </a>
            </div>
            
          </div>
        </div>
        
        <div>
          <br />
          <br />
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Semi-Annual Memberships </h3>
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  3-Month Memberships </h3>
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Monthly Memberships</h3>
            </div>
      </div>
    </div>
    
  );
}

const styles = {
  card: {
    borderRadius: '30px',
    
  },
  hr: {
    color: '#45B126',
  },
};

export default Card;
