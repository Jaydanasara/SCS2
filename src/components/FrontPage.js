import React from 'react'
import "../components/frontpage.css"
import Navigation from "./Navigation"
export default function FrontPage() {
    return (
        <div className='frontContainer'>
            <Navigation/>
            <header className="App-header">
        <img src="./SCS.jpg"  className="App-logo" alt="logo" />
        <p className='welcome'>
         Welcome to Simone Cleaning Services
        </p>
      
       
        
      </header>
        </div>
    )
}
