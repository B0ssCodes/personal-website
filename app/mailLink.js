'use client'
import React from 'react'

export default function MailLink() {
  return (
    <div  className="mailLink" onClick={(e) => {window.location.href ='mailto:info@jadsader.com';}}>
         <h2>
          info@jadsader.com
          </h2> 
          </div>
  )
}
