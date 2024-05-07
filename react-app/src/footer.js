import React from 'react'

const Footer = () => {
const year=new Date();
  return (
    <footer>  
      <div>coppyright &copy; {year.getFullYear()}</div>
       
    </footer>
  )
}

export default Footer;