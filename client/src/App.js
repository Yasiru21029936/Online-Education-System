import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Navbar from './components/Navbar'
import Staff from './pages/Staff_Management/Staff';

import BillPayment from './pages/financial_Management/BillPayment';
import Payments from './pages/financial_Management/Payments';
import Classfees from './pages/financial_Management/Classfees';
import Salary from './pages/financial_Management/Salary';
import OwnerS from './pages/financial_Management/OwnerS';
import FinancialAnalysis from './pages/financial_Management/FinancialAnalysis';

import SupportDesk from './pages/Support_Service/SupportDesk';
import Ticket from './pages/Support_Service/ticket';

import Profile from './pages/Staff_Management/Profile';
import Manage from './pages/Staff_Management/Manage';
import Reports from './pages/Staff_Management/Reports';
// import Add from './pages/Staff_Management/Add';
import UpdateStaff from './pages/Staff_Management/UpdateStaff';


import Assignment from './pages/AssignmentManagement/Assignment';
import AddAssignment from './pages/AssignmentManagement/AddAssignment';
import ManageAssignment from './pages/AssignmentManagement/ManageAssignment';
import EditAssignment from './pages/AssignmentManagement/EditAssignment';
import SubmitionPage from './pages/AssignmentManagement/SubmitionPage';
import MarkSheet from './pages/AssignmentManagement/MarkSheet';
import AssignmentResult from './pages/AssignmentManagement/AssignmentResult';
import AllSubmitions from './pages/AssignmentManagement/AllSubmitions';
import GradeAssignments from './pages/AssignmentManagement/GradeAssignments';
import SubmitAssignment from './pages/AssignmentManagement/SubmitAssignment';

import './Styles/main.css'
import Quiz from './pages/Quiz_Management/Quiz';
import QuizAnalysis from './pages/Quiz_Management/QuizAnalysis';
import QuizUpload from './pages/Quiz_Management/QuizUpload';
import QuizResults from './pages/Quiz_Management/QuizResults';
import QuizEdit from './pages/Quiz_Management/QuizEdit';
import InsertQuiz from './components/Quiz_Management/InsertQuiz';
import EditQuiz from './components/Quiz_Management/EditQuiz';

import Login from './pages/Registration_Management/Login'
import RegistrationForm_st from './pages/Registration_Management/RegistrationForm_st'
import RegistrationForm_sth from './pages/Registration_Management/RegistrationForm_st'
import RegistrationForm_te from './pages/Registration_Management/RegistrationForm_te'

import Forgetpw from './pages/Registration_Management/Forgetpw';
import Forgetpw_reset from './pages/Registration_Management/Forgetpw_reset';
import BillManagement from './pages/financial_Management/BillManagement';



import Userprofile from './pages/Registration_Management/Userprofile';
import EditUserProfile from './pages/Registration_Management/EditUserProfile';
// import UpdateProp from './pages/Registration_Management/UpdateProp';


import Classes from './pages/Module_Management/Classes';
import AddClass from './pages/Module_Management/AddClass';
import AddNotes from './pages/Module_Management/AddNotes';
import AddRecordings from './pages/Module_Management/AddRecordings';
import AddNotice from './pages/Module_Management/AddNotice';
import EditClass from './pages/Module_Management/EditClass';
import UpdateClass from './pages/Module_Management/UpdateClass';
import ModulePage from './pages/Module_Management/ModulePage';
import ClassesList from './pages/Module_Management/ClassesList';


import Attendance from './pages/Attendance_Management/Attendance';
import Attendanceform from './pages/Attendance_Management/Attendanceform';


import Error404 from './pages/Error404';
import QuizDisplay from './pages/Quiz_Management/QuizDisplay';
import QuizDetails from './pages/Quiz_Management/QuizDetails';
import ManageQuiz from './pages/Quiz_Management/ManageQuiz';

import Admindel from './pages/Registration_Management/Admindel';
import StProfile from './pages/Registration_Management/StProfile';
import ChangePw from './pages/Registration_Management/ChangePw';
import Footer from './components/Footer';
import HandleTeachers from './pages/Staff_Management/HandleTeachers';
import ProvideLogin from './pages/Staff_Management/ProvideLogin';
import AddNotices from './pages/Module_Management/AddNotice';
import UpdateProp from './pages/Registration_Management/UpdateProp';


