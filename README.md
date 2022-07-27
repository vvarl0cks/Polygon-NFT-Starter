# Polygon NFT Starter

This project is meant to give an overview of how a NFT PFP dapp could be strucutrued and deployed on
either Polygon PoS (formerly Matic Network) or Polygon Mumbai Testnet.

The project is comprised of a React frontend provisioned using Create React App and a Hardhat instance
that contains a NFT smart contract and a few other supporting scripts and files.

This frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Libraries & Tools

The React frontend using the 

To learn more about this solution, take a look at the following resources:
- [ERC721](https://eips.ethereum.org/EIPS/eip-721) - a standard that allows for the implementation of a standard API for NFTs within smart contracts. This standard provides basic functionality to track and transfer NFTs.
- [OpenZeppelin ERC 721 Libraries](https://docs.openzeppelin.com/contracts/4.x/erc721)
- [NFT Storage](https://nft.storage/) - Free decentralized storage and bandwidth for NFTs on IPFS and Filecoin.
- [Hardhat](https://hardhat.org/) - Ethereum development environment for professionals.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces.
- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
- [Wagmi](https://wamgi.sh) - a collection of React Hooks containing everything you need to start working with Ethereum.
- [Chakra UI](https://chakra-ui.com/) - a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## Project Setup and Config

- Install [Metamask](https://metamask.io/) browser extension and create an account.
- Copy your private key
- Create a .env file inside the `hardhat` folder with the following key `PRIVATE_KEY = XXXXXXXX`

Optional:
If you want to verify your contracts on Polyscan after deployment, you will need to create an account and generate an API key.
- Create a [Polyscan](https://polygonscan.com/register) account
- Generate an [API Key](https://polygonscan.com/myapikey)

## Contract Changes

The contract used in this project is not production-ready and users are advised to use Access Control features in Solidity and/or [OpenZepplin](https://github.com/OpenZeppelin/openzeppelin-contracts) libraries to configure appropriate security.
Feel free to make changes to the contract and deploy it to either Polygon PoS or Mumbai Testnet. Once changes are made to the contract,
follow these steps to ensure the change are reflected on the frontend.

1. Make changes to the contract
2. To deploy to Polygon PoS, run `npx hardhat run scripts/deploy.ts --network matic`
3. Run `yarn compile` - this will run the Solidity compiler and generate artifacts that we can use elsewhere in our codebase

## Deployment
This project uses the Hardhat environment for contract orchestration. To deploy to Polygon PoS or Mumbai Testnet:

- `cd hardhat`
- Run either `npx hardhat run scripts/deploy.ts --network matic` for Polygon PoS or `npx hardhat run scripts/deploy.ts --network mumbai` for the Mumbai Testchain

Be sure to save the deployment address for when you need to configure the frontend to use the deployed contract.

## NFT PFP
To use your own NFT PFPs, simply upload them to IPFS using [NFT Storage](https://nft.storage/) or any other decentralized hosting provider and then update the `data.json` file found in the `src/metadata` directory.

## Run the Application

To run the frontend and mint your very own warriors, run `yarn start`