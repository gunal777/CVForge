import { useState } from 'react'
import EducationDetails from './components/eduDetails';
import ExperienceDetails from './components/expDetails';
import GeneralInfo from './components/generalDetails';
import './App.css'

const defaultValues = {
  fullName: "LeLouch Lamperouge",
  email: "lelouch@gmail.com",
  phoneNo: "9234000000",
};

function AddnewEducation(info, setinfo) {
  return (
    <EducationDetails info={info} setinfo={setinfo} />
  )
}

function App() {
  const [info, setinfo] = useState(defaultValues);
  // const [countEdu, setcountEdu] = useState(0);
  return (
    <>
      <main>
        <div className='forms'>
          <GeneralInfo info={info} setinfo={setinfo} />
          <EducationDetails info={info} setinfo={setinfo} />
          <button onClick={<AddnewEducation info={info} setinfo={setinfo} />} name='newEducation'>+ Add New Education</button>

        </div>
        <div className='preview'>

        </div>
      </main>
    </>
  )
}

export default App
