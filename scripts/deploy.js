const { ethers, upgrades } = require('hardhat');
// const data = fs.readFileSync('./secrets.json');
const fs = require('fs');
const data = fs.readFileSync('./secrets.json');
const conf = JSON.parse(data);

async function main() {

    // V1.Depoly
    // const TxxxTokenV1 = await ethers.getContractFactory('TxxxTokenV1');
    // const txxxV1 = await upgrades.deployProxy(TxxxTokenV1, { kind: 'uups' });
    // console.log("MyTokenV1 deployed to:",  txxxV1.address);

    // V2.Deploy
    // const TxxxTokenV2 = await ethers.getContractFactory('TxxxTokenV2');
    // const txxxV2 = await upgrades.upgradeProxy("0xe1489f32462E2B462964D3666f7847816Edcc98e", TxxxTokenV2);
    // console.log("MyTokenV2 deployed to:",  txxxV2.address);

    // V3.Deploy
    // const TxxxTokenV3 = await ethers.getContractFactory('TxxxTokenV3');
    // const txxxV3 = await upgrades.upgradeProxy(secret.CA, TxxxTokenV3);
    // console.log("MyTokenV3 deployed to:",  txxxV3.address);

    // V4.Deploy
    const TxxxTokenV4 = await ethers.getContractFactory('TxxxTokenV4');
    const txxxV4 = await upgrades.upgradeProxy(conf.CA, TxxxTokenV4);
    console.log("MyTokenV4 deployed to:",  txxxV4.address);
    
    }

  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });