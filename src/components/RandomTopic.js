import React, { useEffect, useState } from 'react'
import { client } from '../client';
const RandomTopic = () => {

  function getRandomIntInclusive(max) {
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0 + 1) + 0);
  }

  const [topic, setTopic] = useState('')
  const [topicsList, setTopicsList] = useState([])

  useEffect(() => {
    client.fetch('*[_type == "topics"]{topic}')
      .then((data) => {
        setTopicsList(data)
        setTopic(data[getRandomIntInclusive(data.length - 1)].topic)
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, [])

  const handleGenerate = () => {
    setTopic(topicsList[getRandomIntInclusive(topicsList.length - 1)].topic)
  }

  return (
    <div className='container py-10 m-auto text-center '>
      <h2 className='mb-4 text-lg font-bold text-red-600'>{topic}</h2>
      <button
        onClick={handleGenerate}
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >Generate
      </button>
    </div>
  )
}

export default RandomTopic
