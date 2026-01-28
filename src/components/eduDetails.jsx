function EducationDetails(info, setinfo) {

  function handleChange(e) {
    setinfo({ ...info, [e.target.name]: e.target.value })
  }
  return (
    <div id="edu-info">
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="school-name">School Name: </label>
          <input
            type="text"
            id="school-name"
            name="schoolName"
            value={info.schoolName}
            onChange={handleChange} />

          <label htmlFor="major">Major: </label>
          <input
            type="text"
            id="major"
            name="major"
            value={info.major}
            onChange={handleChange} />

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
        </form>
      </section>
    </div>
  )
}

export default EducationDetails;