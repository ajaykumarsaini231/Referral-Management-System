import React from 'react';
import CampaignForm from '../components/CampaignForm';
import ReferralList from '../components/ReferralList';

function Campaigns() {
  return (
    <div>
      <h2>Campaigns</h2>
      <CampaignForm />
      <ReferralList />
    </div>
  );
}

export default Campaigns;
