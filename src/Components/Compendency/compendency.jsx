import { Card, Row, Col, Radio, Input, Button, Steps, Table ,message} from 'antd'
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router';
import axios from "axios"



function CompendencyRating({userId}) {

    const [OwnerShipRatingNumeric, setOwnerShipRatingNumeric] = useState("")
    const [ResourcefulnessNumeric, setResourcefulnessNumeric] = useState("")
    const [AttendanceNumeric, setAttendanceNumeric] = useState("")
    const [PunctualityNumeric, setPunctualityNumeric] = useState("")
    const [ResponsivenessNumeric, setResponsivenessNumeric] = useState("")


    const handleClick = () => {
        axios.post("http://karsha-devops.ckrnx54pl5hy.eu-west-2.rds.amazonaws.com:3000/fact_employee_competency_rating/final ")
        .then((res)=> console.log(res,"jjj"))
    }

//    useEffect(()=>{

//     axios.post("http://karsha-devops.ckrnx54pl5hy.eu-west-2.rds.amazonaws.com:3000/fact_employee_competency_rating/final ").then((res)=> console.log(res,"jjj"))
//    },[])

  const dataSource = [
    {
      key: '1',
      compendencyrating: 'Ownership Rating',
      numericrating: <select className='Select-Input' onChange={(e)=> setOwnerShipRatingNumeric(e.target.value)}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option>  </select>,
      weightedscore: <Input className='Compendency-Input' maxLength={1}/>,
    },
    {
      key: '2',
      compendencyrating: 'Resourcefulness',
      numericrating: <select className='Select-Input' onChange={(e)=> setResourcefulnessNumeric(e.target.value)}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option>  </select>,
      weightedscore: <Input className='Compendency-Input' maxLength={1}/>,
    },
    {
      key: '3',
      compendencyrating: 'Attendance',
      numericrating: <select className='Select-Input' onChange={(e)=> setAttendanceNumeric(e.target.value)}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option>  </select>,
      weightedscore: <Input className='Compendency-Input' maxLength={1}/>,
    },
    {
      key: "4",
      compendencyrating: "Punctuality",
      numericrating: <select className='Select-Input' onChange={(e)=> setPunctualityNumeric(e.target.value)}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select>,
      weightedscore: <Input className='Compendency-Input' maxLength={1} />,
    },
    {
      key: "5",
      compendencyrating: 'Responsiveness',
      numericrating: <select className='Select-Input' onChange={(e)=> setResponsivenessNumeric(e.target.value)}> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> </select>,
      weightedscore: <Input className='Compendency-Input' maxLength={1}/>,
    },
    {
        key: "6",
        compendencyrating: 'Total Section Rating',
        weightedscore: <Input className='Compendency-Input' maxLength={1}/>,
      },
  ];
  
  
  
  const columns = [
    {
      title: 'Compendency Rating',
      dataIndex: 'compendencyrating',
      key: 'compendencyrating',
      width: "50%"
    },
    {
      title: 'Numeric Rating ',
      dataIndex: 'numericrating',
      key: 'numericrating',
      width: "17%"
    },
    {
      title: 'Weighted Score',
      dataIndex: 'weightedscore',
      key: 'weightedscore',
      width: "13%"
  
    },
  ];


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
              <h3>Compendency Rating</h3>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-2'>
              <Row>
                <Col span={3}></Col>
                <Col span={18}>
                  <Table dataSource={dataSource} columns={columns} pagination={false} className="appraisal-form-table" />
                </Col>
                <Col span={3}></Col>
              </Row> <br />

              <Row>
                <Col span={4}></Col>
                <Col span={13}><Button className='Save-and-Next-Button'>Previous Step</Button></Col>
                <Col span={3}><Button className='Save-and-Next-Button' onClick={handleClick}>Save and Next</Button></Col>
                <Col span={4}></Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CompendencyRating
