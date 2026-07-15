import app from './app.js';

const port = Number(process.env.PORT ?? 8000);

app.listen(port, () => {
  console.log(`Octofit backend listening on port ${port}`);
});