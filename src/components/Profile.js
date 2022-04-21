import React from "react";

const Profile = ({StudentProfile}) => {

  
  return (
    <div className="card">
    <img className="img" src={StudentProfile.photo}/>
    <h3>{StudentProfile.first_name} {StudentProfile.last_name}</h3>
    <p> 
    Phone number: {StudentProfile.phone_number}
    <br/> 
    Email: {StudentProfile.email}
    <br/>
    Age: {StudentProfile.age}
    </p>
</div>
    
  );
};

export default Profile

