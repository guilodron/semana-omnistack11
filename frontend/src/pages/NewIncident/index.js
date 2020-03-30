import React, {useState} from 'react'

import {FiArrowLeft} from 'react-icons/fi'
import {Link, useHistory} from 'react-router-dom'
import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import "./styles.css";

export default function NewIncident(){

    const history = useHistory();

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')

    async function handleNew(e){
        e.preventDefault();
        const data = {title, description, value}

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        }catch(e){
            alert('Erro ao gravar incidente')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNew}>
                    <input 
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        placeholder="Título do Caso"/>
                    <textarea 
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        placeholder="Descrição do caso"/>
                    <input 
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}