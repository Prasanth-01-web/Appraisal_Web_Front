 import { Card, Row, Col, Radio, Input, Button, Steps, Table, Dropdown, Select, Option,message } from 'antd'
import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled, DownOutlined} from '@ant-design/icons'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { render } from '@testing-library/react';


function RatingGeneralHead({userId}) {


  const [JobDomainKnowledgeRating, setJobDomainKnowlwdgeRating] = useState("")
  const [JobDomainKnowledgeRatingManager, setJobDomainKnowlwdgeRatingManager] = useState("")
  const [JobDomainKnowledgeRatingHead, setJobDomainKnowlwdgeRatingHead] = useState("")
  const [CommunicationRating, setCommunicationRating] = useState("")
  const [CommunicationRatingManager, setCommunicationRatingManager] = useState("")
  const [CommunicationRatingHead, setCommunicationRatingHead] = useState("")
  const [EffectivenessRating, setEffectivenessRating] = useState("")
  const [EffectivenessRatingManager, setEffectivenessRatingManager] = useState("")
  const [EffectivenessRatingHead, setEffectivenessRatingHead] = useState("")
  const [InitiativeRating, setInitiativeRating] = useState("")
  const [InitiativeRatingManager, setInitiativeRatingManager] = useState("")
  const [InitiativeRatingHead, setInitiativeRatingHead] = useState("")
  const [AchievementRating, setAchievementRating] = useState("")
  const [AchievementRatingManager, setAchievementRatingManager] = useState("")
  const [AchievementRatingHead, setAchievementRatingHead] = useState("")
  const [DisciplineRating, setDisciplineRating] = useState("")
  const [DisciplineRatingManager, setDisciplineRatingManager] = useState("")
  const [DisciplineRatingHead, setDisciplineRatingHead] = useState("")
  const [TimeManagementRating, setTimeManagementRating] = useState("")
  const [TimeManagementRatingManager, setTimeManagementRatingManager] = useState("")
  const [TimeManagementRatingHead, setTimeManagementRatingHead] = useState("")
  const [TeamworkRating, setTeamworkRating] = useState("")
  const [TeamworkRatingManager, setTeamworkRatingManager] = useState("")
  const [TeamworkRatingHead, setTeamworkRatingHead] = useState("")
  const [AdaptabilityRating, setAdaptabilityRating] = useState("")
  const [AdaptabilityRatingManager, setAdaptabilityRatingManager] = useState("")
  const [AdaptabilityRatingHead, setAdaptabilityRatingHead] = useState("")
  const [CustomerorientationRating, setCustomerorientationRating] = useState("")
  const [CustomerorientationRatingManager, setCustomerorientationRatingManager] = useState("")
  const [CustomerorientationRatingHead, setCustomerorientationRatingHead] = useState("")

  // console.log(JobDomainKnowledgerating,'rrrr');

  const dataSource = [
    {
      key: '1',
      GeneralAttributes: 'Job / Domain Knowledge',
      rating: <select className='Select-Input' onChange={(e) => { setJobDomainKnowlwdgeRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setJobDomainKnowlwdgeRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setJobDomainKnowlwdgeRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: '2',
      GeneralAttributes: 'Communication',
      rating: <select className='Select-Input' onChange={(e) => { setCommunicationRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager:<select className='Select-Input' onChange={(e) => { setCommunicationRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setCommunicationRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: '3',
      GeneralAttributes: 'Effectiveness',
      rating: <select className='Select-Input' onChange={(e) => { setEffectivenessRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setEffectivenessRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setEffectivenessRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "4",
      GeneralAttributes: "Initiative",
      rating: <select className='Select-Input' onChange={(e) => { setInitiativeRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setInitiativeRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setInitiativeRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "5",
      GeneralAttributes: 'Achievement Orientation',
      rating: <select className='Select-Input' onChange={(e) => { setAchievementRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setAchievementRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setAchievementRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "6",
      GeneralAttributes: "Discipline",
      rating: <select className='Select-Input' onChange={(e) => { setDisciplineRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setDisciplineRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setDisciplineRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "7",
      GeneralAttributes: 'Time Management',
      rating: <select className='Select-Input' onChange={(e) => { setTimeManagementRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager:<select className='Select-Input' onChange={(e) => { setTimeManagementRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setTimeManagementRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "8",
      GeneralAttributes: 'Team Work',
      rating: <select className='Select-Input' onChange={(e) => { setTeamworkRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setTeamworkRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setTeamworkRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "9",
      GeneralAttributes: 'Adaptability',
      rating: <select className='Select-Input' onChange={(e) => { setAdaptabilityRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setAdaptabilityRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setAdaptabilityRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    },
    {
      key: "10",
      GeneralAttributes: 'Customer Orientation',
      rating: <select className='Select-Input' onChange={(e) => { setCustomerorientationRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratingmanager:<select className='Select-Input' onChange={(e) => { setCustomerorientationRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      ratinghead: <select className='Select-Input' onChange={(e) => { setCustomerorientationRatingHead(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
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
      title: 'Rating (Yourself)',
      dataIndex: 'rating',
      key: 'rating',
      width: "15%",
    },
    {
      title: 'Rating (Manager)',
      dataIndex: 'ratingmanager',
      key: 'ratingmanager',
      width: "17%"
  
    },
    {
      title: 'Rating (Head)',
      dataIndex: 'ratinghead',
      key: 'ratinghead'
    }
  ];

  const handletyping = () => { }

  const navigate = useNavigate()

  const handleClickSave = () => {
    axios.post("http://192.168.29.223:3000/fact_general_attributes_2/create", {
      "userId":userId,
      "jobDomainknowledgeRating": JobDomainKnowledgeRating,
      "jobDomainKnowledgeRatingManager": JobDomainKnowledgeRatingManager,
      "jobDomainknowledgeRatingHead":JobDomainKnowledgeRatingHead,
      "communicationRating": CommunicationRating,
      "communicationRatingManager": CommunicationRatingManager,
      "communicationRatingHead":CommunicationRatingHead,
      "effectivenessRating": EffectivenessRating,
      "effectivenessRatingManager": EffectivenessRatingManager,
      "effectivenessRatingHead": EffectivenessRatingHead,
      "initiativeRating": InitiativeRating,
      "initiativeRatingManager": InitiativeRatingManager,
      "initiativeRatingHead": InitiativeRatingHead,
      "achievementOrientationRating": AchievementRating,
      "achievementOrientationRatingManager": AchievementRatingManager,
      "achievementOrientationRatingHead": AchievementRatingHead,
      "disciplineRating": DisciplineRating,
      "disciplineRatingManager": DisciplineRatingManager,
      "disciplineRatingHead": DisciplineRatingHead, 
      "timeManagementRating": TimeManagementRating,
      "timeManagementRatingManager": TimeManagementRatingManager,
      "timeManagementRatingHead": TimeManagementRatingHead,
      "teamWorkRating": TeamworkRating,
      "teamWorkRatingManager": TeamworkRatingManager,
      "teamWorkRatingHead": TeamworkRatingHead,
      "adaptabilityRating": AdaptabilityRating,
      "adaptabilityRatingManager": AdaptabilityRatingManager,
      "adaptabilityRatingHead": AdaptabilityRatingHead,
      "customerOrientationRating": CustomerorientationRating,
      "customerOrientationRatingManager": CustomerorientationRatingManager,
      "customerOrientationRatingHead": CustomerorientationRatingHead,

    }).then((res) => console.log(res, "kkk"))
    // message.success(' Key Result Area saved succesfully');
    // navigate('/training')
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

export default RatingGeneralHead