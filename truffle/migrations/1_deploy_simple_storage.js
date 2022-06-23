const SimpleStorage = artifacts.require("election");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
};
