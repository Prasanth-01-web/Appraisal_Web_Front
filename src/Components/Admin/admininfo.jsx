import { Card, Row, Col, Radio, Input, Button, DatePicker, Table, message, Form, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { PoweroffOutlined, UserOutlined, DownOutlined, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { Avatar } from 'antd';
import { useNavigate } from 'react-router';
import axios from "axios"
import moment from 'moment';


function Admininfo() {
  // const navigate = useNavigate()
  // const handleClickSave = () => {
  //   navigate('/ratinguser')
  // }



  const [Empname, setEmpName] = useState("")
  const [Empcode, setEmpCode] = useState("")
  const [Designation, setDesignation] = useState("")
  const [selectdesignation, setselectdesignation] = useState("")
  const [Dateofjoining, setDateofjoining] = useState("")
  const [Role, setRole] = useState("")
  const [selectrole, setselectrole] = useState()
  const [Department, setDepartment] = useState("")
  const [selectdepartment,setselectdepartment] = useState()
  const [Qualification, setQualification] = useState("")
  const [Grade, setGrade] = useState("")
  const [selectgrade, setselectgrade] = useState("")
  const [Experience, setExperience] = useState("")
  const [Skill, setSkill] = useState("")
  const [OrganizationExp, setOrganizationExp] = useState("")
  const [PerformancePeriod, setPerformancePeriod] = useState("")
  const [Gender, setGender] = useState("")
  const [EmployerType, setEmployerType] = useState("")
  const [selectemployertype, setselectemployertype] = useState()
  const [Branch, setBranch] = useState([])
  const [selectbranch, setselectbranch] = useState()
  const [Email, setEmail] = useState("")
  const [MobileNumber, setMobileNumber] = useState("")
  const [SpineAccess, setSpineAccess] = useState("")
  const [MediClaim, setMediClaim] = useState("")
  const [ProjectName, setProjectName] = useState("")
  const [Projectmanager, setProjectManager] = useState("")
  const [selectprojectmanager, setselectprojectmanager] = useState()
  const [ReportingManager, setReportingManager] = useState("")
  const [selectreportingmanager, setselectreportingmanager] = useState()

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };

  const dateFormat = 'DD-MM-YYYY';

  const navigate = useNavigate()

  function handleLogout() {
    navigate('/')
    message.success('Logout succesfully');
  }

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findBranchMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,'data')
      let branch = data.map((e) =>{
        return{
          value : e.branch_name,
          label : e.branch_name
        }
      })
      setBranch(branch)
    })
  },[])


  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDepartmentMaster")
    .then((res) =>{
      const data = res.data;
      const department = data.map((e) =>{
        return{
          value: e.department_name,
          label : e.department_name
        }
      })
      setDepartment(department)
    })
  },[])

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDesignationMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const desgination = data.map((e) =>{
        return{
          value : e.designation_name,
          label : e.designation_name
        }
      })
      setDesignation(desgination)
    })
  },[])

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findEmployerTypeMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const employertype = data.map((e) =>{
        return{
          value : e.employer_type,
          label : e.employer_type
        }
      })
      setEmployerType(employertype)
    })
  },[])

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDimGradeMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const grade = data.map((e) =>{
        return{
          value : e.grade_type,
          label : e.grade_type
        }
      })
      setGrade(grade)
    })
  },[])


  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDimRoleMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const role = data.map((e) =>{
        return{
          value : e.role_name,
          label : e.role_name
        }
      })
      setRole(role)
    })
  },[])

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDimProjectManagerMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const projectmanager = data.map((e) =>{
        return{
          value : e.project_manager_name,
          label : e.project_manager_name
        }
      })
      setProjectManager(projectmanager)
    })
  },[])

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/dim_employee_master/findDimReportingManagerMaster")
    .then((res) =>{
      const data = res.data;
      // console.log(data.data,"data");
      const reportmanager = data.map((e) =>{
        return{
          value : e.reporting_manager_name,
          label : e.reporting_manager_name
        }
      })
      setReportingManager(reportmanager)
    })
  },[])



  const handleClick = (e) => {
    e.preventDefault()
    let empdetails = axios.post("http://192.168.29.223:3000/user/create", {
      "userId": Empcode,
      "userName": Empname,
      "dateOfJoining": Dateofjoining,
      "gender": Gender,
      "qualifications": Qualification,
      "gradeLevel": selectgrade,
      "totalExperience": Experience,
      "primarySkill": Skill,
      "organizationExp": OrganizationExp,
      "performanceAssessmentPeriod": PerformancePeriod,
      "employerType": selectemployertype,
      "branch": selectbranch,
      "department": selectdepartment,
      "designation": selectdesignation,
      "email": Email,
      "mobileNumber": MobileNumber,
      "role": selectrole,
      "spineAccess": SpineAccess,
      "mediClaim": MediClaim,
      "projectName":ProjectName,
      "projectManager": selectprojectmanager,
      "reportingManager": selectreportingmanager
    }).then((res) => console.log(res,"res"))
    message.success("Employee Informartion Save Successfully")
    navigate('/admintable')
  }

  const handleNext = () => {
    navigate('/admintable')
  }

  // const datePickerFun = (e,_d) => {
  //   // console.log(_d,"datePickerVal");
  //   console.log(_d,"datePickerVal");
  //    setDateofjoining(_d);
  // }

