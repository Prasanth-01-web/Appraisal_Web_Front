import { Card, Row, Col, Radio, Input, Button, Steps, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { PoweroffOutlined, UserOutlined, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { Avatar } from 'antd';
import { useNavigate } from 'react-router';
import { useStateValue } from '../../Components/reducer/stateprovider';
import { actionTypes } from '../../Components/reducer/reducer'
import axios from "axios"

function Empinfo({userId}) {
  // console.log(userId,"ooooooiu")
  const navigate = useNavigate()
  const[empdata,setempdata]=useState("")
  // const [
  //   { authStatus },
  //   dispatch,
  // ] = useStateValue();

  // useEffect(() => {



  //   if (authStatus !== true) {
  //     navigate('/')
  //   }
  // }, [authStatus]);


  function handleLogout() {
      navigate('/')
    message.success('Logout succesfully');
  }
  useEffect(() => {
    axios.post("http://192.168.29.223:3000/user/findOne", { "userId": userId })
     
    .then((res) => {
      setempdata(res.data.data)
    
  //  console.log(res,"employrrress");
    
    })

  }, [userId]);




  function handleNext(){
    navigate('/ratinguser')
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

      {/* <div><br />
        <Row>
          <Col lg={1}></Col>
          <Col lg={23}><Button className='Employee-Button'>Employee</Button></Col>
        </Row>
      </div>  */}

      <div>
        <Row>
          <Col lg={8}>
            <Card className='Employee-Card-1'>
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <Avatar size={70} icon={<UserOutlined />} className="Employee-Info-Avatar" /></Col>
                <Col lg={1}></Col>
              </Row> <br /> <br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Name : {empdata.userName}</p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Employee ID : {empdata.userId}</p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Designation : {empdata.designation}</p></Col>
                <Col lg={1}></Col>
              </Row>
            </Card>
          </Col>

          <Col lg={16}>

            <Card className='Employee-Card-2'>
              <Row>
                <Col lg={24}> <p className='Employee-Info-Text'>Employee Information</p> </Col>
              </Row>

              <Row>
                <Col></Col>
                <Col lg={24}>
                  <Card className='Employee-Info-Card'>
                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Date Of Joining :</p> <span>{"\n"}{empdata.dateOfJoining}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Role :</p> <span>{"\n"}{empdata.role}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Department :</p> <span>{"\n"}{empdata.department}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Qualification :</p> <span>{"\n"}{empdata.qualifications}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Grade/Level :</p> <span>{"\n"}{empdata.gradeLevel}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Total Experience :</p> <span>{"\n"}{empdata.totalExperience}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Primary Skills :</p> <span>{"\n"}{empdata.primarySkill}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Interchange Exp :</p> <span>{"\n"}{empdata.interchangeExp}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Performance Period:</p> <span>{"\n"}{empdata.performanceAssessmentPeriod}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Gender :</p> <span>{"\n"}{empdata.gender}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Employer Type :</p> <span>{"\n"}{empdata.employerType}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Branch :</p> <span>{"\n"}{empdata.branch}</span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Email :</p> <span>{"\n"}{empdata.email}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Mobile Number :</p> <span>{"\n"}{empdata.mobileNumber}</span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Spine Access :</p> <span>{"\n"}{empdata.spineAccess}</span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Medi Claim :</p> <span>{"\n"}{empdata.mediClaim}</span></Col>
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
          <Col span={3}><Button className='Save-and-Next-Button' onClick={handleNext}>Save and Next</Button></Col>
          <Col span={4}></Col>
        </Row> <br /> <br /><br></br>
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

export default Empinfo;