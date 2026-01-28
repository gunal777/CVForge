function GeneralInfo({ info, setinfo }) {
  function handleChange(e) {
    setinfo({ ...info, [e.target.name]: e.target.value });
  }

  return (
    <div id="general-info">
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            id="name"
            name="fullName"
            value={info.fullName}
            onChange={handleChange} />

          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={info.email}
            onChange={handleChange} />

          <label htmlFor="phone-no">Phone No.: </label>
          <input
            type="text"
            id="phone-no"
            value={info.phoneNo}
            name="phoneNo"
            onChange={handleChange} />
        </form>
      </section>
    </div>
  )
}

export default GeneralInfo;