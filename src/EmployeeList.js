import Employee from "./Employee";
import { useState } from "react";
function EmployeeList() {
  let [employeeData, setEmployees] = useState([
    {
      name: "Homer",
      email: "homer@simpsons.com",
      phone: "1-800-HOMER",
      skills: "Being Homer",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
      name: "Marge",
      email: "marge@simpsons.com",
      phone: "1-800-MARGE",
      skills: "Being Marge",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
    },
    {
      name: "Bart",
      email: "bart@simpsons.com",
      phone: "1-800-BART",
      skills: "Being Bart",
      avatar:
        "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
    },
  ]);
  function addEmployee() {
    setEmployees(function (prevState) {
      return [
        ...prevState,
        {
          name: "Lisa",
          email: "lisa@simpsons.com",
          phone: "1-800-LISA",
          skills: "Being Lisa",
          avatar:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
        },
      ];
    });
  }
  return (
    <>
      <button onClick={addEmployee}>Add Employee</button>
      {employeeData.map(function (empl) {
        return (
          <Employee
            name={empl.name}
            email={empl.email}
            phone={empl.phone}
            skills={empl.skills}
            avatar={empl.avatar}
          />
        );
      })}
    </>
  );
}

export default EmployeeList;
