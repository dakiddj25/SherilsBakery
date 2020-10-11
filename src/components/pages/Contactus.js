import React from 'react';
import '../../App.css';
import { MdPhoneIphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Footer from '../Footer';
import '../css/Contact.css';

 const SignUp = () =>{
  return(
    <div>
    
    <h1 className='sign-up'>Let's Talk</h1>
    <div className='contact'> 

     <form>
     <label for="fname">First Name(Required)</label>
     <br/>
    <input type="text" id="fname" name="firstname" placeholder="first name.."/>
  
    <br/>
    <label for="lname">Last Name(Required)</label>
    <br/>
    <input type="text" id="lname" name="lastname" placeholder="last name.."/>
    <br/>

    <label for="fname">Email</label>
    <br/>
    <input type="text" id="email" name="email" placeholder="Email"/>

    <br/>
    <label for="fname">Phone Number</label>
    <br/>
    <input type="text" id="number" name="number" placeholder="Phone #"/>

    <br/>

    <label for="guest">Approximate Guest Amount</label>
    <br/>
    <select id="event" name="event">
    <option value="blank">Select Guest Amount</option>
      <option value="small">6-10</option>
      <option value="medium">14-28</option>
      <option value="large">20-40</option>
      <option value="extraLarge">36-55</option>
      <option value="anniversary">55+</option>
      <option value="other">Other</option>
    </select>

    <br/>
    <label for="event">Event Type</label>
    <br/>
    <select id="event" name="event">
    <option value="blank">Select Event Type</option>
      <option value="wedding">Wedding</option>
      <option value="birthday">Birthday</option>
      <option value="just because">Just Because</option>
      <option value="babyshower">Babyshower</option>
      <option value="anniversary">Anniversary</option>
      <option value="other">Other</option>
    </select>

    <br/>
    <label for="order">Order Type</label>
    <br/>
    <select id="order" name="order">
    <option value="blank">Select Order Type</option>
      <option value="wedding">Pick up</option>
      <option value="birthday">Delievery</option>
      </select>
   
     <hr/>

     <label for="subject">Addtional Information</label>
     <br/>
    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

    </form> 
    </div>
    <Footer />
      </div>
  ) 
}

export default SignUp