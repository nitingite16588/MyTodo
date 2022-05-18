import React from 'react';
const SingleTodo = (props) => {
  return (
    <>
      <span> edit</span>
      <span> {props.row.title}</span>
      <span> {props.row.value}</span>
      <span> {props.row.complete ? 'Complete' : 'In progress'}</span>
      <span
        onClick={(e) => {
          props.onDelete(props.row.title);
        }}
      >
        Delelte
      </span>
    </>
  );
};

export default SingleTodo;
