import "./FormComponent.css"
import { useState } from "react"

const FormComponent = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState ('')
    const [confirmedPassword, setConfirmedPassword] = useState ('')
    
    
    const [errorUserName, setErrorUserName] = useState ('')
    const [errorEmail, setErrorEmail] = useState ('')
    const [errorPassword, setErrorPassword] = useState ('')
    const [errorConfirmedPassword, setErrorConfirmedPassword]= useState ('')

    const validateForm = (e) => {
        e.preventDefault()
        if (userName.length > 8){
            setErrorUserName('')
        }else{
            setErrorUserName('Please enter more than 8 letters')
        }
        if (email.includes('@')){
            setErrorEmail('')
        }else{
            setErrorEmail('Please enter email address')
        }
        if (password.length >8) {
            setErrorPassword('')
        }else{
            setErrorPassword('Please enter 8-letter password')
        }
        if (confirmedPassword.length > 8) {
            setErrorConfirmedPassword('')
        }else{
            setErrorConfirmedPassword('Please confirm password')
        }
    }
    
    
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Registration Form</h2>
                <div className="form-control">
                    <label>User</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                    <small>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <small>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <small>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="text" value={confirmedPassword} onChange={(e)=>setConfirmedPassword(e.target.value)}/>
                    <small>{errorConfirmedPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default FormComponent