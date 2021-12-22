import { useState } from 'react';
import Axios from 'axios';


function App() {

  const[name, setName] = useState('')
  const [age, setAge] = useState('0');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState('0')

  const [employeeList, setEmployeeList] = useState([])

  const addEmployee = () =>{
    Axios.post('http://localhost:3001/create', {
      name: name, 
      age: age, 
      position: position,
      wage: wage
    }).then(() =>{
      console.log('sucess')
    })
  }
  
  const getEmployees = () =>{
    Axios.get("http://localhost:3001/employees").then((response) => {
      console.log(response);
      setEmployeeList(response.data)
    });
  };

  return (
    <div className="App">
      <div>
        <h1>CRUD</h1>
        <label>Name:</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value)
          }}
        />

        <label>Age:</label>
        <input type="number" onChange={(event) => {
          setName(event.target.value)
          }}
        />

        <label>Position</label>
        <input type="text" onChange={(event) => {
          setName(event.target.value)
          }} 
        />

        <label>Wage:</label>
        <input type="number" onChange={(event) => {
          setName(event.target.value)
          }}
        />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <div>
          <button onClick={getEmployees}>Show Employees</button>

          {employeeList.map((val, key) =>{
            return <div> {val.name}</div>
          })}
      </div>
    </div>

  );
}

export default App;
