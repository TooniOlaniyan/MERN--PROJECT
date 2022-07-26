import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login , reset } from '../features/auth/authSlice'
import Loader from '../component/Loader'


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user , isError , isSuccess , message , isLoading} = useSelector((state) => state.auth)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData
  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
  
    if(isSuccess || user){
      navigate('/')
    }
    dispatch(reset())
  }, [isError , isSuccess , user , message , dispatch , navigate ])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if(isLoading){
    return <Loader/>
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
