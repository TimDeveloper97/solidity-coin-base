require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: __dirname + "/./../../.env" });

const ROPSTEN_PRIVATE_KEY =
  process.env.ROPSTEN_PRIVATE_KEY ||
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    emerald_local: {
      url: "http://localhost:8545",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
    emerald_testnet: {
      url: "https://testnet.emerald.oasis.dev",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
    emerald_mainnet: {
      url: "https://emerald.oasis.dev",
      accounts: [`${ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
