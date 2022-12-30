import { expect } from "chai";
import { ethers } from "hardhat";

// We use `loadFixture` to share common setups (or fixtures) between tests.
// Using this simplifies your tests and makes them run faster, by taking
// advantage of Hardhat Network's snapshot functionality.
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("MyMessage contract", function() {

  async function deployContract() {
    // Get accounts
    const [owner, addr1] = await ethers.getSigners();
    // Get contract and deploy it
    const contract = await ethers.getContractFactory("MyMessage");
    const myMessageContract = await contract.deploy("Hey it's my message!");
    await myMessageContract.deployed();
    // Return variables
    return {myMessageContract, owner, addr1};
  }

  describe ("Deployment", function() {

    it ("Should deploy contract with correct message", async function() {
      // We use loadFixture to setup our environment, and then assert that
      // things went well
      const {myMessageContract, owner} = await loadFixture(deployContract);
      expect(await myMessageContract.getMessage()).to.equal("Hey it's my message!");
      expect(await myMessageContract.owner()).to.equal(owner.address);
    });

    it ("Should update message", async function() {
      const {myMessageContract, owner} = await loadFixture(deployContract);
      await myMessageContract.setMessage("A new message!");
      expect(await myMessageContract.getMessage()).to.equal("A new message!");      
    });

  });

  describe("Destroy", function () {
    it("Call destroy fails as addr1", async function () {
      const {myMessageContract, addr1} = await loadFixture(deployContract);
      // Connect as addr1 and try to destroy the contract
      expect(myMessageContract.connect(addr1).destroy()).to.be.revertedWith("msg.sender is not the owner");
    });
    it("Call destroy succeeds as owner", async function () {
      const {myMessageContract} = await loadFixture(deployContract);
      // As Owner detroy the contract
      const txResponse = await myMessageContract.destroy();
      await txResponse.wait();
    });
    it("Get Contract fails after destroy", async function () {
      const {myMessageContract} = await loadFixture(deployContract);
      expect(myMessageContract).to.be.revertedWith(myMessageContract.address + " is not a contract account.");
    });
  });
});
