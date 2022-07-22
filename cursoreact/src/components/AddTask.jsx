import React, { useState } from 'react';
import Button from './Button';

import "./AddTask.css";

 
const AddTask = (handleTaskAddition) => {
    const [inputData, setInputData] = useState('');
  
    const handleInputChange = (e) => {
      setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
       handleTaskAddition(inputData);
       setInputData(""); 
    }

    return ( 
        <div className="add-task-contaniner">
            <input 
               onChange={handleInputChange}
               value={inputData} 
               className="add-task-input" 
               type="text" 
            />;
            <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    );
};
 
export default AddTask;
