import React from 'react';
import './App.css';
import Profile from './profile/Profile';
import cat from '././profile/Milka.jpg';


const data={
  img:cat,  
  fullName:"Milka Sourour's cat",
  bio:"Time spent with cats is never wasted",
  profession:"sleep when you want to sleep, stay up with you when you want too, but please don't forget my dry-food!!"

}

function App() {
  return (
    <div className="App" >
     <div className='container'>
     <Profile fullName={data.fullName}
              bio={data.bio}
              profession={data.profession}  >
     {data.img}

     </Profile>

     </div>
    </div>
  );
}

export default App;
