import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react"
import Modal from './modal/Modal'
import useModal from "./modal/useModal"

function mergeErrors(formspreeErrors, otherErrors = {}) {
  console.log("formspreeErrors", formspreeErrors)
  // merge server side errors into react-hook-form errors
  return {
    ...formspreeErrors?.reduce(
      (acc, cur) => ({
        [cur.field || "form"]: {
          message: (cur.field ? "This " : "") + cur.message
        },
        ...acc
      }),
      {}
    ),
    ...otherErrors
  };
}

export default function MyFormEss() {
  const { isOpen, openModal, closeModal } = useModal()
  const [state, sendToFormspree, reset] = useFormspree('myyqnrab')
  const { register, formState, handleSubmit } = useForm();
  const errors = mergeErrors(state.errors, formState.errors)

  if (state.succeeded) {
    // return <div>Thank you for signing up!</div>;
    openModal()
    console.log(isOpen)
    return (
      <Modal
        isOpen={isOpen}
        handleClose={closeModal}
      >
        <header>
          <h1 className="text-3xl">Merci pour votre message !</h1>
          <p className="mt-4">J'y réponds dès que possible.</p>
        </header>
      </Modal>)
  }


  return (
    <form
      onSubmit={sendToFormspree}
      action="https://formspree.io/f/myyqnrab"
      method="POST"
      className="flex flex-col"
    >
      {/* <div className="flex flex-col"> */}
      <label htmlFor="lastName" className="text-left text-black">
        Nom
      </label>

      <input
        type="text"
        name="lastName"
        id="lastName"
        // {...register("name")}
        {...register('lastName', {
          required: true,
          minLength: 2,
          maxLength: 20,
          pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
        })}
        required
        autoComplete="family-name"
        className="border-black border-2 text-black p-2 mb-4"
      ></input>
      <div className="inputNameError">
        {errors?.lastName?.type === 'required' && (
          <p className="text-red-700 pErrorName pLastName">This field is required</p>
        )}
        {errors?.lastName?.type === 'maxLength' && (
          <p className="text-red-700 pErrorName pLastName">
            Cannot exceed 20 characters
          </p>
        )}
        {errors?.lastName?.type === "minLength" && (
          <p className="text-red-700 pErrorName pLastName">
            mini 2 characters
          </p>
        )}
        {errors?.lastName?.type === 'pattern' && (
          <p className="text-red-700 pErrorName pLastName">
            Alphabetical characters only
          </p>
        )}
      </div>
      {/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
      {/* <ValidationError
        field="secondName"
        prefix="Nom"
        errors={state.errors}
      /> */}
      {/* </div> */}

      <label htmlFor="email">Email</label>
      <div className="inputEmailError">
        {errors?.email?.type === "required" && (
          <p className="pErrorlogin">This field is required</p>
        )}
        {errors?.email?.type === "pattern" && (
          <p className="pErrorlogin">Email invalid</p>
        )}
      </div>
      <input
        id="email"
        {...register("email", { required: "Required" })}
        type="email"
        name="email"
        className="text-black p-2 mb-4 border-black border-2" />
      {/* <ValidationError field="email" prefix="Email" errors={state.errors} /> */}

      {/* <label htmlFor="message" className="text-left">
        Message
      </label>
      <textarea
        rows="7"
        name="message"
        id="message"
        required
        className="text-black p-2 mb-4 border-black border-2"
      ></textarea> */}
      {/* <ValidationError
        field="message"
        prefix="Message"
        errors={state.errors}
      /> */}


      <button type="submit" disabled={state.submitting} className='border-black border-2'>Sign up</button>
    </form>
  )
}