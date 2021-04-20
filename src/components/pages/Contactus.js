import React, {useEffect} from 'react';
import '../../App.css';
import '../css/Contact.css';
import { useForm, ValidationError } from '@formspree/react';
import Aos from 'aos'
import 'aos/dist/aos.css'


 const Contactus = () =>{
  const [state, handleSubmit] = useForm("xbjqrnvg");

  useEffect(()=>{
    Aos.init({duration: 2000});
},[])

  if (state.succeeded) {
      return <p>Thanks for ordering!</p>;
  }

  return (
<div className="main-container">
      <div className='contact-container' data-aos='fade-right'>
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
      <label htmlFor="name">Name(Required)</label>
      <br/>
      <input type="text" id="name" name="name" placeholder="Name.."/>
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
      {/* <hr/> */}
      <label htmlFor="subject">Addtional Information</label>
      <br/>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <br/>
        <button type="submit" 
                className="submitBtn"
                disabled={state.submitting}>
          Submit
        </button>

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
    
    </form>

  </div>
  <div className='contact-info' data-aos='fade-left'>
    <h2>Brooklyn Location</h2>
    <p>833 Flatbush Avenue</p>
    <p>Brooklyn, NY 11226</p>
    <p>(718)-704-1700</p>
    <p>Sherilsbakery@gmail.com</p>
    <h2>Hours</h2>
      <p>Monday: 8:00 am - 10:00 pm</p>
      <p>Tuesday: 8:00 am - 10:00 pm</p>
      <p>Wednesday: 8:00 am - 10:00 pm</p>
      <p>Thursday: 8:00 am - 10:00 pm</p>
      <p>Friday: 8:00 am - 10:00 pm</p>
      <p>Saturday: 10:00 am - 7:00pm</p>
      <p>Sunday: Closed</p>
    
  </div>

  </div>
  )
}
export default Contactus;