const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  status: {
    type: String,
    enum: ['pending', 'claimed', 'rewarded'],
    default: 'pending',
  },
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'Campaign' },
});

module.exports = mongoose.model('Referral', referralSchema);
