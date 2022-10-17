import {React, useState} from "react";
import { Link } from "react-router-dom";
import Api from '../services/api';
import './style.css';
 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

export default function Loja(){
    const [rua, SetRua] = useState('');
    const [casa_numero, SetNumero] = useState('');
    const [cep, SetCep] = useState('');
    const [vendedor, SetVendedor] = useState('');
    const [phone, setPhone] = useState('');
    const [description, SetDescription] = useState('');
    const [image, SetImage] = useState('');
    //objeto img
    const formData = new FormData();
    formData.append('image', Image);
    
    const Data = {
        rua,
        casa_numero,
        cep,
        vendedor,
        phone,
        description,
        image,
        formData
    };

    const Create = async (e) => {
        e.preventDefault();
        await Api.post('/create', Data);
    }
    return(
        <div id="Container_Loja">

            <header id="Menu">
                <p>VM_Imoveis</p>

                <nav id="Navigation">
                    <Link id="LK" to='/' >Home</Link>
                    <Link id="LK" to='/loja'>Loja</Link>
                    
                </nav>
            </header> 
            <section id="Conteudo_Form">
                
                <form id="Formulario" onSubmit={Create} enctype="multipart/form-data">
                    <p id="paragrafo">Rua:</p>
                    <input id="entrada"
                     type="text" 
                     placeholder="Endereço:"
                     onChange={(e) => SetRua(e.target.value)}/>

                    <p id="paragrafo">Número:</p>
                    <input id="entrada" 
                    type="text" 
                    placeholder="Numero da Casa:"
                    onChange={(e) => SetNumero(e.target.value)}/>

                    <p id="paragrafo">CEP:</p>
                    <input id="entrada" 
                    type="number" 
                    placeholder="CEP:"
                    onChange={(e) => SetCep(e.target.value)}/>

                    <p id="paragrafo">Vendedor:</p>
                    <input id="entrada" 
                    type="text" 
                    placeholder="Nome do Vendenor"
                    onChange={(e) => SetVendedor(e.target.value)}/>

                    <p id="paragrafo">Contato:</p>
                    <input id="entrada" 
                    type="number" 
                    placeholder="EX: 11932223533"
                    onChange={(e) => setPhone(e.target.value)}/>

                    <p id="paragrafo">Descrição:</p>
                    <input id="entrada" 
                    type="text" 
                    placeholder="EX: 100m³ 3quartos 2 banheiros"
                    onChange={(e) => SetDescription(e.target.value)}/>
                    
                    <p id="paragrafo">Carregar Imagem:</p>
                    <input id="entrada" 
                    type='file' 
                    onChange={(e) => SetImage(e.target.files[0])}/>
                    <input id="send" 
                    type="submit" 
                    value='send'></input>

                </form>

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