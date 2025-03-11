const Campaign = require('../models/Campaign');

const resolvers = {
  Query: {
    campaigns: async () => {
      return await Campaign.find().exec();
    },
  },
  Mutation: {
    createCampaign: async (parent, { name, offer, startDate, endDate }) => {
      const campaign = new Campaign({ name, offer, startDate, endDate });
      return await campaign.save();
    },
  },
};

module.exports = resolvers;
