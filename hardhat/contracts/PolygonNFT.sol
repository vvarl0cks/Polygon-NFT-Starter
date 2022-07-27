// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PolygonNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

  function mint(address to, string memory tokenURI) public returns (uint256) {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();
    _safeMint(to, newTokenId);
    _setTokenURI(newTokenId, tokenURI);

    return newTokenId;
  }
}
