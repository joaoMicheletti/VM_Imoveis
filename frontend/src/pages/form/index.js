import React from "react";
import { Link } from "react-router-dom";
import './style.css';
 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

export default function Loja(){
    return(
        <div id="Container_Loja">

            <header id="Menu">
                <p>VM_Imoveis</p>

                <nav id="Navigation">
                    <Link id="LK" to='/' >Home</Link>
                    <Link id="LK" to='loja'>Loja</Link>
                    
                </nav>
            </header> 
            <section id="Conteudo_Form">
                
                <form id="Formulario">
                    <p id="paragrafo">Rua:</p><input id="entrada" type="text" placeholder="Endereço:"/>
                    <p id="paragrafo">Número:</p><input id="entrada" type="text" placeholder="Numero da Casa:"/>
                    <p id="paragrafo">CEP:</p><input id="entrada" type="number" placeholder="CEP:"/>
                    <p id="paragrafo">Vendedor:</p><input id="entrada" type="text" placeholder="Nome do Vendenor"/>
                    <p id="paragrafo">Contato:</p><input id="entrada" type="number" placeholder="EX: 11932223533"/>
                    <p id="paragrafo">Descrição:</p><input id="entrada" type="text" placeholder="EX: 100m³ 3quartos 2 banheiros"/>
                    <p id="paragrafo">Carregar Imagem:</p><input id="entrada" type='file' />
                    <input id="send" type="submit" value='send'></input>

                </form>

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