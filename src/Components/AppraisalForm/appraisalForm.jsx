import { Card, Row, Col, Radio, Input, Button, Steps, Table ,message} from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router';
import axios from "axios"



function RatingUser({userId}) {
  const [ScheduleSlippageRating, setScheduleSlippageRating] = useState("")
  const [ScheduleSlippageRatingManager, setScheduleSlippageRatingmanager] = useState("")
  const [ScheduleSlippageRatinHead, setScheduleSlippageRatinghead] = useState("")
  const [EffortVarianceRating, setEffortVarianceRating] = useState("")
  const [EffortVarianceRatingManager, setEffortVarianceRatingmanager] = useState("")
  const [EffortVarianceRatingHaed, setEffortVarianceRatinghaead] = useState("")
  const [AdherencetoSLARating, setAdherencetoSLARating] = useState("")
  const [AdherencetoSLARatingManager, setAdherencetoSLARatingManager] = useState("")
  const [AdherencetoSLARatingHead, setAdherencetoSLARatinghead] = useState("")
  const [PostShipmentDefectRating, setPostShipmentDefectRating] = useState("")
  const [PostShipmentDefectRatingManager, setPostShipmentDefectRatingManager] = useState("")
  const [PostShipmentDefectRatingHead, setPostShipmentDefectRatinghead] = useState("")
  const [PostDevelopmentQualityRating, setPostDevelopmentQualityRating] = useState("")
  const [PostDevelopmentQualityRatingManager, setPostDevelopmentQualityRatingManager] = useState("")
  const [PostDevelopmentQualityRatingHead, setPostDevelopmentQualityRatinghead] = useState("")
  const [KnowledgeEnhancementRating, setKnowledgeEnhancementRating] = useState("")
  const [KnowledgeEnhancementRatingManager, setKnowledgeEnhancementRatingManager] = useState("")
  const [KnowledgeEnhancementRatingHead, setKnowledgeEnhancementRatinghead] = useState("")
  const [ProcessComplianceRating, setProcessComplianceRating] = useState("")
  const [ProcessComplianceRatingManager, setProcessComplianceRatingManager] = useState("")
  const [ProcessComplianceRatingHead, setProcessComplianceRatinghead] = useState("")


  const dataSource = [
    {
      key: '1',
      KeyResultArea: 'Schedule Slippage',
      rating: <select className='Select-Input' onChange={(e) => { setScheduleSlippageRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: '2',
      KeyResultArea: 'Effort Variance',
      rating: <select className='Select-Input' onChange={(e) => { setEffortVarianceRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: '3',
      KeyResultArea: 'Adherence to SLAs',
      rating: <select className='Select-Input' onChange={(e) => { setAdherencetoSLARating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "4",
      KeyResultArea: "Post Shipment Defect Management",
      rating: <select className='Select-Input' onChange={(e) => { setPostShipmentDefectRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "5",
      KeyResultArea: 'Post Development Quality',
      rating: <select className='Select-Input' onChange={(e) => { setPostDevelopmentQualityRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "6",
      KeyResultArea: "Knowledge Enhancement",
      rating: <select className='Select-Input' onChange={(e) => { setKnowledgeEnhancementRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "7",
      KeyResultArea: 'Process Compliance',
      rating: <select className='Select-Input' onChange={(e) => { setProcessComplianceRating(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
    }
  ];
  
  
  
  const columns = [
    {
      title: 'Key Result Area (Self-Rating)',
      dataIndex: 'KeyResultArea',
      key: 'KeyResultArea',
      width: "45%"
    },
    {
        title: 'Rating (Yourself)',
        dataIndex: 'rating',
        key: 'rating',
        width: "17%"
      },
  ];


  const navigate = useNavigate()

  const handleClickSave = () => {
    message.success('Personal Information saved succesfully');
    axios.post("http://192.168.29.223:3000/fact_general_attributes_2/create", {
      "userId":userId,
      "scheduleSlippageRating": ScheduleSlippageRating,
      "scheduleSlippageRatingManager": ScheduleSlippageRatingManager,
      "scheduleSlippageRatingHead": ScheduleSlippageRatinHead,
      "effortVarianceRating": EffortVarianceRating,
      "effortVarianceRatingManager": EffortVarianceRatingManager,
      "effortVarianceRatingHead" : EffortVarianceRatingHaed,
      "adherenceToSlasRating": AdherencetoSLARating,
      "adherenceToSlasRatingManager":AdherencetoSLARatingManager,
      "adherenceToSlasRatingHead": AdherencetoSLARatingHead,
      "postShipmentDefectManagementRating": PostShipmentDefectRating,
      "postShipmentDefectManagementRatingManager": PostShipmentDefectRatingManager,
      "postShipmentDefectManagementRatingHead": PostShipmentDefectRatingHead,
      "postDevelopmentQualityRating": PostDevelopmentQualityRating,
      "postDevelopmentQualityRatingManager":PostDevelopmentQualityRatingManager,
      "postDevelopmentQualityRatingHead": PostDevelopmentQualityRatingHead,
      "knowledgeEnhancementRating":KnowledgeEnhancementRating,
      "knowledgeEnhancementRatingManager":KnowledgeEnhancementRatingManager,
      "knowledgeEnhancementRatingHaed": KnowledgeEnhancementRatingHead,
      "processComplianceRating": ProcessComplianceRating,
      "processComplianceRatingRatingManager": ProcessComplianceRatingManager,
      "processComplianceRatingHead": ProcessComplianceRatingHead
  })

    navigate('/ratinguser2')
  }

  const handleClickPrevious = () => {
    navigate('/employeeinfo')


  } 

  const NumberPattern = (e) => {
    var regex = new RegExp("[0-9]");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(str)) {
      e.preventDefault(); 
     }
   };

  return (
    <div className='Appraisal-Form'>
      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-1'>
              <h2>Appraisal Form</h2>
              <h3>Key Result Area (self-rating)</h3>
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

export default RatingUser