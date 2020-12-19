import "./style.css";

function Employee({ name, email, phone, skills, avatar }) {
  return (
    <div className="Person">
      <div >
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Skills: {skills}</p>
      </div>
      <img src={avatar} />
    </div>
  );
}

export default Employee;
