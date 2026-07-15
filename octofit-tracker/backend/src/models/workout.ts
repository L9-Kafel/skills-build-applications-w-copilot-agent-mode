import { model, Schema } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
    equipment: [{ type: String }],
    targetMuscles: [{ type: String }],
    description: { type: String, default: '' },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Workout', workoutSchema);