console.log(Dateofjoining,"Branch");

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
      </div>

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
                <Col lg={16}> <p className='Employee-Info-Lable'>Employee Name :</p> <span>{'\n'}<Input className='Employee-Info-Input' onChange={(e) => setEmpName(e.target.value)} required /></span></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Employee Code :</p><span>{'\n'}<Input className='Employee-Info-Input' onChange={(e) => setEmpCode(e.target.value)} required /></span></Col>
                <Col lg={1}></Col>
              </Row><br />
              <Row>
                <Col lg={7}></Col>
                <Col lg={16}> <p className='Employee-Info-Lable'>Designation :</p><span>{'\n'}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectdesignation(value)}
                        options={Designation}
                      /></span></Col>
                <Col lg={1}></Col>
              </Row>
            </Card>
          </Col>

          <Col lg={16}>

            <Card className='Employee-Card-2'>
              <Row>
                <Col lg={20}> <p className='Employee-Info-Text'>Employee Information</p> </Col>
                <Col lg={4}><Button className='Employee-Button' onClick={handleNext}>Employee</Button></Col>
              </Row>

              <Row>
                <Col></Col>
                <Col lg={24}>
                  <Card className='Employee-Info-Card'>
                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Date Of Joining :</p> <span>{"\n"}<DatePicker className='Date-Input' 
                      onChange={(date,dateString) => setDateofjoining(dateString)}
                       defaultValue={moment()} 
                       format={dateFormat} /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Role :</p> <span>{"\n"} <Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectrole(value)}
                        required
                        options={Role}
                      /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Department :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectdepartment(value)}
                        required
                        options={Department}
                      /></span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Qualification :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setQualification(e.target.value)} required /></span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Grade/Level :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectgrade(value)}
                        required
                        options={Grade} />
                      </span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Total Experience :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setExperience(e.target.value)} required /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Primary Skills :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setSkill(e.target.value)} required /></span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Organization Exp :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setOrganizationExp(e.target.value)} required /></span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Performance Period:</p> <span>{"\n"}<DatePicker className='Date-Input' onChange={(e) => setPerformancePeriod(e.target.value)} format={dateFormat} /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Gender :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setGender(value)}
                        required
                        options={[
                          {
                            value: 'male',
                            label: 'Male',
                          },
                          {
                            value: 'female',
                            label: 'Female',
                          },
                        ]} /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Employer Type :</p> <span>{"\n"}<Select
                        // defaultValue="Zealeye"
                        className='Employee-Info-Input'
                        onChange={(value) => setselectemployertype(value)}
                        required
                        options={EmployerType} /></span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Branch :</p>
                      
                       <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectbranch(value)}
                        options={Branch}
                         /></span></Col>
                    </Row> <br />
                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Email :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setEmail(e.target.value)} required /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Mobile Number :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setMobileNumber(e.target.value)} required /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Spine Access :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setSpineAccess(value)}
                        required
                        options={[
                          {
                            value: 'yes',
                            label: 'Yes',
                          },
                          {
                            value: 'no',
                            label: 'No',
                          },
                        ]} /></span></Col>
                      <Col lg={5}><p className='Employee-Info-Details'>Medi Claim :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setMediClaim(value)}
                        required
                        options={[
                          {
                            value: 'yes',
                            label: 'Yes',
                          },
                          {
                            value: 'no',
                            label: 'No',
                          },
                        ]} /></span></Col>
                    </Row> <br />

                    <Row>
                      <Col lg={1}></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Project Name :</p> <span>{"\n"}<Input className='Employee-Info-Input' onChange={(e) => setProjectName(e.target.value)} required /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Project Manager :</p> <span>{"\n"}<Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectprojectmanager(value)}
                        required
                        options={Projectmanager} /></span></Col>
                      <Col lg={6}><p className='Employee-Info-Details'>Reporting Manager :</p> <span><Select
                        className='Employee-Info-Input'
                        onChange={(value) => setselectreportingmanager(value)}
                        required
                        options={ReportingManager} />{"\n"}</span></Col>
                      <Col lg={5}></Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div> <br />
      <div>
        <Row>
          <Col span={10}></Col>
          <Col span={14}><Button className='Save-and-Next-Button' htmlType='submit' onClick={handleClick}>Save and Next</Button></Col>
        </Row>
      </div> <br />

    </div>
  )
}

export default Admininfo;



