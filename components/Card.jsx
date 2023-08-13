import React from 'react';

function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div><h1>Пропозиції</h1></div>
        <hr className='text-success' />
    
        <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Річні абонементи </h3>

        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <h1 className="card-title">Ранкова річна</h1>
              <p className="card-text">Включає:</p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Відвідування усієї мережі з 7:00 до 16:00
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Тренажерний зал
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Ранкові групові заняття
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Стандартна програма тренувань на 2-3 дні
              </p>
              <hr />
              <h2>4480 UAH</h2>
              <a href="#" className="btn btn-success">
              Придбати
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <h1 className="card-title">Денна річна</h1>
              <p className="card-text">Включає:</p>

              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Відвідування усієї мережі з 12:00 до 16:00
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Тренажерний зал
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
               Стандартна програма тренувань на 2-3 дні
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Одноразова заморозка на один місяць
              </p>
              <hr />
              <h2>3840 UAH</h2>

              <a href="#" className="btn btn-success">
              Придбати
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <div className="card" style={styles.card}>
            <div className="card-body">
              <h1 className="card-title">Безлімітна річна</h1>
              <p className="card-text">Включає:</p>

              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Відвідування усієї мережі з 7:00 до 22:00
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Тренажерний зал
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Ранкові та вечірні групові заняття
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Стандартна програма тренувань на 2-3 дні
              </p>
              {/* <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
               Одноразова заморозка на один місяць
              </p>
              <p className="card-text">
                <img
                  src="src/images/image 42.png"
                  width={30}
                  height={30}
                  className="card-img-start"
                  alt="..."
                />
                Фінська саунавт і пт з 18:00 до 21:30
              </p> */}
              
              <hr />
              <h2>5660 UAH</h2>
              <a href="#" className="btn btn-success">
              Придбати
              </a>
            </div>
            
          </div>
        </div>
        
        <div>
          <br />
          <br />
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Піврічні абонементи </h3>
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Абонементи на 3 місяці </h3>
            <h3 className="text-success"> <img  src="src\images\image 50.png"width={30} height={30}  />  Місячні абонементи </h3>
            </div>
      </div>
    </div>
    
  );
}

const styles = {
  card: {
    borderRadius: '30px',
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.23) 0%, rgba(218, 255, 207, 0.16) 51.36%, rgba(69, 177, 38, 0.09) 100%)',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  hr: {
    color: '#45B126',
  },
};

export default Card;
