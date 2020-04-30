import express from 'express'
import axios from 'axios';
import config from '../config';

const router = express.Router();
const app = express();
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

router.use(express.json());
router.use((req, res, next) => {
  req.apiClient = axios.create({
    baseURL: config.url.api,
    timeout: 1000
  });

  req.apiClient.defaults.headers.post['Content-Type'] = 'application/json';
  req.apiClient.defaults.headers.put['Content-Type'] = 'application/json';
  next();
});

router.get('/game-settings', async (req, res) => {
  try {
    let resp = await req.apiClient.get('/game-settings');
    res.json(resp.data);
  } catch (e) {
    res.status(e.response.status).json(e.response.data);
  }
});

export default router;
