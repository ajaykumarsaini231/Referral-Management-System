const { ZapierClient } = require('zapier-platform-core');

// Initialize Zapier client
const zapierClient = new ZapierClient({
  // Your Zapier API key
  apiKey: process.env.ZAPIER_API_KEY,
});

// Define a trigger for new referrals
const newReferralTrigger = {
  key: 'new_referral',
  noun: 'Referral',
  display: {
    label: 'New Referral',
    description: 'Triggers when a new referral is created.',
  },
  operation: {
    perform: async (z, bundle) => {
      // Logic to fetch new referrals from your database
      const referrals = await fetchNewReferrals();
      return referrals.map((referral) => ({
        id: referral.id,
        customer: referral.customer.name,
        status: referral.status,
      }));
    },
  },
};

// Define an action for creating a new customer in CRM
const createCustomerAction = {
  key: 'create_customer',
  noun: 'Customer',
  display: {
    label: 'Create Customer',
    description: 'Creates a new customer in CRM.',
  },
  operation: {
    perform: async (z, bundle) => {
      // Logic to create a new customer in CRM
      const customer = await createCustomerInCRM(bundle.inputData);
      return customer;
    },
  },
};

// Register triggers and actions with Zapier
zapierClient.triggers.register(newReferralTrigger);
zapierClient.actions.register(createCustomerAction);

// Helper function to fetch new referrals
async function fetchNewReferrals() {
  // Implement logic to fetch new referrals from your database
  // For example, using MongoDB:
  const Referral = require('../models/Referral');
  return await Referral.find({ status: 'new' }).exec();
}

// Helper function to create a new customer in CRM
async function createCustomerInCRM(customerData) {
  // Implement logic to create a new customer in CRM
  // For example, using an API call:
  const response = await fetch('https://your-crm-api.com/customers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  return await response.json();
}

module.exports = {
  newReferralTrigger,
  createCustomerAction,
};
