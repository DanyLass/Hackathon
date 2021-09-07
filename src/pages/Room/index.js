import React from 'react';
import Company from '../../components/Company';
import './index.css';

import Header from '../../components/Header';

function Room() {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Company
                    onSelectSeat={(seatId) => {
                        console.log(`selected - ${seatId}`);
                    }}
                />
            </div>
        </>
    );
}

export default Room;
