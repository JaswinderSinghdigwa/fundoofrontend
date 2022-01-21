import React from "react";
import './signup.css';
import { Register } from "../../Service/service";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import images from '../../image/images.jpg'
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
    
    function Firstname(e){
        setfirstname(e.target.value);
    }

    function Lastname(e){
        setlastname(e.target.value);
    }

    function Email(e){
        setemail(e.target.value);
    }

    function Password(e){
        setpassword(e.target.value);
    }
    const onsubmit = async ()=>{
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
            if (emailtest === true && passwordtest === true && firstnametest === true && lastnametest === true) {
                let obj = {
                  "firstName": firstname,
                  "lastName": lastname,
                  "email": email,
                  "password": password
                }
        
              let response = await Register(obj)
              try{
                 if(!response){
                      console.log(response)
                    }
                else{
                     console.log(response)
                    }
                console.log(obj);
                }
            catch(error){
                    console.log(error);
                }
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
                        <h2>Register a Google account</h2>
                    </div>
                    <div className='name'>
                        <div className='firstname'>
                            <TextField id="Name" helperText={regexhelpertext.firstnametext} onChange={Firstname} error={regexinfo.firstnameborder} label="firstname" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" helperText={regexhelpertext.lastnametext} onChange={Lastname} error={regexinfo.lastnameborder} label="LastName" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='email'>
                        <TextField id="email" helperText={regexhelperCredential.emailtext} onChange={Email} error={regexCredential.emailborder} label="username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        <h4><a href='gmail.com'id="text-none">Enter a email</a></h4>
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password"  helperText={regexhelperCredential.passwordtext} onChange={Password} error={regexCredential.passwordborder} label="password" size='small' variant="outlined" autoComplete="current-password" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm" helperText={regexhelperCredential.passwordtext} onChange={Password} error={regexCredential.passwordborder} label="confirm" size='small' variant="outlined" autoComplete="current-password" />
                        </div>
                    </div>
                    <div className='meta-text'>
                        characters should be min 8 letter and with a mix of letters,numbers,
                        symbol
                    </div>
                    <div className='checkbox'>
                        <FormControlLabel disabled control={<Checkbox />} label="Password" />
                    </div>
                    <div className='button'>
                        <div className='link'>
                            <h4><a href='sign'>SignUp</a></h4>
                        </div>
                        <div className="button-end">
                            <Button onClick={onsubmit} variant="contained">Register</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class" >
                    <img src={images}></img>
                </div>
            </div>
        </div>
    )
}
