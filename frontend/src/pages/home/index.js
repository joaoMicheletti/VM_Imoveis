import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import AP from '../asset/ap.jpg'; 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';


export default function Home(){
    return(
        <div id="Container_Home">

            <header id="Menu">
                <p>VM_Imoveis</p>

                <nav id="Navigation">
                    <Link id="LK" to='loja' >Loja</Link>
                    <Link id="LK" to='form'>Vender</Link>
                    
                </nav>
            </header> 
            <section id="Conteudo_Home">
                <div id="Img_Propaganda">
                    <img src={AP} alt="IMG PROPAGANDA"/>
                </div>
                <div id="Txt_Propaganda">
                    <p>A maior e mais conhecida imobiliaria do pais.
                        Não perca tempo traga já o seu imovel para 
                        nossa plataforma e se surpreenda com a
                        rapides que iremos te ajudar a vender o seu imovel!
                    </p>
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