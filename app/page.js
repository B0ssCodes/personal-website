import Image from 'next/image'
import React from 'react'
import MailLink from './mailLink'
import ConstructionImage from '../public/websiteUnderConstruction.png'
export default function Home() {
  return (
    <div className="wholeBody">
      <div className="title">
      <h1> Personal Website in the works...
        </h1>
        </div>
        <Image className="constructionImage" src={ConstructionImage} width={512} height={512}/>
        <div className="contactInfo">
        <h2>
          Feel free to contact me: 
        </h2>
        <MailLink />   
        </div>
         </div>
  
  )
}
