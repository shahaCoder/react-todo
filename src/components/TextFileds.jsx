import * as React from 'react'; 
import TextField from '@mui/material/TextField';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { MdVisibilityOff } from 'react-icons/md';
import Visibility from '@mui/icons-material/Visibility';
import { useState, useEffect } from 'react';


export default function TextFileds({setIsAuth}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }; 
        const [dis, setDis] = useState(true)
        const [name, setName] = useState('')
        const [nameOut, setNameOut] = useState(false)
        const [nameError, setNameError] = useState('This Field can not be empty!')
        // email
        const [email, setEmail] = useState('')
        const [emailOut, setEmailOut] = useState(false)
        const [emailError, setEmailError] = useState('This Field can not be empty!')
        // password 
        const [password, setPassword] = useState('')
        const [passwordOut, setPasswordOut] = useState(false)
        const [passwordError, setPasswordError] = useState('This Field can not be empty!')
        const [errored, setErrored] = useState(false)
        const blureHandler = (e) => {
          if(e.target.name === 'name'){
            setNameOut(true)
            console.log(errored);
          } else if(e.target.name === 'email'){
            setEmailOut(true)
          } else if(e.target.name === 'password'){
            setPasswordOut(true)
          }
        }
        const inpValuehandler = (e) => {
          setName(e.target.value)
          const regex = /^[a-zA-Z\S]+$/
          if(!regex.test(String(e.target.value).toLowerCase())){
            setNameError('The name is invalid!')
          } else {
            setNameError('')
            setNameOut(false)
          }
         }
         const inputEmailHandler = (e) => {
          setEmail(e.target.value)
          const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          if(!regex.test(String(e.target.value).toLowerCase())){
            setEmailError('The email is invalid!')
          } else {
            setEmailError('')
          }
         }
         const inputPasswordHandler = (e) => {
          setPassword(e.target.value)
          const regex = /^[A-Za-z]\w{7,14}$/
          if(!regex.test(String(e.target.value).toLowerCase())){
            setPasswordError('The password is invalid!')
            setErrored(true)
          } else {
            setPasswordError('')
          }
         }
          useEffect(() => {
            if(!name){
              setDis(true)
            }
             else {
              if(!nameError && !emailError && !passwordError){
                setDis(false)
              } else {
                setDis(true)
              }
            } 

            if(!email){
              setDis(true)
            }
            if(!password){
              setDis(true)
            }
          }, [name, email, password, nameError, emailError, passwordError]);
     function getData(e) {
      e.preventDefault()
      let obj = {
        id: uuidv4()
      }
        let fm = new FormData(e.target) 
        fm.forEach((value,key) =>{
              obj[key] = value
          })
          localStorage.setItem('register-data', JSON.stringify(obj))
          if(!name){
          } else if(!email){
          } else if(!password){
          } else {
            if(!nameError && !emailError && !passwordError){
              setIsAuth(true)
            }
          }
     }
  return (
      <div>
            <form onSubmit={getData}>
            <div className='reg-inps'>
        <TextField
            sx={{width: 365}}
            type="text" 
            id="outlined-basic"
            label="Name*"
            name='name'
            autoComplete='name' 
            onChange={e => inpValuehandler(e)}
            value={name}
            onKeyUp={(e) => blureHandler(e)}
            />
            {(nameOut && nameError) && <p className='invalid-text' style={{color: 'red'}}>{nameError}</p>}
        <TextField
        sx={{width: 365}}
          id="outlined-error-helper-text"
          label="Last Name"
          name='lastName'
          autoComplete='lastname'
        />
        <TextField
        sx={{width: 365}}
          id="outlined-error2"
          label="Email*"
          name='email'
          type='email'
          autoComplete='email'
          value={email}
          onChange={e => inputEmailHandler(e)}
          onKeyUp={e => blureHandler(e)}
        />
        {(emailOut && emailError) && <p className='invalid-text' style={{color: 'red'}}>{emailError}</p>}
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password*</InputLabel>
          <OutlinedInput
          sx={{width: 365}}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            autoComplete='password'
            name='password'
            value={password}
            onChange={e => inputPasswordHandler(e)}
            // onBlur={e => blureHandler(e)}
            onKeyUp={e => blureHandler(e)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password*"
          />
        </FormControl>
        {(passwordOut && passwordError) && <p className='invalid-text' style={{color: 'red'}}>{passwordError}</p>}
        <Button 
        disabled={dis}
        variant="contained"
         sx={{width: 365}} 
        type='submit'>Register</Button>
        </div>
      </form>
      </div>
  );
}