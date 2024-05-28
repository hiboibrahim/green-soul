import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Socials = () => {
  return (
    <div classname='socials'>
        <FaFacebook classname='icon facebook'  style={{ height: 25, width: 25 }} />
        <FaInstagram classname='icon instagram' style={{ height: 25, width: 25 }} />
        <FaTwitter classname='icon twitter'  style={{ height: 25, width: 25 }} />
    </div>
  )
}

export default Socials