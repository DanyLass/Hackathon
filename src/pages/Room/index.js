/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import AuthHelp from '../../services/AuthHelp';

const useSetlogado = () => {
    const [mostreMensagem, setmostreMensagem] = useState(
        AuthHelp.usuarioLogado()
    );
    return [mostreMensagem, setmostreMensagem];
};

function Room() {
    const [mostreMensagem, setmostreMensagem] = useSetlogado();
    const onMostremensagemChange = () => setmostreMensagem();

    return (
        <div>
            {mostreMensagem ? (
                <div>Reserva</div>
            ) : (
                <div>Usuario não logado </div>
            )}
        </div>
    );
}

export default Room;
