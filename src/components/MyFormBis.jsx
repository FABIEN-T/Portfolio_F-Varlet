import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import axios from 'axios'

export default function MyForm() {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: 'post',
      url: 'https://formspree.io/f/myyqnrab',
      data: new FormData(form),
    })
      .then((r) => {
        handleServerResponse(true, 'Merci !', form)
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error, form)
      })
  }
  return (
    <form
      onSubmit={handleOnSubmit}
      className="flex flex-col mx-auto bg-myBlue w-full px-8 py-4 sm:max-w-xl sm:p-4"
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-left text-white">
            Prénom
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Prénom"
            required
            autoComplete="given-name"
            className="text-black p-2 mb-4"
          ></input>
          <ValidationError
            field="firstName"
            prefix="Prénom"
            errors={serverState.errors}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="secondName" className="text-left text-white">
            Nom
          </label>
          <input
            type="text"
            name="secondName"
            id="secondName"
            placeholder="Nom de famille"
            required
            autoComplete="family-name"
            className="text-black p-2 mb-4"
          ></input>
          <ValidationError
            field="secondName"
            prefix="Nom"
            errors={serverState.errors}
          />
        </div>
      </div>

      <label htmlFor="email" className="text-left text-white">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        autoComplete="email"
        className="text-black p-2 mb-4"
      />
      <ValidationError
        field="email"
        prefix="Email"
        errors={serverState.errors}
      />

      <label htmlFor="message" className="text-left text-white">
        Message
      </label>
      <textarea
        rows="7"
        name="message"
        id="message"
        placeholder="Votre site est magnifique."
        required=""
        className="text-black p-2 mb-4"
      ></textarea>
      <ValidationError
        field="message"
        prefix="Message"
        errors={serverState.errors}
      />

      <button
        type="submit"
        disabled={serverState.submitting}
        className="text-white mx-auto px-2 py-1 ring-1 ring-white hover:bg-rose-700"
      >
        Envoyer
      </button>
      {serverState.status && (
        <p className={!serverState.status.ok ? 'errorMsg' : ''}>
          {serverState.status.msg}
        </p>
      )}
    </form>
  )
}
