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

    const [userNameColor, setUserNameColor] = useState ('')
    const [emailColor, setEmailColor] = useState ('')
    const [passwordColor, setPasswordColor] = useState ('')
    const [confirmedPasswordColor, setConfirmedPasswordColor] = useState ('')

    const validateForm = (e) => {
        e.preventDefault()
        if (userName.length > 8){
            setErrorUserName('')
            setUserNameColor('green')
        }else{
            setErrorUserName('Please enter more than 8 letters')
            setUserNameColor('red')
        }
        if (email.includes('@')){
            setErrorEmail('')
            setEmailColor('green')

        }else{
            setErrorEmail('Please enter email address')
            setEmailColor('red')
        }
        if (password.length >8) {
            setErrorPassword('')
            setPasswordColor('green')
        }else{
            setErrorPassword('Please enter 8-letter password')
            setPasswordColor('red')
        }
        // be careful!!!  "" is not the same as " "
        if (confirmedPassword != "" && confirmedPassword === password) {
            setErrorConfirmedPassword('')
            setConfirmedPasswordColor('green')
        }else{
            setErrorConfirmedPassword('Password is incorrect')
            setConfirmedPasswordColor('red')
        }
    }    
    
    return (
        <div className="container">
            <form className="form" onSubmit={validateForm}>
                <h2>Registration Form</h2>
                <div className="form-control">
                    <label>User</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="text" value={confirmedPassword} onChange={(e)=>setConfirmedPassword(e.target.value)} style={{borderColor:confirmedPasswordColor}}/>
                    <small style={{color:confirmedPasswordColor}}>{errorConfirmedPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default FormComponent