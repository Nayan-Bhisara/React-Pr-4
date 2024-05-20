import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form = () => {
    const [input,setInput]=useState([
        {id : "",name : "",phone : "",salary : ""},
    ]);

    const addmore=()=>{
        let newfild = {id : Date.now(),name : "", phone : "",salary : ""}
        setInput([...input,newfild])
    }

    const removefild=(id)=>{
        setInput(input.filter(val => val.id != id))
    }
  return (
    <div className='form' align="center">
        <h1 style={{marginTop:"30px",marginBottom:"40px"}}>Dynamic Form</h1>
        <table class="table">
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th scope="col"><h2>Full Name</h2></th>
                    <th scope="col"><h2>Email Address</h2></th>
                    <th scope="col"><h2>Salary</h2></th>
                    <th scope="col">
                        <button className='btna border border-success' onClick={() => addmore()} style={{backgroundColor:"white",width:"46px",height:"46px",borderRadius:"4px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512"><path fill="#008000" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                            </button>
                        </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                {
                    input.map((item,index)=>{
                        return(
                                
                            <tr style={{textAlign:"center"}}>
                                <td><input className='input' type="text" placeholder='Enter Youre Name' style={{height:"40px"}}/></td>
                                <td><input className='input' type="text" placeholder='Enter Youre Email' style={{height:"40px"}}/></td>
                                <td><input className='input' type="number" placeholder='Enter Youre Salary In Rs.' style={{height:"40px"}}/></td>
                                {
                                    index === 0 ? "" : <button className='btn' onClick={()=>removefild(item.id)} style={{border:"1px solid red",width:"46px",height:"46px",borderRadius:"4px"}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 384 512"><path fill="#ff0000" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
                                        </button>
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Form