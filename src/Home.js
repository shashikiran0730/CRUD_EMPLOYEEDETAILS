import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "./Home.css";
export const Home = () => {
  const [empDetails, setEmpDetails] = useState([]);
  const [isIdExist, setisIdExist] = useState(false);
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
  useEffect(() => {}, [empDetails]);
  useEffect(() => {}, []);

  const addDetails = () => {
    let f = true;
    empDetails.map((i) => {
      if (i.empid == empId.current.value) {
        setisIdExist(true);
        console.log(isIdExist);
        f = false;
      }
    });

    var d = {
      name: empname.current.value,
      empid: empId.current.value,
      email: empEmail.current.value,
    };
    if (f) {
      console.log(isIdExist);
      var a = empDetails;
      a.push(d);
      console.log(a);
      setEmpDetails([...a]);
      axios.post("http://localhost:3000/employeedetails", d);
      setisIdExist(false);
    }
  };
  const deleteDetails = (id) => {
    var b = empDetails;
    b = b.filter((i) => i.id != id);
    axios.delete("http://localhost:3000/employeedetails/" + id);
    setEmpDetails([...b]);
    setisIdExist(false)
  };

  return (
    <div className="container-1">
      <video  > 
        <source src="https://www.youtube.com/watch?v=xfcJTMLy3HU" type="video/mp4"></source>
      </video>
      <input type="text" placeholder="employee name" ref={empname}></input>
      <br></br>
      <input type="text" placeholder="employeeid" ref={empId}></input>
      <br></br>
      <input type="email" placeholder="email" ref={empEmail}></input>
      <br></br>
      <button className="btn-1" onClick={() => addDetails()}>
        ADD
      </button>
      <table>
        <div>
          <tr>
            <th>Empname</th>
            <th>Empid</th>
            <th>Emp email</th>
            <th>Delete</th>
          </tr>
          {empDetails.map((i) => (
            <div className="container-2">
              <tr>
                <td> {i.name}</td>
                <td> {i.empid}</td>
                <td> {i.email}</td>
                <button className="btn-2" onClick={() => deleteDetails(i.id)}>
                  Delete
                </button>
              </tr>
            </div>
          ))}
        </div>
      </table>
      {isIdExist && "id alredy exist"}
    </div>
  );
};
