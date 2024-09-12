import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { client } from '../client';
import toast from 'react-hot-toast';

const Topic = ({ topic, index, id }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    client.delete(id)
  .then((res) => {
    toast.success("Delete Topic Successfully")
  })
  .catch((err) => {
    console.error('Error deleting document:', err);
  });
  }

  return (
    <tr>
      <td className='p-2 border border-dark-50'>{index + 1}</td>
      <td className='p-2 border border-dark-50'>{topic.topic}</td>
      <td className='p-2 border border-dark-50 hover:cursor-pointer'><button onClick={(e) => handleDelete(e)}><FaRegTrashCan /></button></td>
    </tr>
  )
}

export default Topic
