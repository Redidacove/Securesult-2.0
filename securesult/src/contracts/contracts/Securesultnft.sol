// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";
import "@openzeppelin/contracts/utils/SafeMath.sol";

contract SoulBoundToken is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    // Base URI for metadata
    string private _baseTokenURI;

    // Current token ID counter
    uint256 private _tokenIdCounter;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) ERC721(name, symbol) {
        _baseTokenURI = baseTokenURI;
        _tokenIdCounter = 0;
    }

    /**
     * @dev Mint a token with specified IPFS hash metadata.
     * @param ipfsHash The IPFS hash representing the metadata.
     */
    function mintWithIPFSHash(string memory ipfsHash) external onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _mint(msg.sender, tokenId);
        _tokenIdCounter = _tokenIdCounter.add(1);

        // Set the token URI to include the IPFS hash
        _setTokenURI(
            tokenId,
            string(abi.encodePacked(_baseTokenURI, ipfsHash))
        );
    }

    /**
     * @dev Returns the current base URI for metadata.
     */
    function baseTokenURI() public view returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @dev Set the base URI for metadata.
     * @param newBaseTokenURI The new base URI to set.
     */
    function setBaseTokenURI(string memory newBaseTokenURI) external onlyOwner {
        _baseTokenURI = newBaseTokenURI;
    }
}
