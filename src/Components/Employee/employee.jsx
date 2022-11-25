import { ExclamationCircleOutlined } from '@ant-design/icons'
import { Avatar, Row, Col, Layout, Table, Card, Button, Input, message, Form, DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserOutlined,PoweroffOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { useStateValue } from '../../Components/reducer/stateprovider';
import { actionTypes } from '../../Components/reducer/reducer'
import axios from 'axios';

// import { base_url } from '../config/url';
import { useNavigate } from 'react-router';
const { Header } = Layout;
function Employee({ userId }) {
  // console.log(userId, "hhh")
  const [empdata, setempdata] = useState("")
  const navigate = useNavigate()
  const [userdateone, setuserdateone] = useState("")
  const [userdatetwo, setuserdatetwo] = useState("")
  const [defaultdate, setdefaultdate] = useState("")
  const [appraisinginput, setappraisinginput] = useState("")
  const [Reviewinginput , setReviewinginput] = useState("")
  const [visible  , setvisible] = useState(false)
  const dateFormat = 'YYYY/MM/DD';

  const [
    { authStatus },
    dispatch,
  ] = useStateValue();

  useEffect(() => {



    // window.localStorage.setItem('test', 1)
    if (authStatus !== true) {
      navigate('/')
    }
  }, [authStatus]);


  useEffect(() => {
    axios.post("http://192.168.29.223:3000/user/findOne", { "userId": userId }).then((res) => {
      setempdata(res.data.data);
      // setdefaultdate(res.data.data.performanceAssessmentPeriod)

    })

  }, [userId]);
  // console.log(defaultdate,"ggggg")



  function handleLogout() {

    dispatch({
      type: actionTypes.SET_AUTHSTATUS,
      authStatus: false
    })
    message.success('Logout succesfully');

  }


  // console.log(userdateone,"yyyyy")
  const onFinish = (values) => {



   if(userdatetwo!="" && userdateone!="" ){
    if (userdatetwo < defaultdate && userdateone < defaultdate) {
      axios.post("http://192.168.29.223:3000/fact_employee_with_ao/createPeriodWorked", {
        "userId":userId,
        "appraisingOfficerName":appraisinginput,
        "appraisingOfficerStartTime":userdateone,
        "appraisingOfficerEndTime":defaultdate,
        "reviewingOfficerName":Reviewinginput,
        "reviewingOfficerStartTime":userdatetwo,
        "reviewingOfficerEndTime":defaultdate,
    
    }).then((res)=>{let Appsuccsess=(res.data.status)
    if(Appsuccsess=="SUCCESS"){
      message.success(' Personal Information saved succesfully');
      navigate('/appraisalform')

    }
    
    
    })
    

    } 
    else {
      message.warning("Date should not be Greater than End Date")
    }



  }


  
  };

  const onFinishFailed = (errorInfo) => {
    // console.log('Failed:', errorInfo);
  };


  // console.log(userdatetwo, "kkkk")
  return (
    <div className="Employee">
      <header className="App-header">
        <div>
          <Row>
            <Col span={24}>
              <Card className='Card-1'>
                <h2>Employee Assessment Process</h2>
                <h3>Appraisal Form - Personal Information</h3>
                <h3><Button className='Logout-Button' onClick={handleLogout}> <PoweroffOutlined /> </Button></h3>
              </Card>
            </Col>
          </Row>
        </div>
        <div className='Empolyer-information'>
          <Row>
            <Col md={12} xl={12} lg={12}>  <b><Avatar size={64} icon={<UserOutlined />} className="avatar  ava " /></b></Col>
            <Col md={12} xl={12} lg={12}>   <h1 className='titles-h1'> Employee Information</h1></Col>
          </Row>
        </div>
        <div className='named'>
          <Row>
            <Col xl={12}>
              <h3 className='name'><span 
              style={{fontWeight:'700',fontSize:"20px"}}>Name : </span> {empdata.userName} </h3>

              <h3 className='employee'> <span style={{fontWeight:'700',fontSize:"17px"}}>Employee ID : </span> {empdata.userId}</h3>
              <h3 className='designation'><span style={{fontWeight:'700',fontSize:"17px"}}>Designation :</span>5</h3>
            </Col>
            <Col>
              <Card className='Content'>
                <Row>
                  <Col md={4} xl={4} lg={4}>
                    <p className='Employee-Details'> Date of Joining:</p><br />{empdata.dateOfJoining}
                  </Col>
                  <Col md={4} xl={4} lg={4}>
                  </Col>
                  <Col md={4} xl={4} lg={4}>
                    <p className='Employee-Details'> Role:</p><br />{empdata.role}
                  </Col>
                  <Col md={4} xl={4} lg={4}>
                  </Col>
                  <Col md={8} xl={8} lg={8}>
                    <p className='Employee-Details'> Department:</p><br />{empdata.department}
                  </Col>
                </Row>
                <div className='Qulification'>
                  <Row>
                    <Col md={4} xl={4} lg={4}>
                      <p className='Employee-Details'> Qualification:</p><br />{empdata.qualifications}
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                      <p className='Employee-Details'> Grade/Level :</p><br />{empdata.gradeLevel}
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                    </Col>
                    <Col md={8} xl={8} lg={8}>
                      <p className='Employee-Details'>Total Experience:</p><br />{empdata.totalExperience}
                    </Col>
                  </Row>
                </div>
                <div className='primary-skills'>
                  <Row>
                    <Col md={4} xl={4} lg={4}>
                      <p className='Employee-Details'>Primary Skills:</p><br />{empdata.primarySkill}
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                      <p className='Employee-Details'> Interchange </p><br />{empdata.interchangeExp}
                    </Col>
                    <Col md={4} xl={4} lg={4}>
                    </Col>
                    <Col md={8} xl={8} lg={8}>
                      <p className='Employee-Details'>  Performance Assessment Period </p><br />{empdata.performanceAssessmentPeriod}

                    </Col>

                  </Row>
                </div>
              </Card>
              <Row>
                <div >
                  <h2 className='worked'>PERIOD WORKED WITH AO & RO</h2>
                </div>
              </Row>
            </Col>
          </Row>
        </div> 
        {visible == true?
<div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>

        <Card className='Period-Card'>
            <Row>
              <Col span={3}><p className='Period-Label'>1</p></Col>
              <Col span={8}> <p className='Period-Label'> Appraising Officer's (AO's) Names </p> </Col>
              <Col span={6}> <p className='Period-Label'> From </p> </Col>
              <Col span={4}> <p className='Period-Label'> To </p> </Col>
              <Col span={3}></Col>
            </Row>

            <Row>
              <Col span={3}></Col>
              <Col span={8}><Form.Item
                name="appraisal1"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input className='Appraising-Input' required onChange={(e) => setappraisinginput(e.target.value)} />
              </Form.Item></Col>
              <Col span={6}><Form.Item ><Input type='date' value={userdateone}  placeholder='start Date' required onChange={(e)=>setuserdateone(e.target.value)} style={{width:"230px"}}/></Form.Item></Col>
              <Col span={4}><Form.Item > <Input type='date' value={defaultdate}/>  </Form.Item></Col>
              <Col span={3}></Col>
            </Row>
          
        </Card> <br />

        <Card className='Period-Card'>
         
            <Row>
              <Col span={3}><p className='Period-Label'>2</p></Col>
              <Col span={8}> <p className='Period-Label'> Reviewing Officer's (RO's) Names </p> </Col>
              <Col span={6}> <p className='Period-Label'> From </p> </Col>
              <Col span={4}> <p className='Period-Label'> To </p> </Col>
              <Col span={3}></Col>
            </Row>

            <Row>
              <Col span={3}></Col>
              <Col span={8}>
                <Form.Item
                name="appraisal2"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input className='Appraising-Input' required onChange={(e) => setReviewinginput(e.target.value)}/>
              </Form.Item></Col>
              <Col span={6}><Form.Item ><Input type='date' value={userdatetwo} required   placeholder='start Date' onChange={(e)=>setuserdatetwo(e.target.value)} style={{width:"230px"}}/> </Form.Item></Col>
              <Col span={4}><Form.Item ><Input type='date' value={defaultdate}/>  </Form.Item></Col>
              <Col span={3}></Col>
            </Row>
     
        </Card> <br />

        <Row>
          <Col span={4}></Col>
          <Col span={13}></Col>
          <Col span={3}><Button className='Save-and-Next-Button' htmlType='submit'>Save and Next</Button></Col>
          <Col span={4}></Col>
        </Row> <br /> <br />
        </Form>
        </div>:null}
      </header>
    </div>
  );
}
export default Employee;



