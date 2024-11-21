const { Schema, mongoose } = require('mongoose');

const landSubdivisionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    unique: true,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
}, { timestamps: true });

landSubdivisionSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

// Land Subdivision model
const LandSubdivision = mongoose.model('LandSubdivision', landSubdivisionSchema);
module.exports = LandSubdivision;
