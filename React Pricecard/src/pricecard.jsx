import React from 'react';

function PriceCard({ plan, className }) {
  return (
    <div className={className} id="card-details">
      <h6>{plan.name}</h6>
      <h2>${plan.price}/month</h2>
      <hr />
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button>BUTTON</button>
    </div>
  );
}

export default PriceCard;
