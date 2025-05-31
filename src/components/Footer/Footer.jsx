import React from 'react'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();


return(
    <footer>
        <div className='footer'>
        <p>Copyright @ {currentYear}, Cryptoplace - All Right Reserved.</p>
        </div>
    </footer>
)
}
export default Footer