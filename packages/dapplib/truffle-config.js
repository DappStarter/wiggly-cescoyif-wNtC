require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name random noise hockey hunt slender flower gauge'; 
let testAccounts = [
"0xba0c5c65a47e9d0005d9614b82c87917ff3eec98164b62de981187b086a064e6",
"0xbbaccac685f35b56723bf53117deee80ff914c0e46f426d42152b5d2f74d02dc",
"0xe6a711c6ed25391ea58da571cb3f813e69c15e91cfe88d7b6f1521280d2ec77f",
"0x194ef3782707dc58a2fe327f06367e3250533b421136a85c06d7013ca333eefd",
"0xa9e84a9498decdb9aa803cdc7053d7b36c94d3085073826f511cb0fdab24418b",
"0xc36d4a226d030e93b0187ee48f0dbdd0bb800d453ce5b01a6bac78d4b2e691bc",
"0xcf73a78350af96a96878f36ae66399692417252a5117959831308c1b17fa6f10",
"0x319f50c95cd0d105ebcf8865a172870dbd84d22fd467f5b322865744e3dbda06",
"0x39ac785ce463d6e60f5f2444536d1cab797d36de0e55b28a27bcd74f9146771d",
"0x3a97af11e317e8ecc4421047b5ac36150807595caaf160c7db69a5c81d68dacb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

