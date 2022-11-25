// import React, { useState, useEffect } from 'react';
import { Col, Layout, Row, Card, Button } from 'antd';
import img from "../../assests/zealeye logo icon.png"
import { InfoCircleFilled, CloseCircleFilled, PlusCircleFilled } from '@ant-design/icons';
import JqxKnob from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxknob';
import { useState } from 'react';
import { useNavigate } from 'react-router';

function ScheduleSlippage() {
    const navigate = useNavigate()

    const handleClickSave = () => {
        navigate('/schedul1')
    }

    const handleClickPrevious = () => {
        navigate('/training')
    }


    const { Header, Footer, } = Layout;
    const [userrating, setuserrating] = useState("")
    const marks = {
        colorProgress: '#053B58', colorRemaining: '#',
        majorInterval: 1, majorSize: '1%', minorInterval: 5,
        offset: '75%', size: '1%', thickness: 2
    };
    const labels = {
        formatFunction: (label) => {
            if (label !== '0' && label !== '10') {
                return label;
            }
            return label === '0' ? '0' : label === '0' ? '10' : '10';
        },
        offset: '88%', step: 0, visible: true
    };
    const progressBar = {
        offset: '0%', size: '70%',
    };
    const pointer = {
        offset: '40%', size: '53%',
        style: { fill: '#00000029', },
        thickness: 30, type: 'arrow'
    };
    const spinner = {
        innerRadius: '60%',

        outerRadius: '57%',
        style: { fill: '#053B58', stroke: '#053B58', inner: "#000000" }
    };
    const dial = {
        innerRadius: '0%',
        outerRadius: '41%',
        style: {
            fill: '#053B58', stroke: '#000000', shadowColor: '#000000',
            shadowBlur: "90%",
            shadowOffsetX: "12",
            shadowOffsetY: "12"
        }
    };

    return (
        <div className='Slipepagebody'>
            <Layout className='layout'>
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
                <Card className='cardScheduleSlippage'>
                    <Row>
                        <Col span={4}><h2>Schedule Slippage <InfoCircleFilled className='icon-2' /></h2></Col>
                        <Col offset={19}><h2 className='icon'><CloseCircleFilled className='icon' /></h2></Col>
                    </Row>
                    <Row>
                        <Col span={4}><h4>rating guideline <InfoCircleFilled className='icon-1' /></h4></Col>
                        <Col offset={19}><h2 className='svg'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 47.351 47.351">
                            <path id="Icon_material-comment" data-name="Icon material-comment" d="M50.327,7.735A4.729,4.729,0,0,0,45.616,3H7.735A4.749,4.749,0,0,0,3,7.735v28.41A4.749,4.749,0,0,0,7.735,40.88H40.88l9.47,9.47ZM40.88,31.41H12.47V26.675H40.88Zm0-7.1H12.47V19.573H40.88Zm0-7.1H12.47V12.47H40.88Z" transform="translate(-3 -3)" fill="#315870" />
                        </svg></h2></Col>
                    </Row>
                    <h1>{userrating}</h1>
                    <div className='image-fit'>
                        <b className='Gauge'> <Row>

                            <Col className='logo' offset={8}>
                                <JqxKnob
                                    value={1} min={1} max={10}
                                    startAngle={120} endAngle={480} step={1}
                                    dragStartAngle={120} dragEndAngle={420}
                                    snapToStep={true} rotation={'clockwise'}
                                    marks={marks} labels={labels}
                                    progressBar={progressBar} pointer={pointer}
                                    spinner={spinner} dial={dial}
                                    onChange={(e) => {
                                        // console.log(e.args.value, "hhhhhh")
                                        setuserrating(e.args.value)
                                        // setvalue(e.target.value)

                                    }}

                                />

                                <img src={img} />

                            </Col>
                        </Row></b>
                    </div>

                    <Row>
                        <Col>
                            <Button className='Schedul-Plus-Icon'><PlusCircleFilled /></Button>
                        </Col>
                    </Row>

                </Card>
                <Footer className='footer'>

                    <Row>
                        <Col span={4}></Col>
                        <Col span={13}><Button className='Save-and-Next-Button' onClick={handleClickPrevious}>Previous Step</Button></Col>
                        <Col span={3}><Button className='Save-and-Next-Button' onClick={handleClickSave}>Save and Next</Button></Col>
                        <Col span={4}></Col>
                    </Row>

                </Footer>
            </Layout>
        </div>
    )
}

export default ScheduleSlippage
