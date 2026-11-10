function Student() {
  return (
    <>
      <div className="student-card">
        <div className="avatar">A</div>
        <div>
          <h2>Ajith Kumar</h2>
          <p>Computer Science and Engineering</p>
        </div>
        <span className="status">Active</span>
      </div>

      <div className="details">
        <div>
          <span>Roll Number</span>
          <h3>101</h3>
        </div>
        <div>
          <span>Department</span>
          <h3>CSE</h3>
        </div>
        <div>
          <span>Academic Year</span>
          <h3>2026–27</h3>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="page">
      <nav>
        <h2>Edu<span>Portal</span></h2>
        <p>STUDENT MANAGEMENT SYSTEM</p>
      </nav>

      <main>
        <p className="eyebrow">STUDENT PROFILE</p>
        <h1>College Information</h1>
        <p className="subtitle">
          Student academic information and profile overview.
        </p>

        <section className="profile">
          <Student />
        </section>

        <footer>
          React Fragments Demonstration · Experiment 09
        </footer>
      </main>
    </div>
  );
}

export default App;
