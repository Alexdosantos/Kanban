
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cadastro from "../Pages/Cadastro/Cadastro";
import MemberSystem from "../Pages/Member/MemberSystem";
import {useContext} from 'react'
import { TokenContext } from "../Context/Usercontext/UserContext";
import {ReactNode} from "react"
import { useState , useEffect  } from "react"

type TokeObrigatorioProps = {
  children: ReactNode
} 

const TokeObrigatorio = ({children} : TokeObrigatorioProps) => {
  const {token}= useContext(TokenContext)
  const [loading , setLoading] = useState(true)
  const [athentic , setAuthentic] = useState(false)

  useEffect(() => {
    if(token){
      setAuthentic(true)
     
    }
    setLoading(false)

  },[token])
  
  if(loading){
    return null
  }

  if(!athentic){
    return <Navigate to='/' />
  } 
  return children
}




const Rotas = () => {




  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/MemberSystem" element={<TokeObrigatorio><MemberSystem /></TokeObrigatorio>} />
          <Route path="*" element={<h1>404 Page not Found</h1>} />
        </Routes>
     
    </BrowserRouter>
  );
};

export default Rotas;
