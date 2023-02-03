import { useEffect, useState } from "react";
import "./app.styles.css";
import "./global.css";
import Rocket from "./assets/rocket.svg";
import Plus from "./assets/plus.svg";
import Clipboard from "./assets/Clipboard.svg";
import Trash from "./assets/trash.svg";

import { v4 as uuidv4 } from "uuid";

interface ITask {
  title: string;
  completed: boolean;
  id: string;
}

function App() {
  const [completedTasks, setCompletedTasks] = useState();

  const [tasks, setTasks] = useState<ITask[]>([]);

  const [title, setTitle] = useState<string>("");
  // const [title, setTitle] = useState<boolean>(false);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App">
      <div className="Header">
        <div>
          <img src={Rocket} />
          <h1>to</h1>
          <h1>do</h1>
        </div>
      </div>

      <div className="Content">
        <div className="CreateTask">
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={(value) => setTitle(value.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              if (title) {
                setTasks([
                  {
                    title,
                    completed: false,
                    id: uuidv4(),
                  },
                  ...tasks,
                ]);
              }
            }}
          >
            Criar
            <img src={Plus} />
          </button>
        </div>

        <div className="todoHeader">
          <div className="createdTasks">
            <span>Tarefas criadas</span>
            <div>{tasks.length}</div>
          </div>
          <div className="completedTasks">
            <span>Concluídas</span>
            <div>0</div>
          </div>
        </div>

        {tasks.length !== 0 ? (
          <div className="todoContent">
            {tasks.map((item) => (
              <div className="taskCard" key={item?.id}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={item.completed}
                  onChange={({ target }) => {
                    tasks.map((value) =>
                      setTasks([
                        {
                          ...value,
                          completed: target.checked,
                        },
                        ...tasks.filter((newTask) => newTask.id !== value.id),
                      ])
                    );
                  }}
                />
                <span>{item?.title}</span>
                <button>
                  <img src={Trash} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="todoContentNoTask">
            <img src={Clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
