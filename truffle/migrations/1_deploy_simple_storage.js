const Election = artifacts.require("election");

module.exports = function (deployer) {
  deployer.deploy(Election);
};
