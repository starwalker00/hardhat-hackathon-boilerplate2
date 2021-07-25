// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Renter = await ethers.getContractFactory("Renter");
  const renter = await Renter.deploy();
  await renter.deployed();

  console.log("Renter address:", renter.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(renter);
}

function saveFrontendFiles(renter) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-Renter-address.json",
    JSON.stringify({ Renter: renter.address }, undefined, 2)
  );

  const RenterArtifact = artifacts.readArtifactSync("Renter");

  fs.writeFileSync(
    contractsDir + "/Renter.json",
    JSON.stringify(RenterArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
