import { ethers } from "hardhat";

async function main() {

  const PolygonNFT = await ethers.getContractFactory("PolygonNFT");
  const polyPFP = await PolygonNFT.deploy("Polygon PFP", "PP");

  await polyPFP.deployed();

  console.log("Polygon PFP deployed to:", polyPFP.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
