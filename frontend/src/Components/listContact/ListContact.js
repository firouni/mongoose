import React, { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {fetchContacts} from '../../APIs/contact'
import {setContact} from '../../Store/contactSlice'
import CardContact from './CardContact'

const ListContact = () => {
  //redux part
  const contact = useSelector(state => state.contact)
  console.log(contact,'contact after link with DB')
  //data import part
const dispatch = useDispatch()
const getContact = async()=>{
  const data = await fetchContacts()
  dispatch(setContact(data.cnt))
}

useEffect(()=>{
  getContact()
},[])

  return (
    <div >
      {
        contact.map((e)=> <CardContact users={e} getContact={getContact}  /> )
      }
    </div>
  )
}

export default ListContact