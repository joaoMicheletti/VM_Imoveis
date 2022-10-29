import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Form from './pages/form';
import Loja from './pages/loja';

export default function Rota(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="form" element={<Form/>}/>
                <Route path="loja" element={<Loja/>}/>
                <Route path='*' element={<h1>perdido no espaço! ERRO 404</h1>}/>
            </Routes>
        </Router>
    );
}