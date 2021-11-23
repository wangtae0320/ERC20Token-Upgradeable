// test/Txxx.test.js

const { ethers, upgrades } = require('hardhat');

describe('MyToken', function () {
  it('deploys', async function () {
    const TxxxToken1 = await ethers.getContractFactory('TxxxTokenV1');
    const TxxxTokenV2 = await ethers.getContractFactory('TxxxTokenV2');
    const TxxxTokenV3 = await ethers.getContractFactory('TxxxTokenV3');
  

    const txxxV1 = await upgrades.deployProxy(TxxxToken1, { kind: 'uups' });
    console.log("MyTokenV1 deployed to:",  txxxV1.address);
    
    const txxxV2 = await upgrades.upgradeProxy(txxxV1.address, TxxxTokenV2);
    console.log("MyTokenV2 deployed to:",  txxxV2.address);

    const txxxV3 = await upgrades.upgradeProxy(txxxV1.address, TxxxTokenV3);
    console.log("MyTokenV3 deployed to:",  txxxV3.address);

  });
});



