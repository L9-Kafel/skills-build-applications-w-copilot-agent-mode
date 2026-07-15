import { createResourceRouter } from './createResourceRouter.js';
import Workout from '../models/workout.js';

export default createResourceRouter('workouts', Workout);