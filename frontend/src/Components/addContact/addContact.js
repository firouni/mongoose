import React,{useState} from 'react';
import './addContact.css';
import {updateContact,PostContact} from '../../APIs/contact';
import { useNavigate,useParams } from 'react-router';

function AddContact() {
  const [name,setName]=useState('')
  const [age,setAge]=useState(0)
  const [adress,setAdress]=useState('')
  const [email,setEmail]=useState('')

  const navigate = useNavigate()
  const {id}= useParams()
const handeUpdat=async(id,values)=>{
await updateContact(id,values)
navigate('/list')
}
  const handelAdd =async(values)=>{
    await PostContact(values)
    navigate('/list')
  }

  return (
    <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Add Contact</label>
					<input type="text" placeholder="Enter name" required="" value={name} onChange={(e)=>setName(e.target.value)}/>
					<input type="number" placeholder="Age" required="" value={age} onChange={(e)=>setAge(e.target.value)}/>
					<input type="text" placeholder="Adress" required="" value={adress} onChange={(e)=>setAdress(e.target.value)}/>
					<input type="email" placeholder="Email" required="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <a><button onClick={()=>handelAdd({name,age,adress,email})} >Add New Contact</button></a>
				</form>
			</div>

			<div class="login">
      <form>
					<label for="chk" aria-hidden="true">Update Contact</label>
					<input type="text" placeholder="Enter name" required="" value={name} onChange={(e)=>setName(e.target.value)}/>
					<input type="number" placeholder="Age" required="" value={age} onChange={(e)=>setAge(e.target.value)}/>
					<input type="text" placeholder="Adress" required="" value={adress} onChange={(e)=>setAdress(e.target.value)}/>
					<input type="email" placeholder="Email" required="" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <a><button onClick={()=>handeUpdat(id,{name,age,adress,email})} >Update Contact</button></a>
				</form>
			</div>
	</div>
  )
}

export default AddContact