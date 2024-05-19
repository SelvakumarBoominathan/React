import React from 'react';
import './App.css';
import PriceCard from './pricecard';

function App() {
  const plans = [
    {
      name: "FREE",
      price: "0",
      features: [
        "✅ Single User",
        "✅ 50GB Storage",
        "✅ Unlimited Public Projects",
        "✅ Community Access",
        "❌ Unlimited Private Projects",
        "❌ Dedicated Phone Support",
        "❌ Free Subdomain",
        "❌ Monthly Status Reports"
      ]
    },
    {
      name: "PLUS",
      price: "10",
      features: [
        "✅ 5 Users",
        "✅ 50GB Storage",
        "✅ Unlimited Public Projects",
        "✅ Community Access",
        "✅ Unlimited Private Projects",
        "✅ Dedicated Phone Support",
        "✅ Free Subdomain",
        "❌ Monthly Status Reports"
      ]
    },
    {
      name: "PRO",
      price: "50",
      features: [
        "✅ Unlimited Users",
        "✅ 50GB Storage",
        "✅ Unlimited Public Projects",
        "✅ Community Access",
        "✅ Unlimited Private Projects",
        "✅ Dedicated Phone Support",
        "✅ Free Subdomain",
        "✅ Monthly Status Reports"
      ]
    }
  ];

  return (
    <div className='parent-container'>
      {plans.map((plan, index) => (
        <PriceCard
          key={index}
          plan={plan}
          className={
            plan.name === "FREE" ? 'card-details-1' :
            plan.name === "PLUS" ? 'card-details-2' :
            plan.name === "PRO" ? 'card-details-3' : ''
          }
        />
      ))}
    </div>
  );
}

export default App;
