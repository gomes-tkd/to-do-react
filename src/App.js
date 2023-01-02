import {useState} from "react";
import "./App.css";
import ListForm from "./components/List/ListForm";
import ListTask from "./components/ListTask/ListTask";

function App() {
    const [list, setList] = useState([]);
    const [totalTask, setTotalTask] = useState(0);

  return (
    <main className={"alingMain"}>
        <h1>TO-DO List</h1>
        <p className={"totalTask"}>Total de atividades: {totalTask}</p>
        <section className={"container"}>
            <ListForm setList={setList} list={list} setTotalTask={setTotalTask} />
            <p>Tarefas registradas:</p>
            <ListTask list={list} setList={setList} setTotalTask={setTotalTask}/>
        </section>

    </main>
  );
}

export default App;
