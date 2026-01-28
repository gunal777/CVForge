import { useState} from "react";

function EducationDetails({ info, setinfo }) {
    const [localEdu, setLocalEdu] = useState(info);

    function handleChange(e) {
        const { name, value } = e.target;
        setLocalEdu({ ...localEdu, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setinfo(localEdu);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>School Name</label>
            <input
                type="text"
                name="school"
                value={localEdu.school}
                onChange={handleChange}
            />

            <label>Degree</label>
            <input
                type="text"
                name="degree"
                value={localEdu.degree}
                onChange={handleChange}
            />

            <label>Start Date</label>
            <input
                type="month"
                name="startDate"
                value={localEdu.startDate}
                onChange={handleChange}
            />

            <label>End Date</label>
            <input
                type="month"
                name="endDate"
                value={localEdu.endDate}
                onChange={handleChange}
            />

            <button type="submit">Save Education</button>
        </form>
    );
}

export default EducationDetails;
