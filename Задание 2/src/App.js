import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import User from "./pages/user";
import './App.css'

const App = () => (
  <>
    <Routes>
      <Route element={<Main />} path='/' />
      <Route element={<User />} path='/user' />
    </Routes>
  </>
)

export default App;