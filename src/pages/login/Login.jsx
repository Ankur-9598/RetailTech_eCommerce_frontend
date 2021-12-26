import "./login.css";
import loginImage from "./img/img2.png";

import { useState } from "react";
import { TextField, Button, CircularProgress } from "@material-ui/core";
import { DoubleArrow } from "@material-ui/icons";


export default function Login() {
    const [checkedLogin, setCheckedLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
    }

    return (
        <div className="login_container">
            <div className="login_wrapper">
                <div className="login_left_container">
                    <div className="auth_form_container">
                        {!checkedLogin && <TextField 
                            required
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                            className="input_field"
                            style={{
                                margin: "20px 0 15px 0"
                            }}
                        />}
                        <TextField 
                            required
                            id="outlined-basic"
                            label="Email"
                            type="email"
                            variant="outlined"
                            style={{
                                margin: "20px 0 15px 0"
                            }}
                        />
                        <TextField 
                            required
                            id="outlined-basic"
                            label="Password"
                            type="password"
                            variant="outlined"
                            style={{
                                margin: "20px 0 15px 0"
                            }}
                        />
                        <Button 
                            onClick={handleClick}
                            endIcon={<DoubleArrow />}
                            variant="contained"
                            color="primary"
                            style={{
                                margin: "20px 0 15px 0"
                            }}
                        >
                            {loading ? 
                                <CircularProgress color="white" size={24}/> 
                                : checkedLogin ? "Login" 
                                : "Register"
                            }
                        </Button>
                    <div className="auth_change_container">
                        {checkedLogin ? ( 
                            <span className="auth_change_text" onClick={() => setCheckedLogin(false)}>Create new account</span>
                        ): (
                            <span className="auth_change_text" onClick={() => setCheckedLogin(true)}>Already have an account</span>
                        )}
                    </div>
                    </div>
                </div>
                <div className="login_right_container">
                    <img src={loginImage} alt="e-commerce" className="login_img"/>
                </div>
            </div>
        </div>
    )
}

