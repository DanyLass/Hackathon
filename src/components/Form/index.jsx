import React from 'react';

import { Container, Content } from './styles';

import logoImg from '../../assets/logo.svg';

function Form() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="FCamara" />
                <form>
                    <input placeholder="nome" />

                    <input placeholder="Email" />

                    <input type="password" placeholder="Senha" />

                    <input type="password" placeholder="Confirmar Senha" />

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
        </Container>
    );
}

export default Form;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function FormAgendamento() {
//     const [nome, setNome] = useState('');
//     const [confirmarsenha, setConfirmarSenha] = useState('');
//     const [senha, setSenha] = useState('');

//     function handleSubmit(event) {
//         const data = {
//             senha,
//             nome,
//             confirmarsenha,
//         };
//         event.preventDefault();
//         console.log('Submit do form');
//         console.log('data', data);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className="test">
//                 <p>
//                     <label htmlFor="inputNome">Nome</label>
//                 </p>
//                 <input
//                     placeholder="Nome"
//                     type="text"
//                     name="nome"
//                     id="nome"
//                     onChange={(e) => setNome(e.target.value)}
//                 />
//             </div>
//             <p>
//                 <label htmlFor="inputSenha">Senha</label>
//             </p>
//             <input
//                 placeholder="Senha"
//                 type="passord"
//                 name="senha"
//                 id="senha"
//                 onChange={(e) => setSenha(e.target.value)}
//             />
//             <div>
//                 <p>
//                     <label htmlFor="inputConfirmarSenha" value={confirmarsenha}>
//                         Confirmarsenha
//                     </label>
//                 </p>
//                 <input
//                     placeholder=" Confirmar senha"
//                     type="Confirmar senha"
//                     name="Confirmar senha"
//                     id="Confirmar senha"
//                     onChange={(e) => setConfirmarSenha(e.target.value)}
//                 />
//             </div>

//             <div>
//                 <button type="submit" className="button">
//                     <Link to="/room/sp" className="link">
//                         Cadastrar
//                     </Link>
//                 </button>
//             </div>
//         </form>
//     );
// }
