import { Card, Row, Col, Radio, Input, Button, Steps, Table ,message} from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router';
import axios from "axios"



function RatingManager({userId}) {


  const [ScheduleSlippageRating, setScheduleSlippageRating] = useState([])
  const [Schedulerating, setSchedulrating] = useState()
  const [ScheduleSlippageRatingManager, setScheduleSlippageRatingmanager] = useState("")
  const [EffortVarianceRating, setEffortVarianceRating] = useState("")
  const [EffortVarianceRatingManager, setEffortVarianceRatingmanager] = useState("")
  const [AdherencetoSLARating, setAdherencetoSLARating] = useState("")
  const [AdherencetoSLARatingManager, setAdherencetoSLARatingManager] = useState("")
  const [PostShipmentDefectRating, setPostShipmentDefectRating] = useState("")
  const [PostShipmentDefectRatingManager, setPostShipmentDefectRatingManager] = useState("")
  const [PostDevelopmentQualityRating, setPostDevelopmentQualityRating] = useState("")
  const [PostDevelopmentQualityRatingManager, setPostDevelopmentQualityRatingManager] = useState("")
  const [KnowledgeEnhancementRating, setKnowledgeEnhancementRating] = useState("")
  const [KnowledgeEnhancementRatingManager, setKnowledgeEnhancementRatingManager] = useState("")
  const [ProcessComplianceRating, setProcessComplianceRating] = useState("")
  const [ProcessComplianceRatingManager, setProcessComplianceRatingManager] = useState("")

  // console.log(ScheduleSlippageRating,"data1");

  const dataSource = [
    {
      key: '1',
      KeyResultArea: 'Schedule Slippage',
      rating: <Input className='Admin-Rating-Input' value={ScheduleSlippageRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setScheduleSlippageRatingmanager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: '2',
      KeyResultArea: 'Effort Variance',
      rating: <Input className='Admin-Rating-Input' value={EffortVarianceRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setEffortVarianceRatingmanager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: '3',
      KeyResultArea: 'Adherence to SLAs',
      rating: <Input className='Admin-Rating-Input' value={AdherencetoSLARating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setAdherencetoSLARatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
      
    },
    {
      key: "4",
      KeyResultArea: "Post Shipment Defect Management",
      rating: <Input className='Admin-Rating-Input' value={PostShipmentDefectRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setPostShipmentDefectRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "5",
      KeyResultArea: 'Post Development Quality',
      rating: <Input className='Admin-Rating-Input' value={PostDevelopmentQualityRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setPostDevelopmentQualityRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "6",
      KeyResultArea: "Knowledge Enhancement",
      rating: <Input className='Admin-Rating-Input' value={KnowledgeEnhancementRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setKnowledgeEnhancementRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
    },
    {
      key: "7",
      KeyResultArea: 'Process Compliance',
      rating: <Input className='Admin-Rating-Input' value={ProcessComplianceRating}/>,
      ratingmanager: <select className='Select-Input' onChange={(e) => { setProcessComplianceRatingManager(e.target.value) }}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option>  </select>,
     
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
    {
      title: 'Rating (Manager)',
      dataIndex: 'ratingmanager',
      key: 'ratingmanager',
      width: "17%"
  
    },
  ];


  const navigate = useNavigate()

  useEffect(() =>{
    axios.get("http://192.168.29.223:3000/fact_key_result_area/findOne",{"userId":userId})
    .then((res) => {
      const data = res.data;
      // console.log(data,"data")
      setScheduleSlippageRating(data[0].scheduleSlippageRating)
      setEffortVarianceRating(data[0].effortVarianceRating)
      setAdherencetoSLARating(data[0].adherenceToSlasRating)
      setPostShipmentDefectRating(data[0].postShipmentDefectManagementRating)
      setPostDevelopmentQualityRating(data[0].postDevelopmentQualityRating)
      setKnowledgeEnhancementRating(data[0].knowledgeEnhancementRating)
      setProcessComplianceRating(data[0].processComplianceRating)
      // console.log(rating,"rating")
    })
  },[userId])


  console.log(ScheduleSlippageRating,'ScheduleSlippageRating');

  const handleClickSave = () => {
    message.success('Personal Information saved succesfully');
    axios.post("http://192.168.29.223:3000/fact_general_attributes_2/create", {
      "userId":userId,
      "scheduleSlippageRatingManager": ScheduleSlippageRatingManager,
      "effortVarianceRating": EffortVarianceRating,
      "effortVarianceRatingManager": EffortVarianceRatingManager,
      "adherenceToSlasRating": AdherencetoSLARating,
      "adherenceToSlasRatingManager":AdherencetoSLARatingManager,
      "postShipmentDefectManagementRating": PostShipmentDefectRating,
      "postShipmentDefectManagementRatingManager": PostShipmentDefectRatingManager,
      "postDevelopmentQualityRating": PostDevelopmentQualityRating,
      "postDevelopmentQualityRatingManager":PostDevelopmentQualityRatingManager,
      "knowledgeEnhancementRating":KnowledgeEnhancementRating,
      "knowledgeEnhancementRatingManager":KnowledgeEnhancementRatingManager,
      "processComplianceRating": ProcessComplianceRating,
      "processComplianceRatingRatingManager": ProcessComplianceRatingManager,
  })
    message.success("Rating Save Successfully")
    navigate('/adminratting2')
  }

  const handleClickPrevious = () => {
    navigate('/adminemp')


  } 

  // const NumberPattern = (e) => {
  //   var regex = new RegExp("[0-9]");
  //   var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  //   if (!regex.test(str)) {
  //     e.preventDefault(); 
  //    }
  //  };

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

export default RatingManager