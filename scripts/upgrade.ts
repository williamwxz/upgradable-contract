import { ethers, upgrades } from "hardhat";

const proxyAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function main() {
    const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2);
    
    const implementationAddress = await upgrades.erc1967.getImplementationAddress(
        proxyAddress
    );

    console.log("The current contract owner is: " + upgraded.owner());
    console.log('Implementation contract address: ' + implementationAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
