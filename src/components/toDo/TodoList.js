import React from 'react';
import SingleTodo from './SingleTodo';
const TodoList = (props) => {
  console.log('in TodoList');
  console.log(props.list);
  return (
    <div> 

      
      <div className="TodoListItem header">
        <span> Edit</span>
        <span> Title</span>
        <span onClick={props.onSort}> Number</span>
        <span> Status</span>
        <span> Delete</span>
      </div>
      {props.list.map((item) => {
        return (
          <div className="TodoListItem" key={Math.random()}>
            <SingleTodo row={item} onDelete={props.onDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
