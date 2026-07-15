import { model, Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: 'athlete' },
    avatarUrl: { type: String, default: '' },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null },
    streakDays: { type: Number, default: 0 },
    workoutCount: { type: Number, default: 0 },
    totalPoints: { type: Number, default: 0 },
}, {
    timestamps: true,
    versionKey: false,
});
export default model('User', userSchema);
