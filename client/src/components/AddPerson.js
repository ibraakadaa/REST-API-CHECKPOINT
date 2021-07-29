import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addPerson } from '../actions/peopleActions';
const AddPerson = () => {
    const [personInfo, setPersonInfo] = useState({
     
    });
    const dispatch = useDispatch()
    const handleChange =(e)=>{
        if(e.target.name==="age")
    setPersonInfo({...personInfo,[e.target.name]:Number(e.target.value)})
    else 
    setPersonInfo({...personInfo,[e.target.name]: e.target.value})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addPerson(personInfo)) 
        console.log(personInfo)
    }
    return (
        <div>
            <form>
                <input type='text' placeholder='fname' name='fname' onChange={handleChange}/>
                <input type='text' placeholder='lname' name='lname' onChange={handleChange}/>
                <input type='text' placeholder='email' name='email' onChange={handleChange}/>
                <input type='text' placeholder='age' name='age' onChange={handleChange}/>
                <input type='text' placeholder='password' name='password' onChange={handleChange}/>
                <button  onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}  

export default AddPerson
