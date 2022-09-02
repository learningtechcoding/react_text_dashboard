import React from 'react'
import { useState } from 'react';
import './home.css'
const EnterForm = (props) => {

    const [messagered,setmessagered]=useState("");
    const [messagesucces,setmessagesuccess]=useState("");

    const submithandler=(eve)=>{
        eve.preventDefault();

        setTimeout(() => {
            setmessagered("");
        }, 2000);
        setTimeout(() => {
            setmessagesuccess("");
        }, 2000);

        if(company.length===0){
            setmessagered("required all field");
        }
        else  if(contact.length===0){
            setmessagered("required all field");
        }
        if(country.length===0){
            setmessagered("required all field");
        }
        else{
             setmessagesuccess("submit successfully");

             const data={
                title:company,
                numb:contact,
                pak:country
             }

             props.eneterddata(data);
            
             
        setcompany('');
        setcontact('');
        setcountry('');
        }



 
    }


const [company,setcompany]=useState("");
    const changecompany=(eve)=>{
        setcompany(eve.target.value);
    }
    const [contact,setcontact]=useState("");
    const changecontact=(eve)=>{
        setcontact(eve.target.value);
    }
    const [country,setcountry]=useState("");
    
    const changecountry=(eve)=>{
        setcountry(eve.target.value);

    }
    
    

  return (
  <>
  <div className="rightContainer"> 
              <div className="dbControls">
                <form action=""  onSubmit={submithandler}> 

                    <input type="text"   placeholder='Company' onChange={changecompany}    value={company}   className="dbDrpdown"  style={{float:"left",width:"190px"}} />
                    <input type="text"   placeholder='Contact' onChange={changecontact}  value={contact}   className="dbDrpdown"  style={{float:"left",width:"190px"}} />
                    <input type="text"    placeholder='Country'  onChange={changecountry} value={country}   className="dbDrpdown"  style={{float:"left",width:"190px"}} />
                    <input type="submit" className="btnSubmit" value="Submit" id="btnSubmit" />
                      <label htmlFor="">this is form</label> 
                    <h6 style={{color:'red',height:'10px'}}>{messagered}</h6>
                    <h6 style={{color:'blue',height:'10px'}}>{messagesucces}</h6>


                    </form>
            </div>
            </div>
            
  </>
  )
}

export default EnterForm
