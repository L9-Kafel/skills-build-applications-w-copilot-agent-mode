import ResourcePage from './ResourcePage.jsx';

function LeaderboardCard({ item }) {
  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column gap-3">
        <div className="d-flex justify-content-between align-items-start gap-2">
          <h2 className="h5 mb-0">#{item.rank ?? '-'}</h2>
          <span className="badge text-bg-dark">{item.points ?? 0} pts</span>
        </div>

        <div>
          <div className="fw-semibold">{item.displayName ?? 'Unnamed athlete'}</div>
          <div className="text-secondary small text-break">{item.userId ?? 'Unknown user'}</div>
        </div>

        <div className="small text-secondary">
          Weekly change: <span className="fw-semibold text-body">{item.weeklyChange ?? 0}</span>
        </div>
      </div>
    </article>
  );
}

export default function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      resourceName="leaderboard"
      description="Follow the current ranking and weekly movement."
      emptyMessage="No leaderboard entries returned from the API."
      renderItem={(item) => <LeaderboardCard item={item} />}
    />
  );
}