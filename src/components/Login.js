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
    <div>
      <form action="" onSubmit={submit}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
