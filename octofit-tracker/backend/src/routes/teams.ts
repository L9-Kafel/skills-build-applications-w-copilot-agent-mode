import { createResourceRouter } from './createResourceRouter.js';
import Team from '../models/team.js';

export default createResourceRouter('teams', Team);