import { createResourceRouter } from './createResourceRouter.js';
import User from '../models/user.js';

export default createResourceRouter('users', User);