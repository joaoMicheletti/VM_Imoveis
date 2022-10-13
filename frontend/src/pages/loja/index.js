import React from "react";
import { Link } from "react-router-dom";
import Api from '../services/api';
import './style.css';
import AP from '../asset/ap.jpg'; 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';
import api from "../services/api";

//finction que ira buscar os dados do backend!
export default function Loja(){
    const response = async (e)=>{
        const Data = await api.get("");
    }
    return(
        <div id="Container_Loja">

            <header id="Menu">
                <p>VM_Imoveis</p>

                <nav id="Navigation">
                    <Link id="LK" to='/' >Home</Link>
                    <Link id="LK" to='/form'>Vender</Link>
                    
                </nav>
            </header> 
            <section id="Conteudo_Loja">
                <div id="Item_Loja">
                    <img id="Img_Item" src={AP} alt="Item_loja"/>
                    <ul id="Description_Item">
                        <p>Rua: {}</p>
                        <p>Nº: {}</p>
                        <p>CEP: {}</p>
                        <p>Vendedor: {}</p>
                        <p>Contato: {}</p>
                    </ul>

                </div>
            </section>
            <footer id="Footer">
                <div id="Img_Footer">
                    <AiFillFacebook id="imgm"/> Facebook
                    <RiInstagramFill id="imgm"/> Intagram
                </div>
                <div id="Direitos_altorais">
                    <p>VM_Imoveis é um serviço gratuito, porem mantemos a politica de manter todos os diretos reservadso...</p>
                </div>

            </footer>
        </div>
        
    );
}