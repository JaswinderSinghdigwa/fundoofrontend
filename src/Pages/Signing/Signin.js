import React from "react";
import './Signin.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;


export default function Signin() {
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [regexobj, setregexobj] = React.useState({emailborder:false, passwordborder:false})
    const [regexhelpertext,setregexhelpertext]=React.useState({emailhelpertext:"",passwordhelpertext:""})
        
    const takeEmail = (e)=>{
       setEmail(e.target.value);
    }
    const takePassword = (e) =>{
        setPassword(e.target.value);
    }
    const submit = ()=>{
        if(email===""&& password===""){
            setregexobj({...regexobj,emailborder:true,passwordborder:true})
            setregexhelpertext({...regexhelpertext,emailhelpertext:"Enter a correct email",passwordhelpertext:"Enter a correct password"})
        }
        else{
            let emailtest=emailRegex.test(email)
            let passwordtest=passRegex.test(password)
            if(emailtest){
                setregexobj(regexobj=>({...regexobj,emailborder:false}))
                setregexhelpertext({...regexhelpertext,emailhelpertext:""})
            }
            else{
                setregexobj(regexobj=>({...regexobj,emailborder:true}))
                setregexhelpertext({emailhelpertext:"Enter a correct Email"})
            }
            if(passwordtest){
                setregexobj(regexobj=>({...regexobj,passwordborder:false}))
                setregexhelpertext({...regexhelpertext,passwordhelpertext:""})
            }
            else{
                setregexobj(regexobj=>({...regexobj,passwordborder:true}))
                setregexhelpertext({...regexhelpertext,passwordhelpertext:"Enter a correct password"})
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
                    <TextField id="Email" onChange={takeEmail} helperText={regexhelpertext.emailhelpertext} error={regexobj.emailborder} label="Email or Phone" size='small' variant="outlined" />
                </div>
                <div className="password">
                <TextField id="password" onChange={takePassword} helperText={regexhelpertext.passwordhelpertext} error={regexobj.passwordborder} label="Password" size='small' variant="outlined" />
                </div>
                <div className='textletter'>
                    Not your computer? Use Guest mode to sign in privately.</div>
                <div className='account'>
                    <h2 className='accountcolor'><a id = "GFG"href='SignIn.css'>Create account</a></h2>
                    <div className='btm'>
                        <Button onClick={submit} variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}