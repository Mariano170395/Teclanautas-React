import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { userIdApi } from "../../api/api";

const PerfId = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
    pass: "",
    name: "",
    last_name: "",
    brd_date: "",
    hobby: "",
    puesto: "",
    habilidad: "",
    img: "",
    date_stamp: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const userId = async (id) => {
      let response = await userIdApi(id);
      let newState = {
        id: response.id,
        email: response.email,
        name: response.name,
        last_name: response.last_name,
        brd_date: response.brd_date,
        hobby: response.hobby,
        puesto: response.puesto,
        habilidad: response.habilidad,
        img: response.img,
        date_stamp: response.date_stamp,
      };

      setUser(newState);
    };
    userId(id);
  }, []);

  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={user.img}
                className="img-fluid rounded-start"
                alt="..."
                id="fotoPerfil"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title" id="nombreUser">
                  {user.name} {user.last_name}
                </h1>
                <br />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h3>
                      <span id="datos">Correo:</span> {user.email}
                    </h3>
                  </li>
                  <li className="list-group-item">
                    <h3>
                      <span id="datos">Fecha de nacimiento:</span>{" "}
                      {user.brd_date}
                    </h3>
                  </li>
                  <li className="list-group-item">
                    <h3>
                      <span id="datos">Hobby:</span> {user.hobby}
                    </h3>
                  </li>
                  <li className="list-group-item">
                    <h3>
                      <span id="datos">Puesto:</span> {user.puesto}
                    </h3>
                  </li>
                  <li className="list-group-item">
                    <h3>
                      <span id="datos">Habilidad:</span> {user.habilidad}
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { PerfId };
