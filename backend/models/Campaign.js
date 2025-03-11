const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  offer: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  referrals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Referral' }],
});

module.exports = mongoose.model('Campaign', campaignSchema);
