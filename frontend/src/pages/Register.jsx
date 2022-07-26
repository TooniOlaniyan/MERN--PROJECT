import React from 'react'
import {useState , useEffect} from 'react'
import {useNavigate} from'react-router-dom'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useDispatch , useSelector} from 'react-redux'
import {register , reset} from '../features/auth/authSlice'
import Loader from '../component/Loader'



function Register() {
  const [formData , setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name , email , password , password2} = formData
  
  const dispatch = useDispatch()

  const {user , isLoading, isError ,isSuccess ,  message} = useSelector(state=>state.auth)
  const navigate = useNavigate()

useEffect(()=>{
  if(isError){
    toast.error(message)
  }

  if(isSuccess || user){
    navigate('/')
  }
  dispatch(reset())
}, [isError , isSuccess , user , message , dispatch , navigate ])

  const handleChange = (e) => {
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(password !== password2){
      toast.error('Make sure password Matching')
    }
    else{
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  if(isLoading){
    return(
      <Loader/>
    )
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please Create an Account</p>
        <section className='form'>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" className="form-control" name= 'name' value={name} onChange={handleChange} placeholder='Enter your name' id='name'/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" name= 'email' value={email} onChange={handleChange} placeholder='Enter your email' id='email'/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name= 'password' value={password} onChange={handleChange} placeholder='Enter Password' id='password'/>
            </div>
            <div className="form-group">
              <input type="password" className="form-control" name= 'password2' value={password2} onChange={handleChange} placeholder='Confirm Password' id='password2'/>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submmit</button>
            </div>
          </form>
        </section>

      </section>
    </>
  )
}

export default Register