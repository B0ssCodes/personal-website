'use client'
import React from 'react'

export default function Home() {
  return (
    <div>
      <h1> Personal Website in the works...
        </h1>
        <h2>
          Contact me: 
        </h2>
        <div  className="mailLink" onClick={(e) => {window.location.href ='mailto:info@jadsader.com';}}>
          <h2>
          info@jadsader.com
          </h2> </div>     
         </div>
  
  )
}
