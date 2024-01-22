import React from "react"
import { useForm } from "react-hook-form"
import { useForm as useFormspree } from "@formspree/react"
import Modal from './modal/Modal'
import useModal from "./modal/useModal"

function mergeErrors(formspreeErrors, otherErrors = {}) {
  // merge server side errors into react-hook-form errors
  return {
    ...formspreeErrors?.reduce(
      (acc, cur) => ({
        [cur.field || "form"]: {
          message: (cur.field ? "This " : "") + cur.message,
        },
        ...acc,
      }),
      {}
    ),
    ...otherErrors,
  };
}

export default function MyFormEss() {
  const [serverState, sendToFormspree] = useFormspree("myyqnrab");
  const { register, formState, handleSubmit } = useForm();
  const errors = mergeErrors(serverState.errors, formState.errors);
  const { isOpen, openModal, closeModal } = useModal()

  if (serverState.succeeded) {
    openModal()
    return (
      <div>
        {/* <h1>Merci !</h1> */}
        <Modal
          isOpen={isOpen}
          handleClose={closeModal}
        >
          <header>
            <h1 className="text-3xl">Merci pour votre message !</h1>
            <p className="mt-4">J'y réponds dès que possible.</p>
          </header>

        </Modal>
      </div>
    )
  }

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit(sendToFormspree)}
        // onSubmit={() => {
        //   handleSubmit(sendToFormspree),
        //     openModal
        // }}

        className="flex flex-col mx-auto bg-myBlue w-full px-8 py-4 sm:max-w-xl sm:p-4"
      >

        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-left text-white">Prénom</label>

          <input
            id="firstName"
            {...register("firstName", {
              required: true,
              minLength: 2,
              maxLength: 20,
              pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
            })}
            className="text-black p-2 mb-4"
          />
          {/* server side firstName validation by Formspree */}
          {errors.firstName && <p>{errors.firstName.message}</p>}

          {/* firstName validation by react-hook-form */}
          <div className="text-white bg-red-700 -mt-4">
            {errors?.firstName?.type === "required" && (
              <p>
                Ce champs doit être rempli
              </p>
            )}
            {errors?.firstName?.type === "maxLength" && (
              <p>
                Ne doit pas excéder 20 caractères
              </p>
            )}
            {errors?.firstName?.type === "minLength" && (
              <p>
                Il doit y avoir moins 2 caractères
              </p>
            )}
            {errors?.firstName?.type === "pattern" && (
              <p >
                Caractères alphabétiques uniquement
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-left text-white mt-4">Nom</label>

          <input
            id="lastName"
            {...register("lastName", {
              required: true,
              minLength: 2,
              maxLength: 20,
              pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
            })}
            className="text-black p-2 mb-4"
          />
          {/* server side lastName validation by Formspree */}
          {errors.lastName && <p>{errors.lastName.message}</p>}

          {/* lastName validation by react-hook-form */}
          <div className="text-white bg-red-700 -mt-4">
            {errors?.lastName?.type === "required" && (
              <p>
                Ce champs doit être rempli
              </p>
            )}
            {errors?.lastName?.type === "maxLength" && (
              <p>
                Ne doit pas excéder 20 caractères
              </p>
            )}
            {errors?.lastName?.type === "minLength" && (
              <p>
                Il doit y avoir moins 2 caractères
              </p>
            )}
            {errors?.lastName?.type === "pattern" && (
              <p >
                Caractères alphabétiques uniquement
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-left text-white mt-4">Email</label>
          <input
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[\w._-]+@[\w-]+\.[a-z]{2,4}$/g,
            })}
            className="text-black p-2 mb-4"
          />
          {/* server side email validation by Formspree */}
          {errors.email && <p>{errors.email.message}</p>}

          {/* email validation by react-hook-form */}
          <div className="text-white bg-red-700 -mt-4">
            {errors?.email?.type === "required" && (
              <p>Ce champs doit être rempli</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p>Votre adresse Email est invalide</p>
            )}
          </div>

        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-left text-white mt-4">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="7"
            {...register("message", {
              required: true
            })}
            className="text-black p-2 mb-4"
          ></textarea>
          {/* {errors?.message?.type === "rows" && (
          <p className="pErrorlogin text-red-700">Vous avez dépassé la limite de texte</p>
        )} */}

          <div className="messageError">
            {errors?.message?.type === "required" && (
              <p className="text-white bg-red-700 -mt-4">Veuillez écrire un message</p>
            )}
          </div>
        </div>

        <div className="text-white mt-4 mx-auto px-6 py-1 ring-1 ring-white hover:bg-rose-700">
          <input
            type="submit"
            disabled={
              Object.keys(formState.errors).length || serverState.submitting
            }
          />
          {errors.form && <p>{errors.form.message}</p>}
        </div>

        {/* <Modal
          isOpen={isOpen}
          handleClose={closeModal}
        >
          <header>
            <h1 className="text-3xl">Merci pour votre message !</h1>
            <p className="mt-4">J'y réponds dès que possible.</p>
          </header>
        </Modal> */}

      </form>
    </div>
  )
}