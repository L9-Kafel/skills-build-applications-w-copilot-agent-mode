import app from './app.js';
import { getApiBaseUrl } from './config/runtime.js';

const port = Number(process.env.PORT ?? 8000);
const apiBaseUrl = getApiBaseUrl(port);

app.listen(port, () => {
  console.log(`Octofit backend listening on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});