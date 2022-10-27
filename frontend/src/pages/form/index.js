import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from '../services/api';
import './style.css';
 
import {AiFillFacebook} from 'react-icons/ai';
import {RiInstagramFill} from 'react-icons/ri';

export default function Loja(){
    const history = useNavigate();
    
    const [rua, SetRua] = useState('');
    const [casa_numero, SetNumero] = useState('');
    const [cep, SetCep] = useState('');
    const [vendedor, SetVendedor] = useState('');
    const [phone, setPhone] = useState('');
    const [description, SetDescription] = useState('');
    const [image, SetImage] = useState('');

    const formdata = new FormData();
    formdata.append('image', image);

    const Data = {
        rua,
        casa_numero,
        cep,
        vendedor,
        phone,
        description
    };

    const headers = {
        'headers': {
            'Content-Type': 'aplication/json',
            'image': cep
        }
    }
    
    

    const Create = async (e) => {
        e.preventDefault();
        
        const resposta_backend = await Api.post('/create', Data);

        if (resposta_backend.data === 'cadastrado!') {
           alert('Dados cadastrados!');
        } else {
            alert('ErRoR: erro no cadastro, tente mais tarde');
        };
    };

    async function upImg(e){
        e.preventDefault();
        if (image === '') {
            alert('ESCOLHA UMA IMAGEM');
        }else {
            const responsta_img =  await Api.post('/img', formdata, headers);
        
            if (responsta_img.data === '' ){
                alert('tipo de arquivo não suportado!');
        }   else {
                alert('img cadastrada!');
                history('/loja');
            };            
        };
        


    }; 


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
                
                <form id="Formulario">
                    <h3>"*ENVIE PRIMEIRO OS DADOS, DEPOIS A IMAGEM!!!"</h3>
                    <br/>
                    <p id="paragrafo">Rua:</p>
                    <input id="entrada"
                     type="text" 
                     placeholder="Rua:"
                     onChange={(e) => SetRua(e.target.value)}/>

                    <p id="paragrafo">Número:</p>
                    <input id="entrada" 
                    type="number"
                    maxLength={5} 
                    placeholder="Numero da Casa:"
                    onChange={(e) => SetNumero(e.target.value)}/>

                    <p id="paragrafo">CEP:</p>
                    <input id="entrada" 
                    type="number" 
                    placeholder="CEP:"
                    maxLength={7}
                    onChange={(e) => SetCep(e.target.value)}/>

                    <p id="paragrafo">Vendedor:</p>
                    <input id="entrada" 
                    type="text" 
                    placeholder="Nome do Vendenor"
                    maxLength={60}
                    onChange={(e) => SetVendedor(e.target.value)}/>

                    <p id="paragrafo">Contato:</p>
                    <input id="entrada" 
                    type="number" 
                    placeholder="EX: 11932223533"
                    maxLength={10}
                    onChange={(e) => setPhone(e.target.value)}/>

                    <p id="paragrafo">Descrição:</p>
                    <input id="entrada" 
                    type="text" 
                    placeholder="EX: 100m³ 3quartos 2 banheiros"
                    maxLength={120}
                    onChange={(e) => SetDescription(e.target.value)}/>

                    

                    <input id="send" 
                        type="submit" 
                        value='1° ENVIAR DADOS'
                        onClick={Create}
                        >
                    </input>

                    <form id='form-img' >
                    <h3>Carregar imagem</h3>
                    
                    <input id="img" 
                        type='file' 
                        onChange={(e) => SetImage(e.target.files[0])}
                        />
                        <input id="send" 
                        type="submit" 
                        value='2° ENVIAR IMAGEM'
                        onClick={upImg}
                        >
                    </input>
                        
                    </form>
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