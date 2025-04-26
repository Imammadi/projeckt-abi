import "./App.css";
import Image1 from "./assets/image14.svg";
import Arrow from "./assets/arrow.svg";
import Image2 from "./assets/image2.svg";
import Image3 from "./assets/image3.svg";
import Image4 from "./assets/image4.svg";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <div style={{ width: "1205px", height: "632px", margin: "auto" }}>
        <div style={{ padding: "20px" }}>
          <img src={Arrow} />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "350px",
          }}
        >
          <div style={{ width: "579px" }}>
            <ul className="colored-list">
              <li style={{ color: "red", fontSize: "20px" }}>Зал</li>
            </ul>
            <p style={{ fontSize: "40px", color: "white" }}>
              “Bilimkana Arena”
            </p>
            <p style={{ fontSize: "32px", color: "white" }}>
              Школа Билимкана-Бишкек продолжает набор в секцию баскетбол для
              взрослых и детей! Занятия проводятся в зале, с соблюдением всех
              норм безопасности!
            </p>
          </div>
          <div style={{ padding: "100px 20px" }}>
            <div style={{ position: "relative", zIndex: 2 }}>
              <img src={Image1} />
            </div>
            <div // red square
              style={{
                width: "151px",
                height: "195px",
                backgroundColor: "#E41C26",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "end",
                alignContent: "end",
                position: "relative",
                bottom: "175px",
                left: "320px",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: "110px",
                  height: "155px",
                  backgroundColor: "black",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------- */}
      <div style={{ backgroundColor: "#18171A" }}>
        <div style={{ width: "1205px", margin: "auto" }}>
          <p style={{ fontSize: "40px", padding: "15px", color: "white" }}>
            Баскетбольное поле «Bilimkana Arena»
          </p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ position: "relative" }}>
              <img src={Image2} style={{ position: "relative", zIndex: 2 }} />
              <div // red square
                style={{
                  width: "584px",
                  height: "580px",
                  backgroundColor: "#FE0404",
                  position: "absolute",
                  top: "-3px",
                  left: "100px",
                  zIndex: 1,
                }}
              ></div>
            </div>
            <div>
              <div style={{ position: "relative" }}>
                <img src={Image3} style={{ position: "relative", zIndex: 2 }} />
                <div // red square
                  style={{
                    width: "154px",
                    height: "153px",
                    backgroundColor: "#FE0404",
                    position: "absolute",
                    top: "-3px",
                    left: "70px",
                    zIndex: 1,
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* lists -> */}
          <div style={{ padding: "20px 0px" }}>
            <p style={{ color: "white", fontSize: "40px" }}>
              Зал «Bilimkana Arena»
            </p>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* 1 column list ->*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "520px",
                }}
              >
                <ul className="colored-list">
                  <li style={{ color: "white", fontSize: "32px" }}>
                    Размеры зала:
                  </li>
                  <li style={{ color: "white", fontSize: "32px" }}>
                    Количество:
                  </li>
                  <li style={{ color: "white", fontSize: "32px" }}>Тип:</li>
                </ul>
                <div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    23х24х8
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    2 площадки
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    Крытый
                  </p>
                </div>
              </div>
              {/* 2 column list ->*/}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "570px",
                }}
              >
                <ul className="colored-list">
                  <li style={{ color: "white", fontSize: "32px" }}>
                    Покрытие:
                  </li>
                  <li style={{ color: "white", fontSize: "32px" }}>
                    Инвентарь:
                  </li>
                  <li style={{ color: "white", fontSize: "32px" }}>
                    Оплата за час:
                  </li>
                </ul>
                <div>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    Паркет
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    Со своим мячом
                  </p>
                  <p
                    style={{
                      color: "white",
                      fontSize: "32px",
                      lineHeight: "0.5",
                    }}
                  >
                    3000с.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------- */}
      <div style={{ backgroundColor: "grey", height: '142px' }}>
        <div
          style={{
            width: "1100px",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "32px" }}>
            <img src={Image4} style={{padding: ''}}/> Раздевалка
          </p>
          <p style={{ fontSize: "32px" }}>
            <img src={Image4} /> Освещение
          </p>
          <p style={{ fontSize: "32px" }}>
            <img src={Image4} /> Душевая
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
