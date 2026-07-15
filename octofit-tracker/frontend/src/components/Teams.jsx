import ResourcePage from './ResourcePage.jsx';

function TeamCard({ item }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column gap-3">
        <div>
          <h2 className="h5 mb-1">{item.name ?? 'Unnamed team'}</h2>
          <p className="text-secondary small mb-0">{item.tagline ?? 'No team tagline available.'}</p>
        </div>

        <dl className="row g-2 mb-0 small">
          <div className="col-6">
            <dt className="text-secondary fw-normal">Captain</dt>
            <dd className="mb-0 fw-semibold text-break">{item.captainId ?? 'None'}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Members</dt>
            <dd className="mb-0 fw-semibold">{Array.isArray(item.memberIds) ? item.memberIds.length : 0}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Points</dt>
            <dd className="mb-0 fw-semibold">{item.totalPoints ?? 0}</dd>
          </div>
          <div className="col-6">
            <dt className="text-secondary fw-normal">Wins</dt>
            <dd className="mb-0 fw-semibold">{item.wins ?? 0}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function Teams() {
  return (
    <ResourcePage
      title="Teams"
      resourceName="teams"
      description="Review team membership, leadership, and leaderboard momentum."
      emptyMessage="No teams returned from the API."
      renderItem={(item) => <TeamCard item={item} />}
    />
  );
}