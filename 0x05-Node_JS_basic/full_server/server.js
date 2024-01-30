import express from 'express';
import router from './routes';

const app = express();

router(app);

const port = 1245;
app.listen(port, () => process.stdout.write(`Server listening on port ${port}`));

export default app;
module.exports = app;
