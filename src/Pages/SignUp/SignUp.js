import React from "react";
import './signup.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import googleimage from '../../gi.jpeg'
const firstnameRegex = /^[A-Z]{1}[a-z]{2,}/; 
const lastnameRegex = /^[A-Z]{1}[a-z]{2,}/; 
const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;


export default function Signup() {
    const [firstname,setfirstname] = React.useState("");
    const [lastname,setlastname] = React.useState("");
    const [email,setemail] = React.useState("");
    const [password,setpassword] =React.useState("");
    const [regexinfo,setregexinfo]=React.useState({firstnameborder:false,lastnameborder:false})
    const [regexCredential,setregexCredential]=React.useState({emailborder:false,passwordborder:false});
    const [regexhelpertext,setregexhelpertext]=React.useState({firstnametext:"",lastnametext:""})
    const [regexhelperCredential,setregexhelperCredential]=React.useState({emailtext:"",passwordtext:""})
    
    function takefirstname(e){
        setfirstname(e.target.value);
    }

    function takelastname(e){
        setlastname(e.target.value);
    }

    function takeEmail(e){
        setemail(e.target.value);
    }

    function takePassword(e){
        setpassword(e.target.value);
    }
    const onsubmit = ()=>{
        if(email===""&&password===""&&firstname===""&&lastname===""){
            setregexinfo(regexinfo=>({...regexinfo,firstnameborder:true,lastnameborder:true}))
            setregexhelpertext(regexhelpertext=>({...regexhelpertext,firstnametext:"Enter a firstname",lastnametext:"Enter a lastname"}))
            setregexCredential(regexCredential=>({...regexCredential,emailborder:true,passwordborder:true}))
            setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,emailtext:"Enter a correct email",passwordtext:"Enter a correct password"}))
        }
        else{
            const firstnametest = firstnameRegex.test(firstname);
            const lastnametest = lastnameRegex.test(lastname);
            const passwordtest = passwordRegex.test(password);
            const emailtest = emailRegex.test(email);
            if(firstnametest && lastnametest && emailtest && passwordtest){
                setregexinfo(regexinfo=>({...regexinfo,firstnameborder:false,lastnameborder:false}))
                setregexhelpertext(regexhelpertext=>({...regexhelpertext,firstnametext:"",lastnametext:""}))
                setregexCredential(regexCredential=>({...regexCredential,emailborder:false,passwordborder:false}))
                setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,emailtext:"",passwordtext:""}))
            }
            if(firstnametest){
                setregexinfo(regexinfo=>({...regexinfo,firstnameborder:false}))
                setregexhelpertext(regexhelpertext=>({...regexhelpertext,firstnametext:""}))
            }

            else {
                setregexinfo(regexinfo=>({...regexinfo,firstnameborder:true}))
                setregexhelpertext(regexhelpertext=>({...regexhelpertext,firstnametext:"Enter a correct email"}))

            }
            if(lastnametest){
                setregexinfo(regexinfo=>({...regexinfo,lastnameborder:false}))
                setregexhelpertext(regexhelpertext=>({...regexhelpertext,lastnametext:""}))
            }
            else{
                setregexinfo(regexinfo=>({...regexinfo,lastnameborder:true}))
                setregexhelpertext(regexhelpertext=>({...regexhelpertext,lastnametext:"Enter a correct String"}))

            }
            if(emailtest){
                setregexCredential(regexCredential=>({...regexCredential,emailborder:false}))
                setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,emailtext:""}))
            }
            else{
                setregexCredential(regexCredential=>({...regexCredential,emailborder:true}))
                setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,emailtext:"Enter a correct emaili"}))
            }
            if(passwordtest){
                setregexCredential(regexCredential=>({...regexCredential,passwordborder:false}))
                setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,passwordtext:""}))
            }
            else{
                setregexCredential(regexCredential=>({...regexCredential,passwordborder:true}))
                setregexhelperCredential(regexhelperCredential=>({...regexhelperCredential,passwordtext:"Enter a correct password"}))
            }
        }
    }
    
    
    return (
        <div className="Box-class">
            <div className="container">
                <div className="form-class">
                    <div className='google'>
                        <span className='first'>G</span>
                        <span className='second'>o</span>
                        <span className='third'>o</span>
                        <span className='four'>g</span>
                        <span className='five'>l</span>
                        <span className='Six'>e</span>
                    </div>
                    <div className='heading'>
                        <h2>Create Your Google account</h2>
                    </div>
                    <div className='name'>
                        <div className='firstname'>
                            <TextField id="Name" helperText={regexhelpertext.firstnametext} onChange={takefirstname} error={regexinfo.firstnameborder} label="firstname" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" helperText={regexhelpertext.lastnametext} onChange={takelastname} error={regexinfo.lastnameborder} label="LastName" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='email'>
                        <TextField id="email" helperText={regexhelperCredential.emailtext} onChange={takeEmail} error={regexCredential.emailborder} label="username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        <h4><a href='gmail.com'id="text-none">Use my current email Instead</a></h4>
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password"  helperText={regexhelperCredential.passwordtext} onChange={takePassword} error={regexCredential.passwordborder} label="password" size='small' variant="outlined" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm"  error={regexinfo.passwordborder} helperText={regexhelpertext.passwordtext} label="confirm" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        Use 8 or more characters with a mix of letters,numbers,
                        symbols
                    </div>
                    <div className='checkbox'>
                        <FormControlLabel disabled control={<Checkbox />} label="Show Password" />
                    </div>
                    <div className='button'>
                        <div className='link'>
                            <h4><a href='sign'>SignIn Instead</a></h4>
                        </div>
                        <div className="button-end">
                            <Button onClick={onsubmit} variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class" >
                    <img src={googleimage}></img>
                </div>
            </div>
        </div>
    )
}
