import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/LoginForm/login';
import RatingUser from './Components/AppraisalForm/appraisalForm';
import AppraisalForm2 from './Components/AppraisalForm/appraisalForm2';
import AdminEmp from './Components/Admin/admin_emp'
import Training from './Components/Training/Training';
import ScheduleSlippage from './Components/SchedulSlippage/schedulSlippage';
import Employee from './Components/Employee/employee';
import { StateProvider } from './Components/reducer/stateprovider';
import reducer from './Components/reducer/reducer';
import ScheduleSlippage1 from './Components/SchedulSlippage/SchedulSlippage1';
import { initialstate } from './Components/reducer/reducer';
import {useState} from "react"
 import Empinfo from './Components/Employee/empinfo'
 import AdminTable from'./Components/Admin/admintable'
import Admininfo from './Components/Admin/admininfo';
import RatingManager from'./Components/Admin/adminrating'
import Rating2GeneralManager from './Components/Admin/admin2rating'
import RatingGeneralUser2 from './Components/Employee/employeerating2';
import Headinfo from './Components/Head/headinfo';
import RatingGeneralHead from './Components/Head/headrating'
import CompendencyRating from './Components/Compendency/compendency';
function App() {
  const [status, setstatus] = useState("")
  const[admi_emp,setadmi_emp]=useState("")
// console.log(admi_emp,"ooiii")
  return (
    <div className="App">
      <StateProvider initialState={initialstate} reducer={reducer} >
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login Setstatus={setstatus}/>}></Route>
        <Route path='/employeeinfo' element={<Empinfo userId={status}/>}></Route>
        <Route path='/adminfo' element={<Admininfo userId={status}/>}></Route>
        <Route path='/admintable' element={<AdminTable userId={setadmi_emp}/>}></Route>
        <Route path='/adminemp' element={<AdminEmp userId={admi_emp}/>}></Route>
        <Route path='/adminemprating' element={<RatingManager userId={admi_emp}/>}></Route>
        <Route path='/adminratting2' element={<Rating2GeneralManager userId={admi_emp}/>}></Route>

         <Route path='/empname' element={<Employee userId={status}/>}></Route>
        <Route path='/ratinguser' element={<RatingUser userId={status}/> }></Route>
        <Route path='/ratinguser2' element={<RatingGeneralUser2 userId={status}/> }></Route>    
        <Route path='/headinfo' element={<Headinfo userId={status}/> }></Route>
        <Route path='/headrating' element={<RatingGeneralHead userId={status}/> }></Route>
        <Route path='/appraisalform2' element={<AppraisalForm2 userId={status}/>}></Route>
          <Route path='/training' element={<Training/>}></Route>
          <Route path='compendency' element={<CompendencyRating/>}></Route>
        {/* <Route path='/schedul' element={<ScheduleSlippage/>}></Route>
          <Route path='/schedul1' element={<ScheduleSlippage1/>}></Route> */}
        </Routes>
      </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
