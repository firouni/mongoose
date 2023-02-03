import React from 'react'
import "./cardContact.css"
import { useNavigate } from 'react-router';
import {deleteContact} from '../../APIs/contact'

function CardContact({users,getContact}) {
  const navigate = useNavigate()
  const navUpd =()=>{
    navigate(`/upduser/${users._id}`)
  }
  return (
    <div className="cards">
    <div className="card">
      <h3 className="card-title">{users.name}</h3>
      <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt=""/>
      <span className='age'>{users.age}</span>
      <span className='add'>{users.adress}</span>
      <span className='mail'>{users.email}</span>

      <a ><button onClick={()=>navUpd()}>Update</button></a>
      <a ><button  onClick={async()=>{await deleteContact(users._id);getContact()}} >Delete</button></a>
    </div>
    </div>
  )
}

export default CardContact