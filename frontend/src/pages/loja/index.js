import React from "react";
import { Link } from "react-router-dom";
import './style.css';
import AP from '../asset/ap.jpg'; 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

export default function Loja(){
    return(
        <div id="Container_Loja">

            <header id="Menu">
                <p>VM_Imoveis</p>

                <nav id="Navigation">
                    <Link id="LK" to='/' >Home</Link>
                    <Link id="LK" to='form'>Vender</Link>
                    
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
                    <p>Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições.
                        O serviço Disney+ é comercializado por The Walt Disney Company (Brasil) Ltda.
                        World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10,
                        São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20</p>
                </div>

            </footer>
        </div>
        
    );
}