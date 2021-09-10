import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function FormAgendamento() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [turno, setTurno] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [dateTime, setDateTime] = useState('');

    function handleSubmit(event) {
        const data = {
            senha,
            nome,
            email,
            turno,
            localizacao,
            dateTime,
        };
        event.preventDefault();
        console.log('Submit do form');
        console.log('data', data);
    }

    function handlerbtOnSelect(event) {
        setTurno(event.target.value);
        setLocalizacao(event.target.value);

        console.log('rbt target input', event.target.value);
    }

    function handleDateTime(event) {
        setDateTime(event.target.value);
        console.log('rbt target input', event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="test">
                    <p>
                        <label htmlFor="inputNome">Nome</label>
                    </p>
                    <input
                        placeholder="Nome"
                        type="text"
                        name="nome"
                        id="nome"
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <p>
                    <label htmlFor="inputSenha">Senha</label>
                </p>
                <input
                    placeholder="Senha"
                    type="passord"
                    name="senha"
                    id="senha"
                    onChange={(e) => setSenha(e.target.value)}
                />
                <div>
                    <p>
                        <label htmlFor="inputEmail" value={email}>
                            Email
                        </label>
                    </p>
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <p>
                        <label htmlFor="inputTelefone">
                            {' '}
                            Selecione o seu turno:
                        </label>
                    </p>
                    <label>
                        <input
                            value="manha"
                            type="radio"
                            name="rbtturno"
                            id="rbtturno1"
                            onChange={handlerbtOnSelect}
                        />
                        Manhã (8:00h-12:00h)
                        <input
                            value="tarde"
                            type="radio"
                            name="rbtturno"
                            id="rbtturno2"
                            onChange={handlerbtOnSelect}
                        />
                        Tarde (13:00h-18:00h)
                        <input
                            value="integral"
                            type="radio"
                            name="rbtturno"
                            id="rbtturno3"
                            onChange={handlerbtOnSelect}
                        />
                        Integral (08:00h-18:00h)
                    </label>
                </div>
                <div>
                    <p>
                        <label htmlFor="inputEstabelecimento">
                            Escolha a sua unidade:
                        </label>
                    </p>
                    <label>
                        <input
                            value="sao paulo"
                            type="radio"
                            name="rblocalizacao"
                            id="rblocalizacao1"
                            onChange={handlerbtOnSelect}
                        />
                        São Paulo
                        <input
                            value="santos"
                            type="radio"
                            name="rblocalizacao"
                            id="rblocalizacao2"
                            onChange={handlerbtOnSelect}
                        />
                        Santos
                    </label>
                </div>
                <div className="time">
                    <TextField
                        onChange={handleDateTime}
                        value={dateTime}
                        id="date"
                        label="Data"
                        type="date"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <button type="submit" className="button">
                        <Link to="/room/sp" className="link">
                            Avançar
                        </Link>
                    </button>
                </div>
            </form>
        </>
    );
}
