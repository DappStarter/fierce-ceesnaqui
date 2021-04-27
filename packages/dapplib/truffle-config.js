require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid enroll frame short fan random night purpose hover argue front stable'; 
let testAccounts = [
"0xd7ea10b09bf481afc3a1809bbc4297d1bf338f3d27fa8f86b40a8126a4b2f0e1",
"0x364b21495e7476dbf4c66be23d70ef9cc0d5f83bd0322c12684a9ade5d3b6f23",
"0x99d472bbdb3be12ec9c62e72e859d076cc4d6d175f0a347d1112b78f16d5c5cc",
"0x6ad08a315d9844634fc55e8f4e60ed1015a3e5ddc3d5c423e6a9871bb7be1c68",
"0x411d727a20b418c11c4a7982f49688800f24fbeb20bc629a66e8490c39879fe8",
"0xda0c13f7de37524eba181b03b7fb6bf28141cf8a0b1122365a7a6e08d5bed23e",
"0x88d25bb69a088f21b3a2f7c8299cc940b893e34c2d049995e29c34d0713eb5c2",
"0x67f24eb7cd5860d6ce05fb5a4d57edbc744e3f5df7939c749facdbcf8d8ef10a",
"0x431a46e867368581b1f06d9964f2f4dab4689c61d210f73f358e618a66a64274",
"0x36bbd1fa04f3eec31d74641cfda73dac99af0e7dd175fa19d41badf087ee4866"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

