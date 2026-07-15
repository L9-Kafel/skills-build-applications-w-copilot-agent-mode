import ResourcePage from './ResourcePage.jsx';

function ActivityCard({ item }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h2 className="h5 mb-0">{item.activityType ?? 'Activity'}</h2>
          <span className="badge text-bg-success">{item.durationMinutes ?? 0} min</span>
        </div>

        <dl className="row g-2 mb-0 small">
          <div className="col-6">
            <dt className="text-secondary fw-normal">Calories</dt>
            <dd className="mb-0 fw-semibold">{item.caloriesBurned ?? 0}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Performed</dt>
            <dd className="mb-0 fw-semibold text-break">{item.performedAt ?? 'Unknown'}</dd>
          </div>
          <div className="col-12">
            <dt className="text-secondary fw-normal">User</dt>
            <dd className="mb-0 fw-semibold text-break">{item.userId ?? 'Unknown'}</dd>
          </div>
        </dl>

        <p className="small text-secondary mb-0">{item.notes ?? 'No activity notes available.'}</p>
      </div>
    </article>
  );
}

export default function Activities() {
  return (
    <ResourcePage
      title="Activities"
      resourceName="activities"
      description="Inspect training sessions, cardio work, and recovery logs from the API."
      emptyMessage="No activities returned from the API."
      renderItem={(item) => <ActivityCard item={item} />}
    />
  );
}