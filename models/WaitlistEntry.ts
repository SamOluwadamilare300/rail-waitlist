import { Schema, model, models } from 'mongoose';

const WaitlistEntrySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  joinedAt: { type: Date, default: Date.now },
});

export default models.WaitlistEntry || model('WaitlistEntry', WaitlistEntrySchema);