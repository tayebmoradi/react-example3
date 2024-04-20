import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function Edit({handelAdd}) {

  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => { setIsOpen(true) }

  // Function to Close the modal
  const closeModal = () => { setIsOpen(false) }

  return (
    <div className="App">
      <PencilSquareIcon className='h-6 w-6 shrink-0'/>
      <Modal isOpen={isOpen} onClose={closeModal} handelAdd={handelAdd} />
    </div>
  )
}