function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          {/* Basic */}
          <Route exact path="/"  element = {<Home/>}/>

          {/* Payment */}
          <Route exact path="/Payments" element = {<Classfees/>}/>
          <Route exact path="/Payments/Utility" element = {<BillManagement/>}/>
          <Route exact path="/Payments/Utility/AddNew" element = {<BillPayment/>}/>
          <Route exact path="/Payments/Classfees" element = {<Classfees/>}/>
          <Route exact path="/Payments/Salary" element = {<Salary/>}/>
          <Route exact path="/Payments/OwnerS" element = {<OwnerS/>}/>
          <Route exact path="/Payments/Analysis" element = {<FinancialAnalysis/>}/>

          {/* Staff */}
          <Route exact path="/Staff" element = {<Manage/>}/>
          <Route exact path="/Staff/Profile" element = {<Profile/>}/>
          <Route exact path="/Staff/Edit" element = {<Manage/>}/>
          <Route exact path="/Staff/Reports" element = {<Reports/>}/>
          {/* <Route exact path="/Staff/Add" element = {<Add/>}/> */}
          <Route exact path="/Edit/UpdateStaff" element = {<UpdateStaff/>}/>
          <Route exact path="/Staff/TeacherHandle" element = {<HandleTeachers/>}/>
          <Route exact path="/Staff/ProvideLogin" element = {<ProvideLogin/>}/>

          {/* Quiz */}
          <Route exact path="/Quiz" element = {<QuizUpload/>}/>
          <Route exact path="/Quiz_Management/QuizAnalysis" element = {<QuizAnalysis/>}/>
          <Route exact path="/Quiz_Management/QuizUpload" element = {<QuizUpload/>}/>
          <Route exact path="/Quiz_Management/QuizResults" element = {<QuizResults/>}/>
          <Route exact path="/Quiz_Management/QuizEdit" element = {<QuizEdit/>}/>
          <Route exact path="Quiz_Management/QuizUpload/InsertQuiz" element = {<InsertQuiz/>}/>
          <Route exact path="Quiz_Management/QuizUpload/EditQuiz" element = {<EditQuiz/>}/>
          <Route exact path="Quiz_Management/QuizDisplay" element = {<QuizDisplay/>}/>
          <Route exact path="Quiz_Management/QuizDetails" element = {<QuizDetails/>}/>
          <Route exact path="/Quiz_Management/QuizEdit/manageQuiz" element = {<ManageQuiz/>}/>

          {/* Assignment */}
          <Route exact path="/Assignment" element = {<Assignment/>}/>
          <Route exact path="/Assignment/AddAssignment" element = {<AddAssignment/>}/>
          <Route exact path="/Assignment/ManageAssignment" element = {<ManageAssignment/>}/>
          <Route exact path="/Assignment/EditAssignment" element = {<EditAssignment/>}/>
          <Route exact path="/SubmitAssignment/SubmitionPage" element = {<SubmitionPage/>}/>
          <Route exact path="/Assignment/AssignmentResult" element = {<AssignmentResult/>}/>
          <Route exact path="/Assignment" element = {<Assignment/>}/>
          <Route exact path="/Assignment/AddAssignment" element = {<AddAssignment/>}/>
          <Route exact path="/ManageAssignment/EditAssignment" element = {<EditAssignment/>}/>
          <Route exact path="/Assignment/MarkSheet" element = {<MarkSheet/>}/>
          <Route exact path="/AssignmentResults/AllSubmitions" element = {<AllSubmitions/>}/>
          <Route exact path="/AssignmentResults/GradeAssignments" element = {<GradeAssignments/>}/>
          
          <Route exact path="/Assignment/SubmitionPage" element = {<SubmitionPage/>}/>
          <Route exact path="/ModulePage/SubmitAssignment" element = {<SubmitAssignment/>}/>
          
          {/* Module */}
          {/* <Route exact path="/Classes/AddClass" element = {<Classes/>}/> */}
          <Route exact path="/Classes/AddClass" element = {<AddClass/>}/>
          <Route exact path="/Classes/EditClass" element = {<EditClass/>}/>
          <Route exact path="/Classes/UpdateClass" element = {<UpdateClass/>}/>
          <Route exact path="/Classes/AddNotes" element = {<AddNotes/>}/>
          <Route exact path="/Classes/ModulePage" element = {<ModulePage/>}/>
          <Route exact path="/Classes/ClassesList" element = {<ClassesList/>}/>
          <Route exact path="/Classes/AddRecordings" element = {<AddRecordings/>}/>
          <Route exact path="/Classes/AddNotice" element = {<AddNotice/>}/>
          <Route exact path="/EditClass/UpdateClass" element = {<UpdateClass/>}/>
          

          {/* Support Service */}
          <Route exact path="/SupportService" element = {<SupportDesk/>}/>
          <Route exact path="/Support_Service/SupportDesk/Ticket" element = {<Ticket/>}/>

          {/* Registration */}
          <Route exact path="/Login" element = {<Login/>}/>
          <Route exact path="/RegisterStudent" element = {<RegistrationForm_st/>}/>
          <Route exact path="/Home/RegisterStudent" element = {<RegistrationForm_sth/>}/>
          <Route exact path="/RegisterTeacher" element = {<RegistrationForm_te/>}/>
          <Route exact path="/ForgetPassword" element = {<Forgetpw/>}/>
          <Route exact path="/ForgetResetPassword" element = {<Forgetpw_reset/>}/>
          <Route exact path="/Userprofile" element = {<Userprofile/>}/>
          <Route exact path="/UserProfile/EditUserProfile" element = {<EditUserProfile/>}/>
          <Route exact path="/Admin" element = {<Admindel/>}/>
          <Route exact path="/StProfile" element = {<StProfile/>}/>
          <Route exact path="/ChangePassword" element = {<ChangePw/>}/>
          <Route exact path="/UpdateUserProfile" element = {<UpdateProp/>}/>

          
          {/* Attendence */}
          <Route exact path="/Attendance" element = {<Attendance/>}/>
          <Route exact path="/Attendance_Management/Attendanceform" element = {<Attendanceform/>}/>

          <Route path="*" element = {<Error404/>}/>

      </Routes>
      <Footer/> 
    </>

  );
}

export default App;