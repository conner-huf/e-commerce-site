import React from 'react'
import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers in your Email!</h1>
        <p>Subscribe to stay updated!</p>
        <div>
            <input type="email" placeholder="Your Email here" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
