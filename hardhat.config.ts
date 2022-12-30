import { HardhatUserConfig } from "hardhat/config";
import { PRIVATE_KEY } from "./secrets";
import { ETHERSCAN_API_KEY, ALCHEMY_ETHEREUM_API_KEY, ALCHEMY_ETHEREUM_GOERLI_API_KEY } from "./secrets";
import { ARBISCAN_API_KEY, ALCHEMY_ARBITRUM_API_KEY, ALCHEMY_ARBITRUM_GOERLI_API_KEY } from "./secrets";
import { OPTIMISM_ETHERSCAN_API_KEY, ALCHEMY_OPTIMISM_API_KEY, ALCHEMY_OPTIMISM_GOERLI_API_KEY } from "./secrets";
import { POLYGONSCAN_API_KEY, ALCHEMY_POLYGON_API_KEY, ALCHEMY_POLYGON_MUMBAI_API_KEY } from "./secrets";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    eth_mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ETHEREUM_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    eth_goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_ETHEREUM_GOERLI_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    arbi_mainnet: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_ARBITRUM_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    arbi_goerli: {
      url: `https://arb-goerli.g.alchemy.com/v2/${ALCHEMY_ARBITRUM_GOERLI_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    optimism_mainnet: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_OPTIMISM_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    optimism_goerli: {
      url: `https://opt-goerli.g.alchemy.com/v2/${ALCHEMY_OPTIMISM_GOERLI_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    polygon_mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_POLYGON_API_KEY}`,
      accounts: [PRIVATE_KEY]
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_POLYGON_MUMBAI_API_KEY}`,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY
  }
};

export default config;
