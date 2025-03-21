import React,{useState} from 'react'

const App = () => {
const [employees,setEmployees]=useState([
  { id: 1, name: "John Doe", position: "Software Engineer", department: "IT" },
  { id: 2, name: "Jane Smith", position: "Product Manager", department: "Marketing" },
  { id: 3, name: "Alice Johnson", position: "Data Scientist", department: "AI Research" },
])
return (
  <div >
  <h2>Employee List</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Position</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      {employees.map((employee) => (
        <tr key={employee.id}>
          <td>{employee.id}</td>
          <td>{employee.name}</td>
          <td>{employee.position}</td>
          <td>{employee.department}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);
}

export default App