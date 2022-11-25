import { Card, Row, Col, Radio, Input, Button, DatePicker, Table, message, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { PoweroffOutlined, UserOutlined, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { Avatar } from 'antd';
import { useNavigate } from 'react-router';
import axios from "axios"


function AdminEmp({userId}) {
  const navigate = useNavigate()
  const[adminemp,setadminemp]=useState("")
  const [PersonalInfo, setPersolnalInfo] = useState("")
  const[Defaultdate,setDefaultdate]=useState("")
  const [userdateone, setuserdateone] = useState("")
  const [userdatetwo, setuserdatetwo] = useState("")
  const [appraisinginput, setappraisinginput] = useState("")
  const [Reviewinginput , setReviewinginput] = useState("")

  const dateFormat = 'DD/MM/YYYY';

  console.log(Defaultdate,"dee")
  useEffect(() => {
    axios.post("http://192.168.29.223:3000/user/findOne", { "userId": userId }).then((res) => {
      let emp= res.data.data
    setadminemp(emp);
        // setadminemp(res.data);
    setDefaultdate(res.data.data.performanceAssessmentPeriod);
    })
  },[userId])
  console.log(adminemp,"sss")


  const onFinish = () =>{
    axios.post("http://192.168.29.223:3000/fact_employee_with_ao/createPeriodWorked",{
      "userId":userId,
      "appraisingOfficerName":appraisinginput,
      "appraisingOfficerStartTime":userdateone,
      "appraisingOfficerEndTime":Defaultdate,
      "reviewingOfficerName":Reviewinginput,
      "reviewingOfficerStartTime":userdatetwo,
      "reviewingOfficerEndTime":Defaultdate,
    }).then((res) =>{setPersolnalInfo(res.data)})
    message.success('Personal Information saved succesfully')
    navigate('/adminemprating')
  }



//   const onFinish = (values) => {

//     if(userdatetwo!="" && userdateone!="" ){
//      if (userdatetwo < Defaultdate && userdateone < Defaultdate) {
//        axios.post("http://192.168.29.223:3000/fact_employee_with_ao/createPeriodWorked", {
//          "userId":userId,
//          "appraisingOfficerName":appraisinginput,
//          "appraisingOfficerStartTime":userdateone,
//          "appraisingOfficerEndTime":Defaultdate,
//          "reviewingOfficerName":Reviewinginput,
//          "reviewingOfficerStartTime":userdatetwo,
//          "reviewingOfficerEndTime":Defaultdate,
     
//      }).then((res)=>{let Appsuccsess=(res.data.status)
//      if(Appsuccsess=="SUCCESS"){
//        message.success(' Personal Information saved succesfully');
//        navigate('/adminemprating')
 
//      } 
//      })
//      } 
//      else {
//        message.warning("Date should not be Greater than End Date")
//      } }
//  };
 const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const handlePrevious = () =>{
  navigate('/admintable')
}
  
  return (
    <div className='Employee-Info'>
      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-1'>
              <h2>Employee Assessment Process</h2>
              <h3>Appraisal Form - Personal Information</h3>
            </Card>
          </Col>
        </Row>
      </div> <br/>

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
                <Col lg={16}> <p className='Employee-Info-Lable'>Name :{adminemp.userName} </p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Employee ID : {adminemp.userId
} </p></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Designation : {adminemp.designation
} </p></Col>
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
                      <Col lg={6}><p className='Employee-Info-Details'>Date Of Joining :</p> <span>{"\n"}{adminemp.dateOfJoining
} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Role :</p> <span>{"\n"}{adminemp.role} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Department :</p> <span>{"\n"}{adminemp.department} </span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Qualification :</p> <span>{"\n"}{adminemp.qualifications} </span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Grade/Level :</p> <span>{"\n"}{adminemp.gradeLevel
} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Total Experience :</p> <span>{"\n"}{adminemp.totalExperience
} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Primary Skills :</p> <span>{"\n"}{adminemp.primarySkill
} </span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Organization Exp :</p> <span>{"\n"}{adminemp.interchangeExp
} </span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Performance Period:</p> <span>{"\n"}{adminemp.performanceAssessmentPeriod} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Gender :</p> <span>{"\n"}{adminemp.gender} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Employer Type :</p> <span>{"\n"}{adminemp.employerType
} </span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Branch :</p> <span>{"\n"}{adminemp.branch
} </span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Email :</p> <span>{"\n"}{adminemp.email
} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Mobile Number :</p> <span>{"\n"}{adminemp.mobileNumber} </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Spine Access :</p> <span>{"\n"}{adminemp.spineAccess} </span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Medi Claim :</p> <span>{"\n"}{adminemp.mediClaim
} </span></Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
           <Col lg={8}></Col>
           <Col lg={16}><p className='Period-text'>PERIOD WORKED WITH AO & RO</p></Col>
        </Row>
      </div>

      
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row>
          <Col lg={1}></Col>
          <Col lg={22}>
          <Card className='Info-Details-Card'>
            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Text'>Appraising Officer's (AO's) Names</p></Col>
              <Col lg={6}><p className='Info-Text'>From</p></Col>
              <Col lg={6}><p className='Info-Text' >To</p></Col>
            </Row>

            <Row>
              <Col lg={2}></Col>
              <Col lg={10}><p className='Info-Input'> <Input type='text' required onChange={(e) => setappraisinginput(e.target.value)} /> </p></Col>
              <Col lg={6}><p className='Info-Input'><DatePicker className='Date-Input-employee-info' format={dateFormat} required/></p></Col>
              <Col lg={6}><p className='Info-Input'><DatePicker className='Date-Input-employee-info'  format={dateFormat} required/></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row> <br/><br/>
     

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
              <Col lg={10}><p className='Info-Input'> <Input type='text' required onChange={(e) => setReviewinginput(e.target.value)} /> </p></Col>
              <Col lg={6}><p className='Info-Input'><DatePicker className='Date-Input-employee-info' format={dateFormat} /></p></Col>
              <Col lg={6}><p className='Info-Input'><DatePicker className='Date-Input-employee-info' format={dateFormat} /></p></Col>
            </Row>

          </Card>
          </Col>
          <Col lg={1}></Col>
        </Row>
         <br/> <br/>
      </div>
 
      <br></br>
      <Row>
          <Col span={4}></Col>
          <Col span={13}><Button className='Save-and-Next-Button' onClick={handlePrevious}>Previous Step</Button></Col>
          <Col span={3}><Button className='Save-and-Next-Button' htmlType='submit' onClick={onFinish}>Save and Next</Button></Col>
          <Col span={4}></Col>
        </Row>      </Form><br /> <br />
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

export default AdminEmp