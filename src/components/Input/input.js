import React from 'react';

const Input = ({value, setState, styles}) => {

    return (
        <>
            <input
                className={styles}
                type={"text"}
                placeholder={"Atividade"}
                value={value}
                onChange={(e) => setState(e.target.value)}
            />
        </>
    );
};

export default Input;