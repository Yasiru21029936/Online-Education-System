const router = require('express').Router();
const {protect} = require('../middleware/userAuthMiddleware')
const {getAllStudents, getMe, RegisterStudent, login,deleteStudent,updateStudent,deleteUser,getAllUsers,RegisterUser,UpdateUser,getEmployees, getEmployeeCat, getST, getEmployeesWst} = require('../controller/UserController')

router.get('/',getAllUsers);

router.post('/RegisterUser',RegisterUser);
router.put('/updateUser',UpdateUser);
router.get('/getEmployees',getEmployees);
router.get('/getStudentTeacher',getST);
router.get('/getEmployeeWst',getEmployeesWst);

router.post('/getEmployeesCat',getEmployeeCat);

router.get('/students',protect,getAllStudents);

router.delete('/delete/:id',deleteStudent);
router.put('/update',updateStudent);
// router.get('/getMe',getMe);
router.get('/getMe',protect,getMe);
router.post('/RegisterStudent',RegisterStudent);
router.post('/login',login)

router.delete('/deleteUser/:id',deleteUser)


module.exports = router;