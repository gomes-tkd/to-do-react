import React, { useState } from 'react';
import Input from "../Input/input";
import Button from "../Button/button";
import styles from "./ListForm.module.css";

const ListForm = ({ setList, list, setTotalTask }) => {
    const [atividade, setAtividade] = useState("");

    function handleOnSubmit(e) {
        e.preventDefault();
        if (atividade.length !== 0) {
            setList([...list, atividade]);
            setTotalTask(list.length + 1);
        } else {
            alert("Não podes adicionar uma tarefa em branco!");
        }


    }

    return (
        <form className={styles.listForm} onSubmit={handleOnSubmit}>
            <Input value={atividade} setState={setAtividade} styles={styles.inputAdd} />
            <Button label={"Add"} styles={styles.btnAdd} />
        </form>
    );
};

export default ListForm;