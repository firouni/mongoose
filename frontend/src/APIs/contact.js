import axios from 'axios';

export const fetchContacts = async()=>{
    const {data} = await axios.get('localhost:5000/api/user/getuser')
    return data
}

export const PostContact =async (values)=>{
    const addContact = await axios.post('localhost:5000/api/user/adduser', {...values})
}

export const updateContact =async (id,values)=>{
    const updContact = await axios.put(`localhost:5000/api/user/upduser/${id}`, {...values})
}

export const deleteContact =async (id)=>{
    const delContact = await axios.delete(`localhost:5000/api/user/deletuser/${id}`)
}

export const getUniqueUser =async (id,values)=>{
    const {data} = await axios.post(`localhost:5000/api/user/getuser/${id}`, {...values})
    return data
}