
import './App.css'
import HeaderComponent from './Components/HeaderComponent'
import FooterComponent from './Components/FooterComponent'
import EmployeeTableComponent from './Components/EmployeeTableComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddEmployee from './Components/AddEmployee'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path ='/' element = {<EmployeeTableComponent/>}></Route>
          <Route path ='/employees' element = {<EmployeeTableComponent/>}></Route>
          <Route path ='/add-employee' element = {<AddEmployee/>}></Route>
          <Route path ='/update-employee/:id' element = {<AddEmployee/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
