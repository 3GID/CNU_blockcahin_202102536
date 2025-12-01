import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";


const PRIVATE_KEY = "37c31e1c8f1e2d87f35b52bf7f9a49d0ed832b57077bdcc02492411891587ac2"; 

const config: HardhatUserConfig = {
  solidity: "0.8.28", 
  networks: {
    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      chainId: 1001,
      accounts: [PRIVATE_KEY],
    },
  },
};

export default config;