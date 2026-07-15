export function getApiBaseUrl() {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  return 'http://localhost:8000';
}

export function getResourceUrl(resourceName) {
  return `${getApiBaseUrl()}/api/${resourceName}/`;
}

export async function fetchResource(resourceName, signal) {
  const response = await fetch(getResourceUrl(resourceName), { signal });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

export function extractItems(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (!payload || typeof payload !== 'object') {
    return [];
  }

  const itemCandidates = [
    payload.items,
    payload.results,
    payload.data,
    payload.docs,
    payload.entries,
  ];

  for (const candidate of itemCandidates) {
    if (Array.isArray(candidate)) {
      return candidate;
    }
  }

  return [];
}

export function getPaginationMeta(payload, items) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return null;
  }

  const page = payload.page ?? payload.currentPage ?? payload.pageNumber ?? null;
  const total = payload.total ?? payload.totalCount ?? payload.count ?? items.length;
  const pages = payload.pages ?? payload.totalPages ?? null;
  const limit = payload.limit ?? payload.pageSize ?? null;

  if (page === null && pages === null && limit === null && total === items.length) {
    return null;
  }

  return { page, total, pages, limit };
}