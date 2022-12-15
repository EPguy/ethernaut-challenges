import { ethers } from 'hardhat';

async function main() {
  const problemAddress = "0x0C9be42e6DD6db1BE77BfFbB6C5a14E743F8Dc68";

  const Riot = await ethers.getContractFactory("Riot");
  const riot = await Riot.deploy();
  await riot.deployed();

  const result = await riot.killKing(problemAddress, {
    value: ethers.utils.parseEther("0.002")
  })
  console.log(result);
};

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
});
