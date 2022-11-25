import { Card, Row, Col, Radio, Input, Button, Steps, Table, Dropdown, Select, Option,message } from 'antd'
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled, DownOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { render } from '@testing-library/react';


function AppraisalForm2({userId}) {


  const [JobDomainKnowledgerating, setJobDomainKnowlwdgerating] = useState("")
  const [JobDomainKnowledgecomment, setJobDomainKnowlwdgecomment] = useState("")
  const [Communicationrating, setCommunicationrating] = useState("")
  const [Communicationcomment, setCommunicationcomment] = useState("")
  const [Effectivenessrating, setEffectivenessrating] = useState("")
  const [Effectivenesscomment, setEffectivenesscomment] = useState("")
  const [Initiativerating, setInitiativerating] = useState("")
  const [Initiativecomment, setInitiativecomment] = useState("")
  const [Achievementrating, setAchievementrating] = useState("")
  const [Achievementcomment, setAchievementcomment] = useState("")
  const [Disciplinerating, setDisciplinerating] = useState("")
  const [Disciplinecomment, setDisciplinecomment] = useState("")
  const [TimeManagementrating, setTimeManagementrating] = useState("")
  const [TimeManagementcomment, setTimeManagementcomment] = useState("")
  const [Teamworkrating, setTeamworkrating] = useState("")
  const [Teamworkcomment, setTeamworkcomment] = useState("")
  const [Adaptabilityrating, setAdaptabilityrating] = useState("")
  const [Adaptabilitycomment, setAdaptabilitycomment] = useState("")
  const [Customerorientationrating, setCustomerorientationrating] = useState("")
  const [Customerorientationcomment, setCustomerorientation] = useState("")

  // console.log(JobDomainKnowledgerating,'rrrr');

  const dataSource = [
    {
      key: '1',
      GeneralAttributes: 'Job / Domain Knowledge',
      rating: <select className='Select-Input' onChange={(e) => { setJobDomainKnowlwdgerating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     // rating: <Dropdown menu={{items}} className='Form-Table-Input' onKeyPress={(e) => { NumberPattern(e) }} onChange={(e) => { setJobDomainKnowlwdgerating(e.target.value) }}> <a> <Space> Hover me <DownOutlined /> </Space> </a> </Dropdown>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setJobDomainKnowlwdgecomment(e.target.value) }} />
    },
    {
      key: '2',
      GeneralAttributes: 'Communication',
      rating: <select className='Select-Input' onChange={(e) => { setCommunicationrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      //rating: <Input className='Form-Table-Input' maxLength={2} onKeyPress={(e) => { NumberPattern(e) }} onChange={(e) => { setCommunicationrating(e.target.value) }} />,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setCommunicationcomment(e.target.value) }} />
    },
    {
      key: '3',
      GeneralAttributes: 'Effectiveness',
      rating: <select className='Select-Input' onChange={(e) => { setEffectivenessrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setEffectivenesscomment(e.target.value) }} />
    },
    {
      key: "4",
      GeneralAttributes: "Initiative",
      rating: <select className='Select-Input' onChange={(e) => { setInitiativerating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setInitiativecomment(e.target.value) }}/>
    },
    {
      key: "5",
      GeneralAttributes: 'Achievement Orientation',
      rating: <select className='Select-Input' onChange={(e) => { setAchievementrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setAchievementcomment(e.target.value) }} />
    },
    {
      key: "6",
      GeneralAttributes: "Discipline",
      rating: <select className='Select-Input' onChange={(e) => { setDisciplinerating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setDisciplinecomment(e.target.value) }} />
    },
    {
      key: "7",
      GeneralAttributes: 'Time Management',
      rating: <select className='Select-Input' onChange={(e) => { setTimeManagementrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setTimeManagementcomment(e.target.value) }} />
    },
    {
      key: "8",
      GeneralAttributes: 'Team Work',
      rating: <select className='Select-Input' onChange={(e) => { setTeamworkrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setTeamworkcomment(e.target.value) }} />
    },
    {
      key: "9",
      GeneralAttributes: 'Adaptability',
      rating: <select className='Select-Input' onChange={(e) => { setAdaptabilityrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setAdaptabilitycomment(e.target.value) }} />
    },
    {
      key: "10",
      GeneralAttributes: 'Customer Orientation',
      rating: <select className='Select-Input' onChange={(e) => { setCustomerorientationrating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      comment: <Input className='Form-Table-Input' onChange={(e) => { setCustomerorientation(e.target.value) }} />
    }
  ];

  const columns = [
    {
      title: 'General - Attributes (Self-Rating)',
      dataIndex: 'GeneralAttributes',
      key: 'GeneralAttributes',
      width: '50%'
    },
    {
      title: 'Rating(Yourself)',
      dataIndex: 'rating',
      key: 'rating',
      width: "15%",
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',

    },
  ];

  const handletyping = () => { }

  const navigate = useNavigate()

  const handleClickSave = () => {
    axios.post("http://192.168.29.223:3000/fact_general_attributes_2/update", {
      "userId":userId,
      "jobDomainknowledgeRating": JobDomainKnowledgerating,
      "jobDomainKnowledgeComments": JobDomainKnowledgecomment,
      "communicationRating": Communicationrating,
      "communicationComments": Communicationcomment,
      "effectivenessRating": Effectivenessrating,
      "effectivenessComments": Effectivenesscomment,
      "initiativeRating": Initiativerating,
      "initiativeComments": Initiativecomment,
      "achievementOrientationRating": Achievementrating,
      "achievementOrientationComments": Achievementcomment,
      "disciplineRating": Disciplinerating,
      "disciplineComments": Disciplinecomment,
      "timeManagementRating": TimeManagementrating,
      "timeManagementComments": TimeManagementcomment,
      "teamWorkRating": Teamworkrating,
      "teamWorkComments": Teamworkcomment,
      "adaptabilityRating": Adaptabilityrating,
      "adaptabilityComments": Adaptabilitycomment,
      "customerOrientationRating": Customerorientationrating,
      "customerOrientationComments": Customerorientationcomment

    }).then((res) => console.log(res, "kkk"))
    message.success(' Key Result Area saved succesfully');
    navigate('/training')
  }

  const handleClickPrevious = () => {

    navigate('/appraisalform')
  }

  const NumberPattern = (e) => {
    var regex = new RegExp("[0-9]");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(str)) {
      e.preventDefault();
    }
  };
  useEffect(() => {

  })

  return (
    <div className='Appraisal-Form'>
      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-1'>
              <h2>Appraisal Form</h2>
              <h3>General - Attributes (self-rating)</h3>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-2'>
              {/* <Row>
                <Col span={2} xs={0} sm={0} md={0} lg={0} xl={2} ></Col>
                <Col xs={14} sm={14} md={12} lg={12} xl={4}>
                  <p className='Font-Color'>Schedule Slippage <InfoCircleFilled className='Info-Icon' /> <CloseCircleFilled className='Close-Icon' /> </p>
                </Col>
                <Col span={6} xs={0} sm={0} md={0} lg={0} xl={6} ></Col>
                <Col span={6} xs={0} sm={0} md={0} lg={0} xl={6}></Col>
                <Col xs={14} sm={14} md={12} lg={12} xl={4}>
                  <p className='Font-Color'>Rating Guideline <InfoCircleFilled className='Info-Icon' /> </p>
                </Col>
                <Col span={2} xs={0} sm={0} md={0} lg={0} ></Col>
              </Row><br /><br /> */}

              <Row>
                <Col span={3}></Col>
                <Col span={18}>
                  <Table dataSource={dataSource} columns={columns} pagination={false} className="appraisal-form-table" />
                </Col>
                <Col span={3}></Col>
              </Row> <br />

              <Row>
                <Col span={4}></Col>
                <Col span={13}><Button className='Save-and-Next-Button' onClick={handleClickPrevious}>Previous Step</Button></Col>
                <Col span={3}><Button className='Save-and-Next-Button' onClick={handleClickSave}>Save and Next</Button></Col>
                <Col span={4}></Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AppraisalForm2