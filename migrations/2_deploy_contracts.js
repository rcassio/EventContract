const EventContract = artifacts.require("EventContract");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(EventContract);
};
