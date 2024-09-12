import React, { useState } from 'react'
import { client } from '../client'
import toast from 'react-hot-toast'
const AddTopic = () => {
  const [text, setText] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    client.create({
      _type: 'topics',        // Document type
      topic: text // The data you're inserting
    }).then((res) => {
      setText('')
      toast.success('Add topic succesfully')
    })
    .catch((err) => {
      toast.error('There\'s an error')
    });
  }
  return (
    <div className='container m-auto'>
      <form onSubmit={handleSubmit} className='flex justify-center py-10'>
      <input 
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='w-1/2 p-2 border border-black rounded-md'
        placeholder='Add more topic...'
      />
      <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Add Topic </button>
      </form>
    </div>
  )
}

export default AddTopic
