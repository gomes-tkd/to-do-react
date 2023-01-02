import React from 'react';
import Button from '../Button/button';
import styles from "./ListTask.module.css";

const ListTask = (props) => {

    function handleDoneTask(index) {
        const novoArray = [...props.list];
        novoArray.splice(index, 1);
        props.setList(novoArray);
        props.setTotalTask(novoArray.length);
    }

    return (
        <section>
            <div className={styles.toDoListSection}>
                {props.list.map((item, index) => {
                    return (
                        <p key={index} className={styles.task}>
                            <span>{item}</span>
                            <Button
                                styles={styles.btnRemove}
                                label={"Done"}
                                onClick={() => handleDoneTask(index)}
                            />
                        </p>
                    )
                })}
            </div>
        </section>
    );
};

export default ListTask;