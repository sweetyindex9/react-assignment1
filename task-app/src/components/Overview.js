import React from "react";


const Overview = (props) => {
  const { tasks } = props;

  return (
    <ol type="1">
      {tasks.map((task) => {
        return <li key={task.id}>{task.text} 
        <button onClick={()=> this.deleteTask(task.key)}>Delete</button>
        <button onClick={(edit)=>this.editTask(edit.target.value,task.key)}>Edit</button>
       </li>
      })}
    </ol>
  );
};

export default Overview;