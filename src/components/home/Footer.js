import React from 'react'

const Footer = (props) => {
  var teacher = 'NIOMIC'
  return (
    <div>
      <h4>Halaman Footer {props.name}</h4>
      <p>@ {props.tahun}</p>
      <i>by {teacher}</i>
    </div>
  )
}

export default Footer;