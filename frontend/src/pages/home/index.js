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
                    <p>Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições.
                        O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda.
                        World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10,
                        São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</p>
                </div>

            </footer>
        </div>
        
    );
}