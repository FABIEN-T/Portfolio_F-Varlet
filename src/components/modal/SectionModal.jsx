import { useState } from "react"
import Modal from './Modal'
import useModal from "./useModal"

export default function SectionModal() {
    const { isOpen, openModal, closeModal } = useModal()

    return (
        <div className='bg-red-500 mt-32 max-w-xs'>    
            <Modal 
                isOpen={isOpen} 
                handleClose={closeModal}
            >
                <header>
                    <h1 className="text-3xl">Merci pour votre message !</h1>
                    <p className="mt-4">J'y réponds dès que possible.</p>
                </header>
            </Modal>
            <button
                type="button"
                onClick={openModal}
                className="p-6"
            >
                Open modal
            </button>
        </div>           
    )
}