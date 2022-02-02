import { React, useEffect, useState } from "react";
import "./Feed.css";
import { useLocalStorage } from "../../hooks/useLocalStorage";
//Redux
//Actions
import { save } from "../../redux/actions/post";
//Connect
import { connect } from "react-redux";

//Primer paso con Redux
//Mapeo el estado hacia propiedades
const mapStateToProps = (state) => {
  return {
    posts: state.postReducer.post,
  };
};

const Feed = ({ posts, save }) => {

  console.log(posts.length);
  const [user] = useLocalStorage("USER_DATA", {});

  //Cambiar titulo
  useEffect(() => {
    document.title = `Hola ${user.name}`;
  }, []);

  // const [post, setPost] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    let newPost = {
      id: posts.length,
      contenido: event.target[0].value,
    };

    event.target.reset();
    save(...posts, newPost);
  };

  return (
    <>
      <br />
      <div className="container" id="containerNuevo">
        <div className="card">
          <h5 className="card-header">Crear Post</h5>
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="mb-3 form-check">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Escribe tu cita aqui"
                    id="floatingTextarea2"
                    required
                  ></textarea>
                </div>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
       {posts.map((post) => {
          return (
            <div className="card" key={post.id}>
              <div className="card-body">
                <p className="card-text">{post.contenido}</p>
              </div>
            </div>
          );
        })} 
      </div>
      <br />
      <br />
    </>
  );
};

export default connect (mapStateToProps, {save})(Feed)
