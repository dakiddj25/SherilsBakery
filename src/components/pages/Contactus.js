import React from 'react';
import '../../App.css';
import { MdPhoneIphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Footer from '../Footer';


 const SignUp = () =>{
  return(
    <div>
    
    <h1 className='sign-up'>Let's Talk</h1>
    <div className='contact'> 

     <form>
     <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="first name.."/>
    
    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="last name.."/>

    <label for="event">Event</label>
    <select id="event" name="event">
      <option value="wedding">Wedding</option>
      <option value="birthday">Birthday</option>
      <option value="just because">Just Because</option>
      <option value="babyshower">Babyshower</option>
      <option value="anniversary">Anniversary</option>
      <option value="other">Other</option>
    </select>

     </form>   

    </div>
    <Footer />
      </div>
  ) 
}

export default SignUp