import React from 'react'

const Modal = ({isOpen, onClose}) => {
  return (
    <div>
      <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '': 'hidden'}`}>
        <div className='modal-container'>
          <div className='text-center bg-indigo-700 p-5 h-96 lg:w-[500px] rounded shadow-md'>
            <h2 className='text-xl font-semibold mt-6 mb-5 uppercase'>Please Log in Here</h2>
            <form className='px-4' action="">
              <div>
                <input type='email' name='email' id='email' placeholder='example@gmail.com'
                className='w-full rounded-md border border-white bg-white py-3 px-6  text-base font-medium text-gray-500 outline-none focus:border-blue-400 focus:shadow-md'></input>
              </div><br></br>
              <div>
                <input type='password' name='password' id='password' placeholder='Enter your Password'
                className='w-full rounded-md border border-white bg-white py-3 px-6  text-base font-medium text-gray-500 outline-none focus:border-blue-400 focus:shadow-md'></input>
              </div><br></br>
              <div>
                <button className='hover:shadow-md rounded-md py-3 bg-blue-500 px-8 text-base font-semibold text-white hover:bg-orange-600'>
                  Log in
                </button>
              </div>
            </form>
            <button onClick={onClose} className='hover:bg-gray-400 font-semibold text-black py-2 px-8 rounded bg-gray-300 inline-flex items-center mt-5'>
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal