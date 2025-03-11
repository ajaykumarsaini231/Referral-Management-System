const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Referral' }],
  campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' }],
});

module.exports = mongoose.model('Customer', customerSchema);
