import { ethers } from 'hardhat';

async function main() {
  const problemAddress = "0x46e35E35F981d9379f8202705986a581969746bE";
  const TelephoneIsMine = await ethers.getContractFactory("TelephoneIsMine");
  const telephoneIsMine = await TelephoneIsMine.deploy(problemAddress);
  await telephoneIsMine.deployed();

  const result = await telephoneIsMine.changeOwner();
  console.log(result);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
