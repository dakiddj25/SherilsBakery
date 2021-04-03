import React from 'react';
import '../../App.css';
import { MdPhoneIphone } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import Footer from '../Footer';
import '../css/Contact.css';

import { useForm, ValidationError } from '@formspree/react';

const Contactus = () =>{
  const [state, handleSubmit] = useForm("xbjqrnvg");
  if (state.succeeded) {
      return <p>Thanks for ordering!</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address(Required)
      </label>
      <br/>
      <input
        id="email"
        type="text" 
        name="email"
        placeholder='Email'
      />
      <br/>
      <label htmlFor="fname">First Name(Required)</label>
      <br/>
      <input type="text" id="fname" name="firstname" placeholder="first name.."/>
      <br/>
      <label htmlFor="lname">Last Name(Required)</label>
      <br/>
      <input type="text" id="lname" name="lastname" placeholder="last name.."/>
      <br/>
      <label htmlFor="number">Phone Number</label>
      <br/>
      <input type="text" id="number" name="number" placeholder="Phone #"/>
      <br/>
      <label htmlFor="guest">Approximate Guest Amount</label>
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
      <label htmlFor="event">Event Type</label>
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
      <label htmlFor="order">Order Type</label>
      <br/>
      <select id="order" name="order">
      <option value="blank">Select Order Type</option>
      <option value="wedding">Pick up</option>
      <option value="birthday">Delievery</option>
      </select>
      <hr/>
      <label htmlFor="subject">Addtional Information</label>
      <br/>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>

    <Footer />
  </div>
  )
}
export default Contactus;