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
                    <label>
                        Rua:
                        <input id="Endereço" type="text" placeholder="Endereço:"/>
                    </label>
                    <label>
                        Número:
                        <input id="Numero" type="text" placeholder="Numero da Casa:"/>
                    </label>
                    <label>
                        CEP:
                        <input id="Cep" type="text" placeholder="CEP:"/>
                    </label>
                    <label>
                        Vendedor:
                        <input id="Vendedor" type="text" placeholder="Nome do Vendenor"/>
                    </label>
                    <label>
                        Contato: 
                        <input id="Contato" type="number" placeholder="EX: 11932223533"/>
                    </label>
                    <label>
                        Descrição:
                        <input id="Description" type="text" placeholder="EX: 100m³ 3quartos 2 banheiros"/>
                    </label>
                    <label>
                        Carregar Imagem:
                        <input id="Img" type='file' />
                    </label>

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