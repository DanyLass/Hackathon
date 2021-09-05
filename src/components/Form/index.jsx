import React from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import './index.css';

const Form = () => (
    <form>
        <div className="test">
            <p>
                <label htmlFor="inputNome">Nome</label>
            </p>
            <input type="text" name="nome" id="nome" />
            {/* <TextField id="standard-basic" label="Nome" /> */}
        </div>
        <p>
            <label htmlFor="inputSobrenome">Sobrenome</label>
        </p>

        <input type="text" name="sobrenome" id="sobrenome" />

        <div>
            <p>
                <label htmlFor="inputEmail">Email</label>
            </p>
            <input type="email" name="email" id="email" />
        </div>
        <div>
            <p>
                <label htmlFor="inputTelefone"> Selecione o seu turno:</label>
            </p>
            <label>
                <input type="radio" name="devweb" id="frontend" />
                Manhã (8:00h-12:00h)
                <input type="radio" name="devweb" id="frontend" />
                Tarde (13:00h-18:00h)
                <input type="radio" name="devweb" id="frontend" />
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
                <input type="radio" name="devweb" id="frontend" />
                São Paulo
                <input type="radio" name="devweb" id="frontend" />
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
                <Link to="/room/sp" className="link">
                    Avançar
                </Link>
            </button>
        </div>
    </form>
);
export default Form;
