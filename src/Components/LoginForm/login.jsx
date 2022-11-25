import { Button, Checkbox, Form, Input, Card,message } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router'
import { useStateValue } from '../reducer/stateprovider';
import { actionTypes } from '../reducer/reducer';
import { base_url } from '../../config/url';



function Login({Setstatus}) {
    const [data, setdata] = useState()
    const [user, setuser] = useState()
    const [passwod, setpasswod] = useState()
    // const [usertype, Setusertype] = useState("")
    const navigate = useNavigate()
   

   
    const [
        { authStatus },
        dispatch
    ] = useStateValue();


    useEffect(()=>{
        // alert(window.localStorage.getItem('test') );
        if(authStatus == true ){
            navigate('/adminfo')
        }
        else{
            dispatch({
                type: actionTypes.SET_AUTHSTATUS,
                authStatus: false
            })
        }
      },[]);


    const handlesubmit =  (e) => {
        e.preventDefault()
      console.log()
    
        // console.log(passwod, "kkk")
        if(user !="" && passwod!=""){
        let result =  axios.post("http://192.168.29.223:3000/user_login_details/loginUser", {
            "loginUsername": user,
            "loginPassword": passwod
        }).then((res) => {
        //   console.log(res.data.data[0].login_user[0].user_type,"aaa")
        //   console.log(res.data.data[0].login_user[0].user_id,"bbb")
            // let Admin=res.data
            let result = res.data.status
            let Success=res.data
            // Setstatus(res.data.data[0].login_user[0].user_id)
         
            if (result == "SUCCESS" && Success.data[0].login_user[0].user_type.toLowerCase()=="admin" ) {
                Setstatus(Success.data[0].login_user[0].user_id)
                console.log(Success.data[0].login_user[0].user_id,"yytyyt")   
                // alert("Login succesfully")
                message.success('Login succesfully'); 
                navigate('/adminfo')     
                dispatch({
                    type: actionTypes.SET_AUTHSTATUS,
                    authStatus: true
                })
         }

         else if (result == "SUCCESS" && Success.data[0].login_user[0].user_type =="Empolyee") {
            Setstatus(Success.data[0].login_user[0].user_id)
            navigate('/employeeinfo')
           }
         else if (result == "SUCCESS" && Success.data[0].login_user[0].user_type =="head") {
            Setstatus(Success.data[0].login_user[0].user_id)
            navigate('/headinfo')
          

         }
            else if (result == "Error") {
                Setstatus("")
                message.error('Wrong Username or Password')
                dispatch({
                    type: actionTypes.SET_AUTHSTATUS,
                    authStatus: false
                })
            }
       
        });


    }
    else {
      message.warning("Please Enter Your Username or Password")
    }

     

    }
   console.log()
    return (

        <div className="App1">
            <div class="limiter">

                <div class="container-login100">
                    <div class="wrap-login100">
                        <svg className="Icon_material-live-help" data-name="Icon material-live-help" xmlns="http://www.w3.org/2000/svg" width="21.586" height="25.184" viewBox="0 0 21.586 25.184">
                            <path id="Icon_material-live-help-2" data-name="Icon material-live-help" d="M23.688,3H6.9A2.4,2.4,0,0,0,4.5,5.4V22.188a2.4,2.4,0,0,0,2.4,2.4h4.8l3.6,3.6,3.6-3.6h4.8a2.406,2.406,0,0,0,2.4-2.4V5.4A2.406,2.406,0,0,0,23.688,3Zm-7.2,19.188h-2.4v-2.4h2.4Zm2.482-9.294L17.9,14a4.083,4.083,0,0,0-1.4,3.394h-2.4v-.6A4.827,4.827,0,0,1,15.5,13.4l1.487-1.511a2.345,2.345,0,0,0,.708-1.691,2.4,2.4,0,1,0-4.8,0H10.5a4.8,4.8,0,1,1,9.594,0A3.816,3.816,0,0,1,18.975,12.894Z" transform="translate(-4.5 -3)" fill="#bdbdbd" />
                        </svg>
                        <form class="login100-form validate-form">

                            <Avatar size={64} icon={<UserOutlined />} style={{position: "relative", backgroundColor: "transparent linear-gradient(180deg, #003454 0%, #77DDE7 100%) 0% 0% no-repeat;",
    bottom:"50px"}}/>

                            <span class="login100-form-title ">Welcome

                                <br />
                                <br />
                            </span>

                            <Form class="wrap-input100 validate-input">

                                 <Input placeholder="username" name="username" value={user} onChange={(e) => setuser(e.target.value)} />


                            </Form>
                            <br></br>

                            <Form class="wrap-input100 validate-input">
                                <Input.Password placeholder="Password" value={passwod} onChange={(e) => {
                                    setpasswod(e.target.value)
                                }} />

                            </Form>
                            <br></br>
                            <br></br>
                            <div class="container-login100-form-btn">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn" />
                                    <button class="login100-form-btn" onClick={handlesubmit}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
