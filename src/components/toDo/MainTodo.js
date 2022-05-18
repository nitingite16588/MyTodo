import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDoList from "./TodoList";
import { todoData } from "./todos";

const MainTodd = () => {
  const [todList, setTodList] = useState([]);
  const [orignalList, setOrignalList] = useState([]);
  const [val, setVal] = useState(false);

  useEffect(() => {
    setTodList(todoData);
    setOrignalList(todoData)
    // axios.get('./src/components/toDo/todos.js').then((res) => {
    //   console.log(res.data);
    //   setTodoList(res.data);
    // });
  }, []);

  const onDelete = (id) => {
    todList.filter((item) => {});
  };

  const onSort = (e) => {
    let newData = [...todList];
    let sortData = newData.sort((a, b) => {
      return a.value - b.value;
    });
    setTodList(sortData);
  };

  const inputHanlder = (e) => {
    let search = e.target.value;
    if(!search ){
      setTodList(orignalList)
    } 
    console.log(e.target.value);

    let newData = orignalList.filter((item) => {
      return item.title.includes(search);
    });

    setTodList(newData);
  };

  const addTodo = (id) => {};
  return (
    <>
      <div>
        <input type="text" onChange={inputHanlder} />
        <button onClick={addTodo}> Add Todo</button>
      </div>
      <div>
        <ToDoList list={todList} onDelete={onDelete} onSort={onSort} />
      </div>
    </>
  );
};

export default MainTodd;
