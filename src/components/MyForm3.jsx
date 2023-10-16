import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ReCAPTCHA from 'react-google-recaptcha'

function ContactForm() {
  const [state, handleSubmit] = useForm('myyqnrab')

  function handleChange(tok) {
    console.log('tok', tok)
  }

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      {/* <ReCAPTCHA
        sitekey="6LfUlpcoAAAAAD5WIurmytZdVNLC__s5tezaqnyS"
        onChange={handleChange}
      /> */}
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}
function App() {
  return <ContactForm />
}
export default App
