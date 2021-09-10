import React from 'react';
import Company from '../../components/Company';

function Room() {
    return (
        <Company
            onSelectSeat={(seatId) => {
                console.log(`selected - ${seatId}`);
            }}
        />
    );
}

export default Room;
