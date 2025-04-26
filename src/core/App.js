import React, { useState } from "react";
import "./App.css";
import Image1 from "./assets/image14.svg";
import Arrow from "./assets/arrow.svg";
import Image2 from "./assets/image2.svg";
import Image3 from "./assets/image3.svg";
import Image4 from "./assets/image4.svg";
import Image5svg from "./assets/image5.svg";
import Image5 from "./assets/image5.png";
import Image6 from "./assets/image-star.svg";
import Ava from "./assets/ava-anton-pavel.svg";
import Ava2 from "./assets/ava-kortni-genry.svg";
import Ava3 from "./assets/ava-anna-karenina.svg";
import Calendar from "./assets/calendar.svg";
import Tel from "./assets/tel.svg";
import Map from "./assets/map.svg";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function App() {
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Функция для переключения между отзывами и формой
  const toggleReviewForm = () => {
    setShowReviewForm(!showReviewForm);
  };

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
              <li
                style={{ color: "red", fontSize: "20px", fontFamily: "Lato" }}
              >
                Зал
              </li>
            </ul>
            <p
              style={{
                fontSize: "40px",
                color: "white",
                fontFamily: "Comfortaa",
              }}
            >
              “Bilimkana Arena”
            </p>
            <p style={{ fontSize: "32px", color: "white", fontFamily: "Lato" }}>
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
          <p
            style={{
              fontSize: "40px",
              padding: "35px 0px 15px 0px",
              color: "white",
              fontFamily: "Comfortaa",
            }}
          >
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
          {/* ------------ lists -> */}
          <div style={{ padding: "20px 0px" }}>
            <p
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "Comfortaa",
              }}
            >
              Зал «Bilimkana Arena»
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0px  80px 0px",
                fontFamily: "Lato",
              }}
            >
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
      <div style={{ backgroundColor: "white", height: "142px" }}>
        <div
          style={{
            width: "1100px",
            height: "142px",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "space-between",
            fontFamily: "Lato",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <img src={Image4} />
            <p style={{ fontSize: "32px" }}>Раздевалка</p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <img src={Image4} />
            <p style={{ fontSize: "32px" }}>Освещение</p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          >
            <img src={Image4} />
            <p style={{ fontSize: "32px" }}>Душевая</p>
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div style={{ height: "60px", backgroundColor: "#18171A" }}></div>
      <div
        style={{
          width: "100%",
          height: "774px",
          backgroundImage: `url(${Image5})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "1205px", margin: "auto" }}>
          {!showReviewForm ? (
            // Reviews --->
            <div>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  color: "white",
                  padding: "20px",
                  fontFamily: "Comfortaa",
                }}
              >
                Отзывы клиентов
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "Lato",
                }}
              >
                {/* 1 review */}
                <div
                  style={{
                    width: "360px",
                    height: "470px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <div style={{ margin: "45px 45px 0px 45px" }}>
                    <p style={{ fontSize: "16px", color: "white" }}>
                      Баскетбол - это удивительный спорт, который сочетает в
                      себе физическую активность, стратегию и командную работу.
                      Я играю в баскетбол уже несколько лет и могу с
                      уверенностью сказать, что это одна из самых захватывающих
                      игр.
                    </p>
                    <div
                      style={{
                        width: "190px",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0px 50px 0px",
                      }}
                    >
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "center",
                      }}
                    >
                      <img
                        src={Ava2}
                        alt="Avatar"
                        style={{ paddingRight: "10px" }}
                        paddingleft
                      />
                      <p
                        style={{
                          fontSize: "24px",
                          color: "white",
                          fontFamily: "Outfit",
                        }}
                      >
                        Кортни Генри
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      backgroundColor: "#E41C26",
                      position: "relative",
                      top: "30px",
                    }}
                  ></div>
                </div>

                {/* 2 review */}
                <div
                  style={{
                    width: "360px",
                    height: "470px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <div style={{ margin: "45px 45px 0px 45px" }}>
                    <p style={{ fontSize: "16px", color: "white" }}>
                      Баскетбол - это удивительный спорт, который сочетает в
                      себе физическую активность, стратегию и командную работу.
                      Я играю в баскетбол уже несколько лет и могу с
                      уверенностью сказать, что это одна из самых захватывающих
                      игр.
                    </p>
                    <div
                      style={{
                        width: "190px",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0px 50px 0px",
                      }}
                    >
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "center",
                      }}
                    >
                      <img
                        src={Ava}
                        alt="Avatar"
                        style={{ paddingRight: "10px" }}
                      />
                      <p
                        style={{
                          fontSize: "24px",
                          color: "white",
                          fontFamily: "Outfit",
                        }}
                      >
                        Антонов Павел
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      backgroundColor: "#E41C26",
                      position: "relative",
                      top: "30px",
                    }}
                  ></div>
                </div>

                {/* 3 review */}
                <div
                  style={{
                    width: "360px",
                    height: "470px",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                  }}
                >
                  <div style={{ margin: "45px 45px 0px 45px" }}>
                    <p style={{ fontSize: "16px", color: "white" }}>
                      Баскетбол - это удивительный спорт, который сочетает в
                      себе физическую активность, стратегию и командную работу.
                      Я играю в баскетбол уже несколько лет и могу с
                      уверенностью сказать, что это одна из самых захватывающих
                      игр.
                    </p>
                    <div
                      style={{
                        width: "190px",
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0px 50px 0px",
                      }}
                    >
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                      <img src={Image6} alt="Star" />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignContent: "center",
                      }}
                    >
                      <img
                        src={Ava3}
                        alt="Avatar"
                        style={{ paddingRight: "10px" }}
                      />
                      <p
                        style={{
                          fontSize: "24px",
                          color: "white",
                          fontFamily: "Outfit",
                        }}
                      >
                        Анна Каренина
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      backgroundColor: "#E41C26",
                      position: "relative",
                      top: "30px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            // Review form -->
            <div style={{}}>
              <div
                style={{
                  width: "950px",
                  margin: "auto",
                  fontFamily: "Lato",
                }}
              >
                <div style={{ padding: "20px 0px 15px 0px" }}>
                  <p style={{ fontSize: "40px", color: "white" }}>
                    Что вы думаете ?
                  </p>
                  <p style={{ fontSize: "20px", color: "#868889" }}>
                    Пожалуйста, дайте свою оценку
                  </p>
                </div>
                <div
                  style={{
                    width: "430px",
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0px 50px 0px",
                  }}
                >
                  <img src={Image6} width="56px" alt="Star" />
                  <img src={Image6} width="56px" alt="Star" />
                  <img src={Image6} width="56px" alt="Star" />
                  <img src={Image6} width="56px" alt="Star" />
                  <img src={Image6} width="56px" alt="Star" />
                </div>
                <textarea
                  style={{
                    width: "875px",
                    height: "247px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    fontSize: "20px",
                    color: "#868889",
                    padding: "35px",
                  }}
                  placeholder="Расскажите нам о своем опыте"
                />
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <button
                    style={{
                      width: "202px",
                      height: "40px",
                      backgroundColor: "#FE0404",
                      borderRadius: "8px",
                      fontSize: "20px",
                      color: "white",
                      cursor: "pointer",
                      marginTop: "30px",
                    }}
                    onClick={toggleReviewForm}
                  >
                    Отправить
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* {Button to form --> */}
          {!showReviewForm && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "50px",
              }}
            >
              <button
                style={{
                  width: "263px",
                  height: "40px",
                  backgroundColor: "#FE0404",
                  borderRadius: "8px",
                  fontSize: "20px",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Comfortaa",
                }}
                onClick={toggleReviewForm}
              >
                Оставить отзыв
              </button>
            </div>
          )}
        </div>
      </div>
      {/* -------------------------- */}
      <div style={{ height: "650px", backgroundColor: "#18171A" }}>
        <div style={{ width: "1202px", margin: "auto", paddingTop: "60px" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "584px",
                height: "502px",
                backgroundColor: "#070707",
              }}
            >
              <div
                style={{
                  width: "430px",
                  padding: "45px",
                  fontFamily: "Lato",
                }}
              >
                <div style={{ display: "flex", padding: "5px" }}>
                  <img
                    src={Calendar}
                    width="19px"
                    style={{ padding: "0px 10px 20px 10px" }}
                  />
                  <p style={{ fontSize: "19px", color: "white" }}>
                    Понедельник — Пятница: 07:00–23:00 Суббота — Воскресенье:
                    09:00–22:00
                  </p>
                </div>
                <div style={{ display: "flex", padding: "5px" }}>
                  <img src={Map} width="19px" style={{ padding: "10px" }} />
                  <p style={{ fontSize: "19px", color: "white" }}>
                    Адрес: Село Кок-Жар, ул.Егимбаева, 145
                  </p>
                </div>
                <div style={{ display: "flex", padding: "5px" }}>
                  <img src={Tel} width="19px" style={{ padding: "10px" }} />
                  <p style={{ fontSize: "19px", color: "white" }}>
                    Телефон: +996 505 170 179
                  </p>
                </div>
                <div
                  style={{
                    color: "#858585",
                    fontSize: "17px",
                    padding: "5px",
                  }}
                >
                  Bilimkana arena это современный зал в самом центре города
                  Бишкек. Оборудованный итальянскими тренажерами и залами для
                  групповых тренировок.
                </div>
              </div>
            </div>
            {/* Map ---> */}
            <div
              style={{
                width: "618px",
                height: "490px",
                backgroundColor: "grey",
              }}
            >
              <MapContainer
                center={[42.85924631184547, 74.5860180167792]}
                zoom={16}
                style={{ height: "500px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                <Marker position={[55.751244, 37.618423]}>
                  <Popup>Привет из Москвы!</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
