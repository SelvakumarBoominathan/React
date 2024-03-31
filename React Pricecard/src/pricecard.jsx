import React from 'react';

function Card(props) {
  return (

    <div class='parent-container'>
      <div id='Details-container1' class='card-details'>
        <h6>{props.C1}</h6>
        <h2>${props.V1}/month</h2>
        <hr />
        <ul>
          <li>✅ Single User</li>
          <li>✅ 50GB Storage</li>
          <li>✅ Unlimited Public Projects</li>
          <li>✅ Community Access</li>
          <li>❌ Unlimited Private Projects</li>
          <li>❌ Dedicated Phone Support</li>
          <li>❌ Free Subdomain</li>
          <li>❌ Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>

      <div id='Details-container2' class='card-details'>
        <h6>{props.C2}</h6>
        <h2>${props.V2}/month</h2>
        <hr />
        <ul>
          <li>✅ 5 Users</li>
          <li>✅ 50GB Storage</li>
          <li>✅ Unlimited Public Projects</li>
          <li>✅ Community Access</li>
          <li>✅ Unlimited Private Projects</li>
          <li>✅ Dedicated Phone Support</li>
          <li>✅ Free Subdomain</li>
          <li>❌ Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>

      <div id='Details-container3' class='card-details'>
        <h6>{props.C3}</h6>
        <h2>${props.V3}/month</h2>
        <hr />
        <ul>
          <li>✅ Unlimited Users</li>
          <li>✅ 50GB Storage</li>
          <li>✅ Unlimited Public Projects</li>
          <li>✅ Community Access</li>
          <li>✅ Unlimited Private Projects</li>
          <li>✅ Dedicated Phone Support</li>
          <li>✅ Free Subdomain</li>
          <li>✅ Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    </div>
  )

}

export default Card;

