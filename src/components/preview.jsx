function Preview({ info, educations, experiences }) {
    return (
        <div className="resume" id="resume">
            <header className="resume-header">
                <h1>{info.fullName}</h1>
                <p>{info.email}</p>
                <p>{info.phoneNo}</p>
            </header>

            <hr />

            <section className="resume-section">
                <h2>Education</h2>

                {educations.map((edu) => (
                    <div className="resume-item">
                        <h3>{edu.degree}</h3>
                        <h4>{edu.school}</h4>
                        <p className="date">
                            From {edu.startDate} to {edu.endDate}
                        </p>
                    </div>
                ))}
            </section>

            <hr />

            <section className="resume-section">
                <h2>Experience</h2>

                {experiences.map((exp) => (
                    <div className="resume-item">
                        <h3>{exp.companyName}</h3>
                        <h4>{exp.position}</h4>

                        {exp.description && (
                            <>
                                <p className="label">Responsibilities:</p>
                                <p className="description">{exp.description}</p>
                            </>
                        )}

                        <p className="date">
                            From {exp.startDate} to {exp.endDate}
                        </p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Preview;
