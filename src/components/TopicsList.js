import React, { useState } from 'react'
import {useEffect } from 'react';
import { client } from '../client';
import Topic from './Topic';
const TopicsList = () => {
  const [topicsList, setTopicsList] = useState([])
console.log(topicsList)
  useEffect(() => {
    client.fetch('*[_type == "topics"]{_id, topic}')
      .then((data) => {
        setTopicsList(data)
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, [])

  return (
    <div className='container m-auto'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='p-2 border border-dark-50'>No</th>
            <th className='p-2 border border-dark-50'>Name</th>
            <th className='p-2 border border-dark-50'>Action</th>
          </tr>
        </thead>
       <tbody>
       {topicsList.map((topic, index) => 
         <Topic key={topic._id} index={index} id={topic._id} topic={topic}/>
        )}
       </tbody>
      </table>
    </div>
  )
}

export default TopicsList
