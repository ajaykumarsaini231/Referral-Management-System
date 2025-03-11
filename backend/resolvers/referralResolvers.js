const Referral = require('../models/Referral');

const resolvers = {
  Query: {
    referrals: async () => {
      return await Referral.find().exec();
    },
  },
  Mutation: {
    createReferral: async (parent, { customerId }) => {
      const referral = new Referral({ customer: customerId, status: 'pending' });
      return await referral.save();
    },
  },
};

module.exports = resolvers;
