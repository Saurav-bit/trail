import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xe0FD128aC44e3589161E2A206d15565F29d7EAd8"
);

export default instance;
