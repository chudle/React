import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { redusers } from "../store/redusers";

const Main = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)
  const [type, setType] = useState(1);

  const [loginData, setLoginData] = useState({
    name: "", password: "",
  })

  const [regData, setRegData] = useState({
    name: "", password: "", password1: ""
  })

  const checkUser = () => {
    return store.users.users.find(v => v.name === regData.name)
  }

  const findUser = () => {
    return store.users.users.find(v => v.name === loginData.name && v.password === loginData.password)
  }

  const signIn = () => {
    let user = findUser()
    if (user) {
      dispath(({ type: "add", id: user.id, name: user.name, password: user.password }));
      navigate("/user")
    } else alert("Неверный логин/пароль")
  }

  const signUp = () => {
    if (regData.password !== regData.password1) { alert("Пароли не совпадают"); return }
    if (checkUser()) { alert("Это имя уже занято"); return }
    dispath(({ type: "addUser", name: regData.name, password: regData.password }))
    alert("Пользователь успешно создан")
    setRegData({ name: "", password: "", password1: "" })
    setType(1)
  }

  return (
    <>
      <div className="main_layout">
        {type === 1 ?
          <div className="form">
            <h2>Вход</h2>
            <input className="input_login" placeholder="Логин" value={loginData.name} onChange={(e) => setLoginData({ ...loginData, name: e.target.value })} />
            <input className="input_login" type="password" placeholder="Пароль" value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <button className="button_login" onClick={signIn} disabled={!loginData.name || !loginData.password}>Войти</button>
            <span className="text_link" onClick={() => setType(2)}>Я новенький!</span>
          </div> :
          <div className="form">
            <h2>Регистрация</h2>
            <input className="input_login" placeholder="Логин" value={regData.name} onChange={(e) => setRegData({ ...regData, name: e.target.value })} />
            <input className="input_login" type="password" placeholder="Пароль" value={regData.password} onChange={(e) => setRegData({ ...regData, password: e.target.value })} />
            <input className="input_login" type="password" placeholder="Повторите пароль" value={regData.password1} onChange={(e) => setRegData({ ...regData, password1: e.target.value })} />
            <button className="button_login" onClick={signUp} disabled={!regData.name || !regData.password || !regData.password1}>Зарегистрироваться</button>
            <span className="text_link" onClick={() => setType(1)}>Я уже смешарик!</span>
          </div>
        }
      </div>
    </>
  );
}

export default Main;