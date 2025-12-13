import React, { useEffect, useState } from 'react'
export default function App() {
  const [message, setMessage] = useState('Loading...')
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => setMessage('Error: ' + err.message))
  }, [])
  return (<div style={{ fontFamily: 'sans-serif', padding: 24 }}>
    <h1>React + Spring Boot</h1>
    <p>{message}</p>
  </div>)
}
