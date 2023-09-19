// Crowd.js

import React, { useState } from 'react';
import './Crowd.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Crowd = () => {
  const [campaigns, setCampaigns] = useState([
    // Initialize with sample campaign data
    {
      id: 1,
      title: 'Help Fund My Tech Project',
      description: 'Support my dream education!',
      goalAmount: 100000,
      currentAmount: 4500,
      endDate: '31-12-2023',
      recipientName: 'Sarah Johnson',
      recipientStory: "Sarah is a dedicated student who dreams of making a positive impact in the tech industry. Unfortunately, she faces financial barriers to pursuing her education. Let's help her achieve her dreams!",
    },
    {
      id: 2,
      title: 'Fund My Education',
      description: 'Help kickstart my Medical Journey.',
      goalAmount: 500000,
      currentAmount: 32000,
      endDate: '30-11-2023',
      recipientName: 'Raj Sharma',
      recipientStory: "In a remote village, young Raj dreams of becoming a doctor to serve his community. Your support can help Raj pursue a medical education, bringing hope for better healthcare to his village. Join us in empowering Raj to heal lives and make a difference!",
    },
    // Add more campaign objects as needed
  ]);

  const [selectedCampaignId, setSelectedCampaignId] = useState(null);
  const [contributionAmount, setContributionAmount] = useState(10); // Default contribution amount

  const handleContribute = () => {
    if (selectedCampaignId !== null) {
      // Find the selected campaign
      const updatedCampaigns = campaigns.map((campaign) => {
        if (campaign.id === selectedCampaignId) {
          return {
            ...campaign,
            currentAmount: campaign.currentAmount + contributionAmount,
          };
        }
        return campaign;
      });

      // Update state
      setCampaigns(updatedCampaigns);

      // Reset selected campaign and contribution amount
      setSelectedCampaignId(null);
      setContributionAmount(10); // Reset to default
    }
  };

  return (
    <div>
      <Navbar/>
      <div className="crowd-container">
        <h2>Crowdfunding Campaigns</h2>
        <div className="campaign-list">
          {campaigns.map((campaign) => (
            <div className="campaign-card" key={campaign.id}>
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <p>Goal: ₹{campaign.goalAmount}</p>
              <p>Current: ₹{campaign.currentAmount}</p>
              <p>End Date: {campaign.endDate}</p>
              <p>Name: {campaign.recipientName}</p>
              <p>Story: {campaign.recipientStory}</p>
              {selectedCampaignId === campaign.id ? (
                <div>
                  <input
                    type="number"
                    value={contributionAmount}
                    onChange={(e) =>
                      setContributionAmount(Number(e.target.value))
                    }
                  />
                  <button onClick={handleContribute}>Contribute</button>
                </div>
              ) : (
                <button onClick={() => setSelectedCampaignId(campaign.id)}>
                  Select Contribution
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Crowd;
