function ExperienceDetails(info, setinfo) {
    function handleChange(e) {
        setinfo({ ...info, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <label htmlFor="company-name">Company Name: </label>
            <input
                type="text"
                id="company-name"
                name="companyName"
                value={info.companyName}
                onChange={handleChange} />

            <label htmlFor="position-name">Position: </label>
            <input
                type="text"
                id="position-name"
                name="position"
                value={info.position}
                onChange={handleChange} />

            <label htmlFor="description">Description: </label>
            <textarea
                id="description"
                name="description"
                rows="5"
                cols="33"
                value={info.description}
                onChange={handleChange} >
            </textarea>

            <label htmlFor="start-date">Start Date: </label>
            <input
                type="month"
                id="start-date"
                value={info.startDate}
                name="startDate"
                onChange={handleChange} />

            <label htmlFor="end-date">End Date: </label>
            <input
                type="month"
                id="end-date"
                value={info.endDate}
                name="endDate"
                onChange={handleChange} />
        </div>
    )
}

export default ExperienceDetails;