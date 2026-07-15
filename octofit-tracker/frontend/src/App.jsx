const stats = [
  { label: 'Active athletes', value: '1,284' },
  { label: 'Workouts logged', value: '42k' },
  { label: 'Teams competing', value: '86' },
];

export default function App() {
  return (
    <main className="min-vh-100 bg-light">
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="d-inline-flex align-items-center gap-3 rounded-pill bg-white shadow-sm px-3 py-2 mb-4">
              <img
                src="/docs/octofitapp-small.png"
                alt="Octofit Tracker logo"
                width="32"
                height="32"
              />
              <span className="fw-semibold text-uppercase small text-secondary">Octofit Tracker</span>
            </div>
            <h1 className="display-4 fw-bold text-dark lh-1 mb-3">Track workouts, teams, and competition in one place.</h1>
            <p className="lead text-secondary mb-4">
              A modern multi-tier fitness platform for logging activity, building teams, and
              ranking performance on a shared leaderboard.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-dark btn-lg">Open dashboard</button>
              <button className="btn btn-outline-secondary btn-lg">View leaderboard</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow p-4 p-md-5 border">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <p className="text-uppercase text-secondary small mb-1">System status</p>
                  <h2 className="h4 mb-0">Frontend scaffold is ready</h2>
                </div>
                <span className="badge text-bg-success">Vite on 5173</span>
              </div>
              <div className="row g-3">
                {stats.map((stat) => (
                  <div className="col-12 col-md-4" key={stat.label}>
                    <div className="border rounded-3 p-3 h-100 bg-body-tertiary">
                      <div className="small text-secondary">{stat.label}</div>
                      <div className="fs-3 fw-bold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}