import { ValidationError, useForm } from '@formspree/react'

export default function MyForm() {
  const [state, handleSubmit] = useForm('{your-form-id}')
  if (state.succeeded) {
    return <div>Thank you for signing up!</div>
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto bg-myBlue w-3/4 p-4  sm:w-1/2 md:max-w-xl"
    >
      <div className="flex flex-col sm:flex-row">
        <div>
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
            errors={state.errors}
          />
        </div>

        <div>
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
            errors={state.errors}
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
      <ValidationError field="email" prefix="Email" errors={state.errors} />

      <label htmlFor="message" className="text-left text-white">
        Message
      </label>
      <textarea
        rows="10"
        name="message"
        id="message"
        placeholder="Votre site est magnifique."
        required=""
        className="text-black p-2 mb-4"
      ></textarea>
      <ValidationError field="message" prefix="Message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="text-white mx-auto px-2 py-1 ring-1 ring-white hover:bg-rose-600"
      >
        Envoyer
      </button>
    </form>
  )
}
