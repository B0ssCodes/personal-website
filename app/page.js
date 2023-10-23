import Image from 'next/image'
import React from 'react'
import MailLink from './mailLink'
import ConstructionImage from '../public/websiteUnderConstruction.png'
export default function Home() {
  return (
    <div>
      <h1> Personal Website in the works...
        </h1>
        <Image src={ConstructionImage} width={512} height={512}/>
        <h2>
          Feel free to contact me: 
        </h2>
        <MailLink />   
         </div>
  
  )
}
