import mongoose from 'mongoose';

const danceStyleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

const DanceStyle = mongoose.model('DanceStyle', danceStyleSchema);

export default DanceStyle;