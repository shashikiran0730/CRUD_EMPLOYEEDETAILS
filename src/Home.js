import axios from "axios";
import { useEffect, useRef, useState } from "react";

export const Home = () => {
  const [empDetails, setEmpDetails] = useState([]);
  var empname = useRef();
  var empId = useRef();
  var empEmail = useRef();
  useEffect(() => {
    var data = axios.get("http://localhost:3000/employeedetails");
    data.then((res) => {
      console.log(res.data);
      setEmpDetails(res.data);
    });
  }, []);

  const addDetails = () => {
    var d = {
      name: empname.current.value,
      empid: empId.current.value,
      Email: empEmail.current.value,
    };
    var a = empDetails;
    a.push(d);
    console.log(a);
    axios.post("http://localhost:3000/employeedetails", [...a]);
    setEmpDetails([...a]);
  };
  const deleteDetails = (id) => {
    // console.log("hi",id)
    var b = empDetails;
    b = b.filter((i) => i.empid != id);
    setEmpDetails([...b]);
  };

  return (
    <div>
      <input type="text" placeholder="employee name" ref={empname}></input>
      <br></br>
      <input type="text" placeholder="employeeid" ref={empId}></input>
      <br></br>
      <input type="email" placeholder="email" ref={empEmail}></input>
      <br></br>
      <button onClick={() => addDetails()}>ADD</button>
      {empDetails.map((i) => (
        <div>
          {i.name}
          {i.empid}
          <button onClick={() => deleteDetails(i.empid)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
