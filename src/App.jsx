import { useState } from 'react'
import EducationDetails from './components/EducationDetails';
import ExperienceDetails from './components/ExperienceDetails';
import GeneralInfo from './components/GeneralDetails';
import Preview from './components/Preview';
import './App.css'

const defaultValues = {
    fullName: "LeLouch Lamperouge",
    email: "lelouch@gmail.com",
    phoneNo: "9234000000",
};

const emptyExperiences = {
    companyName: "",
    position: "",
    description: "",
    startDate: "",
    endDate: "",
}

const emptyEducation = {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
};

function App() {
    const [info, setinfo] = useState(defaultValues);
    const [educations, setEducation] = useState([{ ...emptyEducation }]);
    const [experiences, setExperiences] = useState([{ ...emptyExperiences }]);

    function addEducation() {
        setEducation([...educations, { ...emptyEducation }]);
    }

    function addExperience() {
        setExperiences([...experiences, { ...emptyExperiences }]);
    }

    function updateEducation(updatedEdu, index) {
        const newEducations = [...educations];
        newEducations[index] = updatedEdu;
        setEducation(newEducations);
    }

    function updateExperiences(updatedExp, index) {
        const newExperiences = [...experiences];
        newExperiences[index] = updatedExp;
        setExperiences(newExperiences);
    }

    return (
        <div className='container'>
            <div className='forms'>
                <div className='general-info'>
                    <h2>General Info</h2>
                    <GeneralInfo info={info} setinfo={setinfo} />
                </div>

                <div className='educational-info'>
                    <h2>Educational Information</h2>
                    {educations.map((edu, index) => (
                        <EducationDetails
                            key={index}
                            info={edu}
                            setinfo={(updatedEdu) => updateEducation(updatedEdu, index)}
                        />
                    ))}
                    <button onClick={addEducation} name='edu'>+ Add New Education</button>
                </div>

                <div className='exp-info'>
                    <h2>Experience Information</h2>
                    {experiences.map((exp, i) => (
                        <ExperienceDetails key={i} info={exp} setinfo={(updatedExp) => updateExperiences(updatedExp, i)} />
                    ))}
                    <button onClick={addExperience}>+ Add New Experience</button>
                </div>
            </div>

            <div className="preview">
                <Preview
                    info={info}
                    educations={educations}
                    experiences={experiences}
                />
                <div id='export-btn'>
                    <button onClick={() => window.print()}>
                        Print / Save as PDF
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
