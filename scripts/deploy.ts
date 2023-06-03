import { ethers, upgrades } from "hardhat";

async function main() {

  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  const deployed = await proxy.deployed()

  console.log("Deployed: " + deployed.deployed);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address);

  console.log("Proxy contract address: " + proxy.address);
  console.log("Implementation contract address: " + implementationAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
