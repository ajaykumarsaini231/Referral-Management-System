import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_CAMPAIGN } from './graphql/mutations';

const CampaignForm = () => {
  const [name, setName] = useState('');
  const [offer, setOffer] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [createCampaign, { data }] = useMutation(CREATE_CAMPAIGN);

  const handleSubmit = (e) => {
    e.preventDefault();
    createCampaign({ variables: { name, offer, startDate, endDate } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Campaign Name" />
      <input type="text" value={offer} onChange={(e) => setOffer(e.target.value)} placeholder="Offer" />
      <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Start Date" />
      <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} placeholder="End Date" />
      <button type="submit">Create Campaign</button>
    </form>
  );
};

export default CampaignForm;
