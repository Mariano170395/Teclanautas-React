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
  }, [user.name]);

  // const [post, setPost] = useState([]);

  const submit = (event) => {
    event.preventDefault();
    let newPost = {
      id: posts.length + 1,
      contenido: event.target[0].value,
    };

    event.target.reset();
    save(...posts, newPost);
  };

  return (
    <>
      <br />
      <div className="container" id="containerNuevo">
        <div className="card text-center" id="cardTitulo">
              <label className="title">
              Crea un post!
              </label>
        </div>
        <div className="card">
          <div className="card-body">
            <form onSubmit={submit}>
              <div className="mb-3 form-check">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Que estas pensando?"
                    id="floatingTextarea2"
                    required
                  ></textarea>
                  <label for="floatingPassword">Que estas pensando?</label>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary me-md-2" type="submit">
                  Button
                </button>
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />
        {posts.map((post) => {
          return (
            <>
              <div className="card" id="cardTitulo">
                <label className="row title">
                  <h5 className="card-title">{user.name}</h5>
                  <img src="..." className="card-img-top" alt="..."/>
                </label>
              </div>
              <div className="card mb-3">
                
                <div className="card-body text-start">
                  <p clasNames="card-text" id='contenidoText'>{post.contenido}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
      <br />
      <br />
    </>
  );
};

export default connect(mapStateToProps, { save })(Feed);
