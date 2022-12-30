import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MyMessage = await ethers.getContractFactory("MyMessage");
  const myMessage = await MyMessage.deploy("Hey it's my message!");

  await myMessage.deployed();

  console.log("Contract address:", myMessage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });