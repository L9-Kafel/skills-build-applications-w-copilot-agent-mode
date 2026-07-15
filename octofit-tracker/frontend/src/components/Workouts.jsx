import ResourcePage from './ResourcePage.jsx';

function WorkoutCard({ item }) {
  const equipment = Array.isArray(item.equipment) ? item.equipment : [];
  const targetMuscles = Array.isArray(item.targetMuscles) ? item.targetMuscles : [];

  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <div>
            <h2 className="h5 mb-1">{item.title ?? 'Workout'}</h2>
            <div className="text-secondary small">{item.category ?? 'Uncategorized'}</div>
          </div>
          <span className="badge text-bg-warning text-dark">{item.difficulty ?? 'Unknown'}</span>
        </div>

        <dl className="row g-2 mb-0 small">
          <div className="col-6">
            <dt className="text-secondary fw-normal">Duration</dt>
            <dd className="mb-0 fw-semibold">{item.durationMinutes ?? 0} min</dd>
          </div>
          <div className="col-12">
            <dt className="text-secondary fw-normal">Equipment</dt>
            <dd className="mb-0 fw-semibold">{equipment.length ? equipment.join(', ') : 'None'}</dd>
          </div>
          <div className="col-12">
            <dt className="text-secondary fw-normal">Muscles</dt>
            <dd className="mb-0 fw-semibold">{targetMuscles.length ? targetMuscles.join(', ') : 'None'}</dd>
          </div>
        </dl>

        <p className="small text-secondary mb-0">{item.description ?? 'No workout description available.'}</p>
      </div>
    </article>
  );
}

export default function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      resourceName="workouts"
      description="Browse reusable workout templates and training ideas from the API."
      emptyMessage="No workouts returned from the API."
      renderItem={(item) => <WorkoutCard item={item} />}
    />
  );
}