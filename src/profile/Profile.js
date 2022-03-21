import React from 'react';
import PropTypes from 'prop-types';
import './profile.css'

 const Profile=(props)=>{
   
    const handelName=(props)=>{
        return (
            alert(props.fullName)
        );
    }

   return (
    <div style={{fontStyle:'italic'}}>
      <img src={props.children} alt="myImage" width={400} height={400} ></img>  
      <p>FullName: <br/>{props.fullName}</p>
      <p>Bio: <br/> {props.bio}</p>
      <p>Profession:<br/> {props.profession}</p>
      <button onClick={handelName}>click Me</button>
    </div>
  )
}

Profile.defaultProps={
  fullName:"name",
  bio:"bio",
  profession:"profession"
}

Profile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string
}


  export default Profile;