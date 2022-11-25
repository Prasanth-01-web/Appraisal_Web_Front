import { Card, Row, Col, Radio, Input, Upload, Button, Table, message, Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { InfoCircleFilled, CloseCircleFilled, DeleteFilled, PlusSquareFilled, PlusCircleFilled } from '@ant-design/icons'
import axios from 'axios';
import formData from "form-data"

function Training() {

  const [addtableone, setAddTableOne] = useState([])
  const [addtabletwo, setAddTableTwo] = useState([])
  const [addtablethree, setAddTableThree] = useState([])


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleAddOne = () => {
    let AddinputOne = [...addtableone, []]
    setAddTableOne(AddinputOne)
    console.log(AddinputOne)
  }

  const handleAddTwo = () => {
    let AddinputTwo = [...addtabletwo, []]
    setAddTableTwo(AddinputTwo)
    console.log(AddinputTwo)
  }

  const handleAddThree = () => {
    let AddinputThree = [...addtablethree, []]
    setAddTableThree(AddinputThree)
    console.log(AddinputThree)
  }

  const handleDeleteOne = (index) => {
    let Deleteinputone = [addtableone]
    Deleteinputone.splice(index, 1)
    setAddTableOne(Deleteinputone)
    console.log(index,'deleteIcon')
  }


  // const handleClickUpload = () => {
  //   axios
  //   .post("http://192.168.29.223:3000/fact_qualification_added/upload",{


  //   })

  //   .then((res) => console.log("hai"))
  // }

  return (
    <div className='Training-Form'>
      <div>
        <Row>
          <Col span={24}>
            <Card className='Card-1'>
              <h2>Appraisal Form</h2>
              <h3>Trainings & Qualifications</h3>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <div><br />
            <Row>
              <Col lg={{ span: 22, offset: 1 }}><p className='Training-Form-text'>List of Training programs attended during the current year</p></Col>
              <Col lg={1}> <PlusCircleFilled className='Training-Form-Icon' onClick={handleAddOne} /></Col>
            </Row>
          </div>
          <div className='Training-Row-1'> <br />
            <Row>
              <Col lg={{ span: 8, offset: 1 }}><p className='Training-Text'>Title of the Programme</p></Col>
              <Col lg={8}><p className='Training-Text'>Duration</p></Col>
              <Col lg={7}><p className='Training-Text'>Trainer details</p></Col>
            </Row>


            <Row >
              <Col lg={{ span: 8, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
              <Col lg={8}><Input className='Training-Form-Input' required /></Col>
              <Col lg={6}><Input className='Training-Form-Input' required /></Col>
              <Col lg={1}></Col>
            </Row> <br />

            {addtableone.map((index) => {
              return (
                <>
                
                  <Row>
                    <Col lg={{ span: 8, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={8}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={6}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={1}><DeleteFilled className='Training-Form-Delete-Icon' onClick={() => handleDeleteOne(index)}/></Col>
                  </Row> <br />
                </>
              )
            })}
          </div>

          <div><br />
            <Row>
              <Col lg={{ span: 22, offset: 1 }}><p className='Training-Form-text'>List of Training programs conducted during the current year: 2021- 2022</p></Col>
              <Col lg={1}> <PlusCircleFilled className='Training-Form-Icon' onClick={handleAddTwo} /></Col>
            </Row>
          </div>

          <div className='Training-Row-1'> <br />
            <Row>
              <Col lg={{ span: 8, offset: 1 }}><p className='Training-Text'>Title of the Programme</p></Col>
              <Col lg={8}><p className='Training-Text'>Month</p></Col>
              <Col lg={7}><p className='Training-Text'>Levels/Participants Covered</p></Col>
            </Row>


            <Row >
              <Col lg={{ span: 8, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
              <Col lg={8}><Input className='Training-Form-Input' required /></Col>
              <Col lg={6}><Input className='Training-Form-Input' required /></Col>
              <Col lg={1}></Col>
            </Row> <br />

            {addtabletwo.map((index) => {
              return (
                <div>
                  <Row>
                    <Col lg={{ span: 8, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={8}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={6}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={1}><DeleteFilled className='Training-Form-Delete-Icon' /></Col>
                  </Row> <br />
                </div>
              )
            })}
          </div>

          <div><br />
            <Row>
              <Col lg={{ span: 22, offset: 1 }}><p className='Training-Form-text'>Qualification(s) - Professional/Academic added during the current year</p></Col>
              <Col lg={1}> <PlusCircleFilled className='Training-Form-Icon' onClick={handleAddThree} /></Col>
            </Row>
          </div>


          <div className='Training-Row-1'> <br />
            <Row>
              <Col lg={{ span: 5, offset: 1 }}><p className='Training-Text'>Qualification/Certification Title</p></Col>
              <Col lg={6}><p className='Training-Text'>Institute/University</p></Col>
              <Col lg={6}><p className='Training-Text'>Percentage</p></Col>
              <Col lg={4}> <p className='Training-Text'>Upload Certificates</p></Col>
            </Row>


            <Row >
              <Col lg={{ span: 5, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
              <Col lg={6}><Input className='Training-Form-Input' required /></Col>
              <Col lg={6}><Input className='Training-Form-Input' required /></Col>
              <Col lg={5}> <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload> </Col>
              <Col lg={1}></Col>
            </Row> <br />

            {addtablethree.map(() => {
              return (
                <>
                  <Row >
                    <Col lg={{ span: 5, offset: 1 }}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={6}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={6}><Input className='Training-Form-Input' required /></Col>
                    <Col lg={5}> <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload> </Col>
                    <Col lg={1}><DeleteFilled className='Training-Form-Delete-Icon'/></Col>
                  </Row> <br/>
                </>
              )
            })}
          </div> <br />

          <div><br />
            <Row>
              <Col lg={{ span: 23, offset: 1 }}><p className='Training-Form-text'>Trainings required for improvement / career development</p></Col>
            </Row>
          </div>

          <div className='Training-Row-1'> <br />
            <Row>
              <Col lg={{ span: 11, offset: 1 }}><p className='Training-Text'>APPRAISEE'S COMMENTS</p></Col>
              <Col lg={12}><p className='Training-Text'>APPRAISER’S COMMENTS</p></Col>
            </Row>


            <Row >
              <Col lg={{ span: 11, offset: 1 }}><Input className='Training-Form-Input-2' required /></Col>
              <Col lg={11}><Input className='Training-Form-Input-2' required /></Col>
              <Col lg={1}></Col>
            </Row> <br />
          </div> <br /> <br />

          <div>
            <Row>
              <Col lg={{ span: 13, offset: 11 }}><Button className='Save-and-Next-Button' htmlType='submit'>Submit</Button></Col>
            </Row>
          </div> <br />
        </Form>
      </div>
    </div>
  )
}

export default Training