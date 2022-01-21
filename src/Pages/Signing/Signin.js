import React from "react";
import './Signin.css';
import { login } from '../../Service/service'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;


export default function Signin() {
    let history = useHistory()
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({ emailborder: false, passwordborder: false })
    const [regexhelpertext, setregexhelpertext] = React.useState({ emailhelpertext: "", passwordhelpertext: "" })

    const Email = (e) => {
        setEmail(e.target.value);
    }
    const Password = (e) => {
        setPassword(e.target.value);
    }
    const submit = async() => {
        if (email === "" && password === "") {
            setregexobj({ ...regexobj, emailborder: true, passwordborder: true })
            setregexhelpertext({ ...regexhelpertext, emailhelpertext: "Enter a correct email", passwordhelpertext: "Enter a correct password" })
        }
        else {
            let emailtest = emailRegex.test(email)
            let passwordtest = passRegex.test(password)
            if (emailtest) {
                setregexobj(regexobj => ({ ...regexobj, emailborder: false }))
                setregexhelpertext({ ...regexhelpertext, emailhelpertext: "" })
            }
            else {
                setregexobj(regexobj => ({ ...regexobj, emailborder: true }))
                setregexhelpertext({ emailhelpertext: "Enter a correct Email" })
            }
            if (passwordtest) {
                setregexobj(regexobj => ({ ...regexobj, passwordborder: false }))
                setregexhelpertext({ ...regexhelpertext, passwordhelpertext: "" })
            }
            else {
                setregexobj(regexobj => ({ ...regexobj, passwordborder: true }))
                setregexhelpertext({ ...regexhelpertext, passwordhelpertext: "Enter a correct password" })
            }
            if (emailtest === true && passwordtest === true) {
                let obj = {
                    "email": email,
                    "password": password
                }
               let res = await login(obj)
               try{
                if(!res){
                    console.log(res)
                }else if(res){
                    console.log(res.data)
                    localStorage.setItem("token",res.data.response.token)
                    localStorage.setItem("id",res.data.response.id)
                    history.push("/Dashboard")
                }
                    console.log(obj);
               }
               catch(error){
                   console.log(error)
               }    
            }
        }
    }   

    return (
        <div className="Box-class">
            <div className="form-class">
                <div className='google'>
                    <span className='first'>G</span>
                    <span className='second'>o</span>
                    <span className='third'>o</span>
                    <span className='four'>g</span>
                    <span className='five'>l</span>
                    <span className='Six'>e</span>
                </div>
                <div className='sign'>
                    <h2>Sign In</h2>
                </div>
                <div className='account-text'>
                    <h5>Use Your Account Here</h5>
                </div>
                <div className='email1'>
                    <TextField id="Email" onChange={Email} helperText={regexhelpertext.emailhelpertext} error={regexobj.emailborder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                    <TextField id="password" onChange={Password} helperText={regexhelpertext.passwordhelpertext} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Use to Login in privately</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id="GFG" href='SignIn.css'> Create New Account</a></h2>
                    <div className='btm'>
                        <Button onClick={submit} variant="contained">login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}