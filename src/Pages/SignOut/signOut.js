import React from "react";
import './signOut.css';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import googleimage from '../../gi.jpeg'

export default function SignOut() {
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
                            <TextField id="Name" label="firstname" size='small' variant="outlined" />
                        </div>
                        <div className='lastname'>
                            <TextField id="Lastname" label="LastName" size='small' variant="outlined" />
                        </div>
                    </div>
                    <div className='email'>
                        <TextField id="email" label="username" size='small' variant="outlined" />
                    </div>
                    <div className='textarea'>
                        <h4><a href='gmail.com' id="text-none">Use my current email Instead</a></h4>
                    </div>
                    <div className='password-rectangle'>
                        <div className='password'>
                            <TextField id="password" label="password" size='small' variant="outlined" />
                        </div>
                        <div className='confirm'>
                            <TextField id="confirm" label="confirm" size='small' variant="outlined" />
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
                            <Button variant="contained">Next</Button>
                        </div>
                    </div>
                </div>
                <div className="Img-class">
                    <img src={googleimage} ></img>
                </div>
            </div>
        </div>
    )
}
