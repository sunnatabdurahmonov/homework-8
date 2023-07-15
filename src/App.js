import { Routes,Route } from "react-router-dom";
import { Layout } from "./component/Layout/Layout";
import { Home } from "./component/Home";
import { Profile } from "./component/Profile";
import { useContext, useState } from "react";
import Login from "./component/Login/Login";
import { LoginContext } from "./component/context/Context";


function App() {
  const {token} = useContext(LoginContext)
 if(token) {
  return(
    <Layout>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Layout>
  )
 }else{
  return(
    <Routes>
    <Route path="/" element={<Login/>}/>
  </Routes>
  )
 }

}

export default App;
