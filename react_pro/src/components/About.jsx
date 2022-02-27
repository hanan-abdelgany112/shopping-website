import React from "react";
import pic from "./img/supermarket.jpeg";


function About() {
  return (
    <div className="img">
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={pic}
              alt="notfound"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">About us</h1>
            <p>
            “Our strategy was to do a quick land grab of wholesalers and retailers across Egypt 
            (horizontally across governorates) and now we are focusing vertically on getting the most
             value out of the regions we cover in terms of active customers, GMV, retention, etc,” noted 
             Hossam in a conversation with MENAbytes.
              Speaking about how they ensure the quality of service when
              they don’t manage the inventory and logistics, he explained 
              that their sellers can use Fatura’s mobile app to manage and update
               stocks, prices, offers, and receive orders. “We also monitor the fulfillment rates of
               suppliers and their compliance with the set delivery time – and measures retailers’ satisfaction 
               on an ongoing basis.”
              Commenting on the opportunity in a statement, he added, “There is a 
              great opportunity in the B2B space in Egypt, that is growing as the players are becoming 
              digitally mature and ready. Collectively, the digital B2B players in the FMCG space capture less
              than 5% of the market, and there is a long way to go. Our conviction is to stay asset-light, be 
              inclusive to all the industry stakeholders, and to attract the best-on-ground acquisition force across the country.”
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
