import React from 'react';

function Card() {
  return (

    <div class="parent-container">
      <div id='Details-container1'>
        <h6>Free</h6>
        <h1>$0/month</h1>
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

      <div id='Details-container2'>
        <h6>PLUS</h6>
        <h1>$9/month</h1>
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

      <div id='Details-container3'>
        <h6>PRO</h6>
        <h1>$49/month</h1>
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

