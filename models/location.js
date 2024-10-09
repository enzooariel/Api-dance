import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
}, { timestamps: true });

const Location = mongoose.model('Location', locationSchema);

export default Location;