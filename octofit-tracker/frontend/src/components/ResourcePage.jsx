import { useEffect, useMemo, useState } from 'react';
import { extractItems, fetchResource, getApiBaseUrl, getPaginationMeta } from '../lib/api.js';

function fallbackKey(item, index) {
  return item?._id ?? item?.id ?? `${index}`;
}

export default function ResourcePage({ title, resourceName, description, renderItem, emptyMessage }) {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        setLoading(true);
        setError('');

        const response = await fetchResource(resourceName, controller.signal);
        setPayload(response);
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message || 'Unable to load data.');
        }
      } finally {
        setLoading(false);
      }
    }

    load();

    return () => controller.abort();
  }, [resourceName]);

  const items = useMemo(() => extractItems(payload), [payload]);
  const pagination = useMemo(() => getPaginationMeta(payload, items), [items, payload]);
  const apiBaseUrl = getApiBaseUrl();
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  return (
    <section className="py-4 py-lg-5">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
          <div>
            <p className="text-uppercase text-secondary small fw-semibold mb-1">OctoFit data</p>
            <h1 className="display-6 fw-bold mb-2">{title}</h1>
            <p className="text-secondary mb-0">{description}</p>
          </div>
          <div className="text-lg-end">
            <span className="badge text-bg-dark mb-2">{resourceName} API</span>
            <div className="small text-secondary">
              {codespaceName
                ? `Codespaces env: VITE_CODESPACE_NAME=${codespaceName}`
                : 'VITE_CODESPACE_NAME is not set; using localhost fallback.'}
            </div>
            <div className="small text-secondary text-break">{apiBaseUrl}/api/{resourceName}/</div>
          </div>
        </div>

        {loading ? (
          <div className="alert alert-info mb-0">Loading {resourceName}...</div>
        ) : error ? (
          <div className="alert alert-danger mb-0">{error}</div>
        ) : (
          <>
            {pagination ? (
              <div className="d-flex flex-wrap gap-3 align-items-center mb-3 small text-secondary">
                <span>Total: {pagination.total}</span>
                {pagination.page !== null ? <span>Page: {pagination.page}</span> : null}
                {pagination.pages !== null ? <span>Pages: {pagination.pages}</span> : null}
                {pagination.limit !== null ? <span>Limit: {pagination.limit}</span> : null}
              </div>
            ) : null}

            {items.length === 0 ? (
              <div className="alert alert-light border mb-0">{emptyMessage}</div>
            ) : (
              <div className="row g-3">
                {items.map((item, index) => (
                  <div className="col-12 col-md-6 col-xl-4" key={fallbackKey(item, index)}>
                    {renderItem(item)}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}