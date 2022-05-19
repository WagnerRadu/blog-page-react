import React from 'react'

type Props = {
    previous: string;
    next: string;
}

export default function Footer({previous, next}: Props) {
  return (
    <div className='footer'>
        <button className="footer-button">{previous}</button>
        <button className="footer-button">{next}</button>
    </div>
  )
}