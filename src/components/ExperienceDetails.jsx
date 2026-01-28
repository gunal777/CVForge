import { useState } from 'react';

function ExperienceDetails({info, setinfo}) {
    const [localExp, setLocalExp] = useState(info);

    function handleChange(e) {
        const { name, value } = e.target;
        setLocalExp({ ...localExp, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setinfo(localExp);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company-name">Company Name: </label>
            <input
                type="text"
                id="company-name"
                name="companyName"
                value={localExp.companyName}
                onChange={handleChange} />

            <label htmlFor="position-name">Position: </label>
            <input
                type="text"
                id="position-name"
                name="position"
                value={localExp.position}
                onChange={handleChange} />

            <label htmlFor="description">Description: </label>
            <textarea
                id="description"
                name="description"
                rows="5"
                cols="33"
                value={localExp.description}
                onChange={handleChange} >
            </textarea>

            <label htmlFor="start-date">Start Date: </label>
            <input
                type="month"
                id="start-date"
                value={localExp.startDate}
                name="startDate"
                onChange={handleChange} />

            <label htmlFor="end-date">End Date: </label>
            <input
                type="month"
                id="end-date"
                value={localExp.endDate}
                name="endDate"
                onChange={handleChange} />

            <button type="submit">Save Education</button>
        </form>
    )
}

export default ExperienceDetails;