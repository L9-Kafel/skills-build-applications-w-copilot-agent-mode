import ResourcePage from './ResourcePage.jsx';

function UserCard({ item }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div>
            <h2 className="h5 mb-1">{item.name ?? 'Unnamed user'}</h2>
            <div className="text-secondary small">{item.email ?? 'No email provided'}</div>
          </div>
          <span className="badge text-bg-primary text-uppercase">{item.role ?? 'athlete'}</span>
        </div>

        <dl className="row g-2 mb-0 small">
          <div className="col-6">
            <dt className="text-secondary fw-normal">Streak</dt>
            <dd className="mb-0 fw-semibold">{item.streakDays ?? 0} days</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Workouts</dt>
            <dd className="mb-0 fw-semibold">{item.workoutCount ?? 0}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Points</dt>
            <dd className="mb-0 fw-semibold">{item.totalPoints ?? 0}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Team</dt>
            <dd className="mb-0 fw-semibold text-break">{item.teamId ?? 'None'}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function Users() {
  return (
    <ResourcePage
      title="Users"
      resourceName="users"
      description="Track athletes, captains, streaks, and point totals from the API."
      emptyMessage="No users returned from the API."
      renderItem={(item) => <UserCard item={item} />}
    />
  );
}