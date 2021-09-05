import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import './index.css';

export default function FormAgendamento() {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [turno, setTurno] = useState('');

    function handleSubmit(event) {
        const data = {
            email,
            nome,
            sobrenome,
            turno,
        };
        event.preventDefault();
        console.log('Submit do form');
        console.log('data', data);
    }

    function handlerbtOnSelect(event) {
        setTurno(event.target.value);
        console.log('rbt target input', event.target.value);
    }

    return (
        <>
            <div>
                <h1>Boas Vindas!</h1>
                <h2>Agendamento</h2>
            </div>
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
                    <label htmlFor="inputSobrenome">Sobrenome</label>
                </p>
                <input
                    placeholder="Sobrenome"
                    type="text"
                    name="sobrenome"
                    id="sobrenome"
                    onChange={(e) => setSobrenome(e.target.value)}
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
                            type="radio"
                            name="rblocalizacao"
                            id="rblocalizacao1"
                        />
                        São Paulo
                        <input
                            type="radio"
                            name="rblocalizacao"
                            id="rblocalizacao2"
                        />
                        Santos
                    </label>
                </div>
                <div className="time">
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div>
                    <button type="submit" className="button">
                        {/* <Link to="/room/sp" className="link">
                        Avançar
                    </Link> */}
                    </button>
                </div>
            </form>
        </>
    );
}
