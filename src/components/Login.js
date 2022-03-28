import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navegate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(userName);
    dispatch({
      type: "GET_USERNAME",
      payload: userName
    });
    setUserName("");
    navegate("/pokedex");
  };

  return (

     
    <div className="log-in">
          <h4>Hola entrenador!</h4>
          <img src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/48/latest/20160211130236/Artwork_Rojo_y_Pikachu_%2820_aniversario%29.png/250px-Artwork_Rojo_y_Pikachu_%2820_aniversario%29.png" alt="" />
      <form action="" onSubmit={submit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          placeholder="Escribe tu nombre para ingresar" />
        <button> <b> ingresar </b><i className="fa-duotone fa-arrow-right-to-arc"></i></button>
      </form>
    </div>
  );
};

export default Login;
