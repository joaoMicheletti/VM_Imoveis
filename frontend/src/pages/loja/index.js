import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Api from '../services/api';
import './style.css';
import AP from '../asset/ap.jpg'; 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

//finction que ira buscar os dados do backend!
function Loja() {
    const [itens, setItens] = useState([]);
    useEffect(() => {
        Api.get('/buscar')
        .then((Response) => {
            setItens(Response.data)
            
        })
        .catch(() => {
            console.log('erro')
        })
    }, [])
    console.log(itens.rua);


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
                {itens.map((iten, key) =>{
                    const link = 'http://localhost:2222/file/' + iten.image;                    
                    
                    return(
                        <div id="Item_Loja">
                            <img id="Img_Item" href={link} alt="Item_loja"/>
                            <ul id="Description_Item">
                                <p>Rua: {iten.rua}</p>
                                <p>Nº: {iten.casa_numero}</p>
                                <p>CEP: {iten.cep}</p>
                                <p>Vendedor: {iten.vendedor}</p>
                                <p>Contato: {iten.phone}</p>
                                <p>Descrição: {iten.description}</p>
                    </ul>

                </div>
                    )
                })}
                
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

export default Loja;