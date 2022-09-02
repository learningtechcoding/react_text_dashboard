import React from 'react'

const Formdatacard = (props) => {
  return (
    <>
    
    <tr>
    <td>{props.formdata}</td>
    <td>{props.formdatacontact}</td>
    <td>{props.formdatacountry}</td>
    </tr>
    </>
  )
}

export default Formdatacard
