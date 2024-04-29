const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorDocument = new Schema({
  firstName: {
    type: String,
    required: [true, "first name is needed"],
  },

  lastName: {
    type: String,
    required: [true, "last name is needed"],
  },

  specialty: {
    type: String,
    required: [true, "specialty is required"],
  },

  active: {
    type: Boolean,
    default: true,
  },

});

const Doctor = mongoose.model("Doctor", doctorDocument);
module.exports = Doctor;

