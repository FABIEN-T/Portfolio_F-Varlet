import React from "react";
import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";

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

  if (serverState.succeeded) {
    openModal()
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
    <div className="App">
      <form onSubmit={handleSubmit(sendToFormspree)}>
        <div>
          <label htmlFor="lastName">Name</label>

          <input
            id="lastName"
            {...register("lastName", {
              required: true,
              minLength: 2,
              maxLength: 20,
              pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
            })}
          />
          {/*{errors.lastName && <p>{errors.lastName.message}</p>}*/}
          <div className="inputNameError">
            {errors?.lastName?.type === "required" && (
              <p className="text-red-700 pErrorName pLastName">
                This field is required
              </p>
            )}
            {errors?.lastName?.type === "maxLength" && (
              <p className="text-red-700 pErrorName pLastName">
                cannot exceed 20 characters
              </p>
            )}
            {errors?.lastName?.type === "minLength" && (
              <p className="text-red-700 pErrorName pLastName">
                mini 2 characters
              </p>
            )}
            {errors?.lastName?.type === "pattern" && (
              <p className="text-red-700 pErrorName pLastName">
                Alphabetical characters only
              </p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="emailField"
            {...register("email", {
              required: true,
              pattern: /^[\w._-]+@[\w-]+\.[a-z]{2,4}$/g,
            })}
          />
          <div className="inputError">
            {errors?.email?.type === "required" && (
              <p className="text-red-700">This field is required</p>
            )}
            {errors?.email?.type === "pattern" && (
              <p className="text-red-700">Email invalid</p>
            )}
          </div>
          {/* server side email validation by Formspree */}
          {/*{errors.email && <p>{errors.email.message}</p>}*/}
        </div>

        <div>
          <input
            type="submit"
            disabled={
              Object.keys(formState.errors).length || serverState.submitting
            }
          />
          {errors.form && <p>{errors.form.message}</p>}
        </div>
      </form>
    </div>
  );
}




// import { useForm } from "react-hook-form";
// import { useForm as useFormspree } from "@formspree/react"
// import Modal from './modal/Modal'
// import useModal from "./modal/useModal"



// export default function MyFormEss() {
//   const { isOpen, openModal, closeModal } = useModal()
//   const [state, sendToFormspree, reset] = useFormspree('myyqnrab')
//   const { register, formState, handleSubmit } = useForm()
//   const errors = formState.errors

//   function mergeErrors(formspreeErrors, otherErrors = {}) {
//     console.log("formspreeErrors", formspreeErrors)
//     // merge server side errors into react-hook-form errors
//     return {
//       ...formspreeErrors?.reduce(
//         (acc, cur) => ({
//           [cur.field || "form"]: {
//             message: (cur.field ? "This " : "") + cur.message
//           },
//           ...acc
//         }),
//         {}
//       ),
//       ...otherErrors
//     };
//   }


//   if (state.succeeded) {
//     // return <div>Thank you for signing up!</div>;
//     openModal()
//     console.log(isOpen)
//     return (
//       <Modal
//         isOpen={isOpen}
//         handleClose={closeModal}
//       >
//         <header>
//           <h1 className="text-3xl">Merci pour votre message !</h1>
//           <p className="mt-4">J'y réponds dès que possible.</p>
//         </header>
//       </Modal>)
//   }


//   return (
//     <form
//       onSubmit={handleSubmit(sendToFormspree)}
//       action="https://formspree.io/f/myyqnrab"
//       method="POST"
//       className="flex flex-col"
//     >
//       {/* <div className="flex flex-col"> */}
//       <label htmlFor="lastName" className="text-left text-black">
//         Nom
//       </label>

//       <input
//         type="text"
//         name="lastName"
//         id="lastName"
//         // {...register("name")}
//         {...register('lastName', {
//           required: true,
//           minLength: 2,
//           maxLength: 20,
//           pattern: /^[a-zA-Z\s\-À-ÖØ-öø-ÿ']+$/g,
//         })}
//         required
//         autoComplete="family-name"
//         className="border-black border-2 text-black p-2 mb-4"
//       ></input>
//       <div className="inputNameError">
//         {errors?.lastName?.type === 'required' && (
//           <p className="text-red-700 pErrorName pLastName">This field is required</p>
//         )}
//         {errors?.lastName?.type === 'maxLength' && (
//           <p className="text-red-700 pErrorName pLastName">
//             Cannot exceed 20 characters
//           </p>
//         )}
//         {errors?.lastName?.type === "minLength" && (
//           <p className="text-red-700 pErrorName pLastName">
//             mini 2 characters
//           </p>
//         )}
//         {errors?.lastName?.type === 'pattern' && (
//           <p className="text-red-700 pErrorName pLastName">
//             Alphabetical characters only
//           </p>
//         )}
//       </div>
//       {/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
//       {/* <ValidationError
//         field="secondName"
//         prefix="Nom"
//         errors={state.errors}
//       /> */}
//       {/* </div> */}

//       <label htmlFor="email">Email</label>

//       <input
//         id="email"
//         {...register("email", {
//           required: "true",
//           pattern: /^[\w._-]+@[\w-]+\.[a-z]{2,4}$/g,
//         })}
//         type="email"
//         name="email"
//         className="text-black p-2 mb-4 border-black border-2" />
//       <div className="inputEmailError">
//         {errors?.email?.type === "required" && (
//           <p className="pErrorlogin text-red-700">This field is required</p>
//         )}
//         {errors?.email?.type === "pattern" && (
//           <p className="pErrorlogin text-red-700">Email invalid</p>
//         )}
//       </div>
//       {/* <ValidationError field="email" prefix="Email" errors={state.errors} /> */}

//       {/* <label htmlFor="message" className="text-left">
//         Message
//       </label>
//       <textarea
//         rows="7"
//         name="message"
//         id="message"
//         required
//         className="text-black p-2 mb-4 border-black border-2"
//       ></textarea> */}
//       {/* <ValidationError
//         field="message"
//         prefix="Message"
//         errors={state.errors}
//       /> */}

//       <div>
//         <input
//           type="submit"
//           // disabled={state.submitting}
//           // onClick={handleSubmit()}
//           disabled={
//             Object.keys(formState.errors).length || state.submitting
//           }
//           onClick={() => {
//             handleSubmit,
//               openModal(),
//               console.log("après openModale")
//           }
//           }
//           className='border-black border-2'/>
//           Sign up
//       </div>

//       {/* <Modal
//         isOpen={isOpen}
//         handleClose={closeModal}
//       >
//         <header>
//           <h1 className="text-3xl">Merci pour votre message !</h1>
//           <p className="mt-4">J'y réponds dès que possible.</p>
//         </header>
//       </Modal> */}

//     </form>
//   )
// }