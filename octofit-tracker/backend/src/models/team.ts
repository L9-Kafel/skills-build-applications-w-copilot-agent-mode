import { model, Schema } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    tagline: { type: String, default: '' },
    captainId: { type: Schema.Types.ObjectId, ref: 'User', default: null },
    memberIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    totalPoints: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model('Team', teamSchema);