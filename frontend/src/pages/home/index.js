import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import Prop_Home from '../asset/prop_home.jpg'; 
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
                    <img src={Prop_Home} alt="IMG PROPAGANDA"/>
                </div>
                <div id="Txt_Propaganda">
                    <p>
                        <h1>Penssando em comprar ou vender o seu imovel?</h1>
                        Agora é a hora !.
                        VM_Imoveis a 25 anos abrindo portas para novas historias.
                        ajudaremos você a vender seu imavel, ou conquistar a tão sonhada casa própria!!!

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