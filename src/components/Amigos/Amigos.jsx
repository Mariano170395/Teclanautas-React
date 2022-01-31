import { React, useState } from "react";
import "./Amigos.css";
import avatar from "./Img/avatar.png";
import { buscarUserApi } from "../../api/api";
import { Link } from "react-router-dom";
//Redux
import { connect } from 'react-redux';
import {setSearch} from '../../store/actions/searchActions'


let Amigos = ({setSearch, searchGlobalState}) => {



  const [searchAmigo, setSearchAmigo] = useState(searchGlobalState);
  const [getAmigo, setGetAmigo] = useState([]);


  const handleInput = (e) => {
    setSearchAmigo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSearch(searchAmigo)

    const buscar = { name: searchAmigo };
    let response = await buscarUserApi(buscar);
    setGetAmigo(response);
  };


  const irAmigo = (e)=>{
    e.preventDefault()
    console.log('hola');
  }

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="ordenar">
            <div className="col-sm-12">
              <input
                type="text"
                placeholder="Buscar"
                className="form-control"
                onChange={handleInput}
                value={searchAmigo}
              />
            </div>
            <div className="col-sm-1">
              <button
                className="btn btn-primary"
                id="btnBuscar"
                type="submit"
                onClick={handleSubmit}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="containerFlex">
              {getAmigo.map((element) => {
                return(
                  <div className="card text-center w-1" key={element.id}>
                  <div className="card-body">
                    <img src={element.img} alt="Usuario" className="avatarUsuario" />
                    <h5 className="card-title">{element.name}</h5>
                    <p className="card-text" id="TextoCard">
                      Agregalo ahora a tu red de Teclanautas
                    </p>
                    <Link to={`/perfil/${element.id}`}  >
                      <h1>Ir a su perfil</h1>
                    </Link>
                  </div>
                </div>
                )

              })
             
              }
 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state)=>({
    searchGlobalState: state.searchReducer.search
})

export default connect(mapStateToProps, {setSearch})(Amigos)
// export { Amigos }

