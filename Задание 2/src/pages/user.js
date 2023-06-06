import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate()
  const dispath = useDispatch()
  const store = useSelector(state => state)
  const [user, setUser] = useState(false);

  const getInitialData = () => {
    if (store.user.user.name != null) setUser(store.user.user)
    else navigate("/")
  }

  const logOut = () => {
    dispath(({ type: "delete" }));
    navigate("/")
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <>
      <div className="main_layout">
        {user && <div className="form">
          <h2>Профиль</h2>
          <span className="user_text"><b>{user.name}</b> (ID: {user.id})</span>
          <span className="user_text">Здесь пусто. Зато есть кнопка "Выйти".</span>
          <span className="user_text">Что будет, если нажать на неё?</span>
          <button className="button_login" onClick={logOut}>Выйти</button>
        </div>}
      </div>
    </>
  )
}

export default User;