import axios from 'axios';
import { addArticleContext } from "../../context/addArticleContext"
import { useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';

export default function Modal ({ isOpen, onClose, handelAdd }) {
  
  const [inputArticle , setInputArticle] = useState('');

  const articles = useContext(addArticleContext);

  // Ref for the input element
  const inputRef = useRef(null)

  // Use effect to auto focus the input when the modal is opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const onInputNewArticleChangeHandler = (event) => {
    setInputArticle(event.target.value)
  }

  const addNewArticle = () =>{
      if(inputArticle != ""){
        AddArticle({title: inputArticle})
        setInputArticle('')
        onClose();
      }
  }
  
  const AddArticle = async (title) => {
      handelAdd(title)
      onClose();    
  };
     
  

   
    return (
      <>
        {isOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Add Article
                      </h3>
                      <div className="mt-2">
                        <div className="w-full flex">
                          <div className='col mr-5'>
                            <input 
                              value={inputArticle}
                              onChange={onInputNewArticleChangeHandler}
                              ref={inputRef}
                              type="text" 
                              name="title"
                              className="w-full text-gray-800 p-2 border rounded outline-none border-grey-600"
                            />     
                          </div>   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={addNewArticle}  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    SendData
                  </button>
                  <button onClick={onClose} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                  </button>
  
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    ); 
  };