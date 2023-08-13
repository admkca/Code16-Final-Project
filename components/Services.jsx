import React from "react";

function Services() {
  return (
    <div className="container-left">
      <div className="row">
        <div className="col-sm ps-4">
          <h1>Послуги</h1>
          <hr />
          <p>
            Ми справді маємо свої переваги - під одним дахом ти отримуєш повний
            спектр послуг: від тренажерів, фітнесу до тенісу та сауни!
          </p>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    {" "}
                    <img src="src\images\image 35.png" alt="" /> Тренажерні зали
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    <img src="src\images\image 54.png" alt="" />
                    Персональні тренування
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    <img src="src\images\image 32.png" alt="" />
                    Crossfit
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    <img src="src\images\image 34.png" alt="" />
                    Групові програми
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    <img src="src\images\image 36.png" alt="" />
                    Фіт бар
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="my-5">
                  <p>
                    <img src="src\images\image 33 (1).png" alt="" />
                    Сауна
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
