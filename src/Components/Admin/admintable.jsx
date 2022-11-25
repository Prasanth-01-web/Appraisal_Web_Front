import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Row, Col, Card, Input } from "antd";
import { useNavigate } from 'react-router';
import { SearchOutlined, CloseCircleFilled } from '@ant-design/icons';
function AdminTable({ userId }) {
  const [data, setdata] = useState([])
  const [input, setinput] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://192.168.29.223:3000/user/findAll").then((res) => {
      // setdata(res.data);
      setdata(res.data.data[0].user, "ttttt")

    })

  }, [userId])
  function Userview(value) {
    console.log(value)
    userId(value)

    navigate('/adminemp')
    // navigate('/empname')
  }

  const hanndleClickPrevious = () =>{
    navigate('/adminfo')
  }

  return (
    <>

      <div>
        <Row>
          <Col span={24}>
            <Card className="Card-1">
              <Row>
                <Col lg={24}>
                  <h2>Appraisal Form</h2>
                </Col>
              </Row>
              <Row>
                <Col lg={18}>
                  <h3>Key Result Area (self-rating)</h3>
                </Col>
                <Col lg={6}> <Input prefix={<SearchOutlined />} className="Search-Button" placeholder="Search" onChange={(e) => setinput(e.target.value)} />  </Col>
              </Row>

            </Card>
          </Col>
        </Row>
      </div> <br /><br />


      {/* <Row>
      <Col lg={3}></Col>
      <Col lg={18}>
      <table className="table">
        <thead>
          <tr className="table_tr">
            <td className="table_th ">S.No</td>
            <th className="table_th ">Emp.Name</th>
            <th className="table_th ">Emp.Id</th>
            <th className="table_th ">Role</th>
            <th className="table_th ">Select Employee</th>


          </tr>
        </thead>
        <tbody>
          {data.filter((user, index) => {
            // let Name=user.name.toLowerCase()

            // 
            if (input == '') {
              return user
            }
            else if (input == index + 1) {
              return user

            }

            else if (user.name.toLowerCase().match(input.toLowerCase())) {
              return user

            }


          }).map((user, index) =>(
            <>
            {userId(index+1)}
            <tr key={index} className="table_tr">
              <td className="table_td">{index + 1}</td>
              <td className="table_td">{user.name}</td>
              <td className="table_td">{user.username}</td>
              <td className="table_td">{user.email}</td>
              <td className="table_td"><Button onClick={()=> Userview(index + 1)}>View</Button></td>

            </tr>
            </>
          ))}
        </tbody>
      </table>
      </Col>
      <Col lg={3}></Col>
      </Row> <br/> <br/> */}







      <Row>
        <Col lg={3}></Col>
        <Col lg={18}>
          <table className="table">
            <thead>
              <tr className="table_tr">
                <td className="table_th ">S.No</td>
                <th className="table_th ">Emp.Name</th>
                <th className="table_th ">Emp.Id</th>
                <th className="table_th ">Role</th>
                <th className="table_th ">Select Employee</th>


              </tr>
            </thead>
            <tbody>
              {data.filter((user, index) => {
                // let Name=user.name.toLowerCase()

                // 
                if (input == '') {
                  return user
                }
                else if (user.userId.toLowerCase().match(input.toLowerCase())) {
                  return user

                }

                else if (user.userName.toLowerCase().match(input.toLowerCase())) {
                  return user

                }


              }).map((user, index) => (
                <>
                  {userId(index + 1)}
                  <tr key={index} className="table_tr">
                    <td className="table_td">{index + 1}</td>
                    <td className="table_td">{user.userName}</td>
                    <td className="table_td">{user.userId}</td>
                    <td className="table_td">{user.role}</td>
                    <td className="table_td"><Button onClick={() => Userview(user.userId)}>View</Button></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </Col>
        <Col lg={3}></Col>
      </Row> <br /> <br />

      <Row>
        <Col span={4}></Col>
        <Col span={13}><Button className='Save-and-Next-Button' onClick={hanndleClickPrevious}>Previous Step</Button></Col>
        <Col span={3}></Col>
        <Col span={4}></Col>
      </Row> <br /> <br />

    </>
  );
}



export default AdminTable;