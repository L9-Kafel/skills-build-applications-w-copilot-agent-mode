import app from './app.js';

const port = Number(process.env.PORT ?? 8000);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.listen(port, () => {
  console.log(`Octofit backend listening on port ${port}`);
  console.log(`API base URL: ${apiBaseUrl}`);
});