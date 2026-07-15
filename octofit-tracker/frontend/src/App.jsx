import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Activities from './components/Activities.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import Teams from './components/Teams.jsx';
import Users from './components/Users.jsx';
import Workouts from './components/Workouts.jsx';
import { getApiBaseUrl } from './lib/api.js';

const navItems = [
  { to: '/', label: 'Overview' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' },
];

function Home() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const apiBaseUrl = getApiBaseUrl();

  const stats = [
    { label: 'Active athletes', value: '1,284' },
    { label: 'Workouts logged', value: '42k' },
    { label: 'Teams competing', value: '86' },
  ];

  return (
    <section className="py-4 py-lg-5">
      <div className="container">
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

            <h1 className="display-4 fw-bold text-dark lh-1 mb-3">
              Track workouts, teams, and competition in one place.
            </h1>
            <p className="lead text-secondary mb-4">
              A modern multi-tier fitness platform for logging activity, building teams, and
              ranking performance on a shared leaderboard.
            </p>

            <div className="d-flex gap-3 flex-wrap mb-4">
              <Link className="btn btn-dark btn-lg" to="/leaderboard">
                Open dashboard
              </Link>
              <Link className="btn btn-outline-secondary btn-lg" to="/activities">
                View activity feed
              </Link>
            </div>

            <div className="alert alert-info mb-0">
              <div className="fw-semibold mb-1">VITE_CODESPACE_NAME is required for Codespaces</div>
              <div className="small mb-0">
                Define <code>VITE_CODESPACE_NAME</code> in <code>.env.local</code> so the frontend
                can call <code>{`https://${'{'}import.meta.env.VITE_CODESPACE_NAME{'}'}-8000.app.github.dev/api/[component]/`}</code>.
                If it is unset, the app safely falls back to <code>{apiBaseUrl}</code>.
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="bg-white rounded-4 shadow p-4 p-md-5 border">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <p className="text-uppercase text-secondary small mb-1">System status</p>
                  <h2 className="h4 mb-0">Presentation tier is ready</h2>
                </div>
                <span className="badge text-bg-success">Vite on 5173</span>
              </div>

              <div className="row g-3 mb-4">
                {stats.map((stat) => (
                  <div className="col-12 col-md-4" key={stat.label}>
                    <div className="border rounded-3 p-3 h-100 bg-body-tertiary">
                      <div className="small text-secondary">{stat.label}</div>
                      <div className="fs-3 fw-bold">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="small text-secondary mb-2">
                API base URL: <span className="text-body fw-semibold text-break">{apiBaseUrl}</span>
              </div>
              <div className="small text-secondary text-break">
                {codespaceName
                  ? `Codespaces hostname will use ${codespaceName}-8000.app.github.dev`
                  : 'Codespaces hostname fallback is disabled because VITE_CODESPACE_NAME is unset.'}
              </div>
            </div>

            <div className="mt-3 d-flex flex-wrap gap-2">
              {navItems.slice(1).map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `btn btn-sm ${isActive ? 'btn-dark' : 'btn-outline-dark'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="min-vh-100 bg-light">
      <header className="border-bottom bg-white sticky-top">
        <div className="container py-3 d-flex flex-wrap align-items-center justify-content-between gap-3">
          <Link to="/" className="text-decoration-none text-dark fw-bold fs-5">
            Octofit Tracker
          </Link>

          <nav className="d-flex flex-wrap gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `btn btn-sm ${isActive ? 'btn-dark' : 'btn-outline-dark'}`
                }
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </main>
  );
}