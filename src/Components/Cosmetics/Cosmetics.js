import React, { useEffect, useState } from 'react';
import { add } from '../../Components/utilities/storage'
import { add as addition, multiply as multiplication } from '../utilities/storage';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('./cosmetics.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <div>
            <h2>Shop my Cosmetics</h2>

        </div>
    );
};

export default Cosmetics;