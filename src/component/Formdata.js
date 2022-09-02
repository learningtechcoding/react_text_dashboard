import React from 'react'
import Formdatacard from './Formdatacard'

const Formdata = (props) => {
  return (
    <div>
<div className="rightContainer">
    <div className="dbViewDisplayArea">
        <h2>Enterd Form Data</h2>
    </div>
    <table>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>


<tbody> 
    {
    props.dummy.map(
        dataset=>(
            <Formdatacard 
        formdata={dataset.title}
        formdatacontact={dataset.numb}
        formdatacountry={dataset.pak}
        />

        )
    )
        }
        
        </tbody>
        

    </table>
</div>

    </div>
  )
}

export default Formdata
