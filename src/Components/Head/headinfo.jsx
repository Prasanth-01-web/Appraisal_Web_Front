import { Card, Row, Col, Radio, Input, Button, Steps, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { PoweroffOutlined, UserOutlined, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { Avatar } from 'antd';
import { useNavigate } from 'react-router';
import { useStateValue } from '../reducer/stateprovider';
import { actionTypes } from '../reducer/reducer'
import axios from "axios"

function Headinfo({userId}) {
const navigate = useNavigate()
const [admindata, setadmindata] = useState("")
const [
    { authStatus },
    dispatch,
  ] = useStateValue();

  useEffect(() => {




    if (authStatus !== true) {
      navigate('/')
    }
  }, [authStatus]);

  useEffect(() => {
    axios.post("http://192.168.29.223:3000/user/findOne", { "userId": userId }).then((res) => {
      setadmindata(res.data.data)
   
    

    })

  }, [userId]);
  console.log(admindata,"yyy")
   
    function handleTable(){
        navigate('/admintable' )
    }

    function handleLogout() {

        dispatch({
          type: actionTypes.SET_AUTHSTATUS,
          authStatus: false
        })
        message.success('Logout succesfully');
    
      }
  
  return (
    <div className='Employee-Info'>
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
      </div> <br/>

      <div><br />
   

        <Row>
          <Col lg={1}></Col>
          <Col lg={2}><Button className='Employee-Button' style={{color:"blue"}} >Admin</Button></Col>

        </Row>
      </div> 

      <div>
        <Row>
          <Col lg={8}>
            <Card className='Employee-Card-1'><br/><br/><br/><br/>
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <Avatar size={70} icon={<UserOutlined />} className="Employee-Info-Avatar" /></Col>
                <Col lg={1}></Col>
              </Row> <br /> <br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Name : {admindata.userName
}</p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Employee ID : {admindata.userId}</p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Designation : {admindata.designation}</p></Col>
                <Col lg={1}></Col>
              </Row>
            </Card>
          </Col>

          <Col lg={16}>

            <Card className='Employee-Card-2'>
              <Row>
                <Col lg={24}> <p className='Employee-Info-Text'>Admin Information</p> </Col>
              </Row>

              <Row>
                <Col></Col>
                <Col lg={24}>
                  <Card className='Employee-Info-Card'>
                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Date Of Joining :</p> <span>{"\n"}{admindata.dateOfJoining}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Role :</p> <span>{"\n"}{admindata.role
}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Department :</p> <span>{"\n"}{admindata.department
}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Qualification :</p> <span>{"\n"}{admindata.qualifications
}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Grade/Level :</p> <span>{"\n"}{admindata.gradeLevel}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Total Experience :</p> <span>{"\n"}{admindata.totalExperience
}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Primary Skills :</p> <span>{"\n"}{admindata.primarySkill
}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Interchange Exp :</p> <span>{"\n"}{admindata.interchangeExp
}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Performance Assessment Period:</p> <span>{"\n"}{admindata.performanceAssessmentPeriod}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Gender :</p> <span>{"\n"}{admindata.gender}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Employer Type :</p> <span>{"\n"}{admindata.employerType
}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Branch :</p> <span>{"\n"}{admindata.branch}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Email :</p> <span>{"\n"}{admindata.email
}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Mobile Number :</p> <span>{"\n"}{admindata.userId}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Spine Access :</p> <span>{"\n"}{admindata.spineAccess}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Medi Claim :</p> <span>{"\n"}{admindata.mediClaim
}</span></Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col span={4}></Col>
          <Col span={13}></Col>
          <Col span={3}><Button className='Save-and-Next-Button'onClick={handleTable}> Next</Button></Col>
          <Col span={4}></Col>
        </Row> 
        <br></br><br></br>
      </div>

      {/* <div>
        <Row>
           <Col lg={8}></Col>
           <Col lg={16}><p className='Period-text'>PERIOD WORKED WITH AO & RO</p></Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Appraising Officer's (AO's) Names</p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text'>To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text'/> </p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/> <br/>
      </div>

      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Reviewing Officer's (RO's) Names</p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text'>To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text'/> </p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/> <br/>
      </div> */}
{/* 
      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Project Name</p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text'>To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text'/> </p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/> <br/>
      </div>

      
      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Report Manager</p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text'>To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text'/> </p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/> <br/>
      </div>

      
      <div>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Project </p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text'>To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text'/> </p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
              <Col lg={6}><p className='Info-Input'><Input type='date'/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/> <br/>
      </div> */}

    </div>
  )
}

export default Headinfo