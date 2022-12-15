# [ethernaut](https://ethernaut.openzeppelin.com/) solutions

## How to start?
1. Sign up for an account on [alchemy](https://www.alchemy.com/).
2. Click the "CREATE APP" button to create an app on the Goerli network.
3. Return to the project and create a ".env" file in the root folder.
4. Write the following configuration code:
```
   GOERLI_URL = https://eth-goerli.g.alchemy.com/v2/alchemy api key
   PRIVATE_KEY = YOUR PRIVATE WALLET KEY
```
5. To install necessary packages and compile, run the following command:
```
    npm install
    npx hardhat --network goerli run .\scripts\Force.ts
```

