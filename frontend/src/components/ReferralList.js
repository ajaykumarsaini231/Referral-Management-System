import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_REFERRALS } from './graphql/queries';

const ReferralList = () => {
  const { data, error, loading } = useQuery(GET_REFERRALS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data.referrals.map((referral) => (
        <li key={referral.id}>{referral.customer.name} - {referral.status}</li>
      ))}
    </ul>
  );
};

export default ReferralList;
