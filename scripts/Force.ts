import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();
  const ForcingSendEther = await ethers.getContractFactory("ForcingSendEther");
  const forcingSendEther = await ForcingSendEther.deploy();
  await forcingSendEther.deployed();

  await addr1.sendTransaction({
    to: forcingSendEther.address,
    value: ethers.utils.parseEther('0.001')
  });

  const problemAddress = "0x0779D74Cf41ca9abc6Ff3Fca9A103EDA0F133904";
  const result = await forcingSendEther.attack(problemAddress);

  console.log(result);
};

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
