use alloy_sol_types::{SolStruct, sol};

// `sol!` allows you to define struct types!
// You can just paste Solidity into the macro and it should work :)
sol! {
    #[derive(Debug)]
    struct CFDOrderV2 {
        address senderAddress;
        uint80 price;
        uint16 instrumentIndex;
        address matcherAddress;
        uint80 price2;
        uint8 buySide;
        uint96 amount;
        uint64 matcherFee;
        uint64 expiration;
        uint8 orderType;
        uint64 signerChainId;
    }
}

fn main() {
    // All structs generated with `sol!` implement `crate::SolType` &
    // `crate::SolStruct`. This means you get eip-712 signing for freeeeee
    let order = CFDOrderV2 {
        senderAddress: "0xe9d66F0Ef74D8fDd136EeAD7Abdc0bD701C1645d"
            .parse()
            .unwrap(),
        price: 4164001.try_into().unwrap(),
        instrumentIndex: 22,
        matcherAddress: "0xe9d66F0Ef74D8fDd136EeAD7Abdc0bD701C1645d"
            .parse()
            .unwrap(),
        price2: 0.try_into().unwrap(),
        buySide: 0,
        amount: 3115100000000u64.try_into().unwrap(),
        matcherFee: 51885106,
        expiration: 1773899383302u64,
        orderType: 1,
        signerChainId: 56,
    };

    // let sender_address_bytes = order.senderAddress.bytes();

    println!("sender_address_bytes: {:?}", order.senderAddress.0.0);

    println!("Order: {:#?}", order);

    // The `eip712_domain` macro lets you easily define an EIP-712 domain
    // object :)
    let my_domain = alloy_sol_types::eip712_domain!(
       name: "Electra",
       version: "1",
       chain_id: 56,
       salt: alloy_primitives::FixedBytes(hex::decode("5792f7333c35db190e30acc144f049fd15b24f552c0010b8b3e06f9105c37c5a").unwrap().try_into().unwrap()),
    );

    let domain_hash = my_domain.hash_struct();
    println!("Domain hash: {}", domain_hash);

    let type_hash = order.eip712_type_hash();
    println!("Type hash: {}", type_hash);

    let struct_body = order.eip712_encode_data();
    println!("Body: {:?}", struct_body);

    let struct_hash = order.eip712_hash_struct();
    println!("Struct hash (type + body): {:?}", struct_hash);

    assert_eq!(
        hex::encode(struct_hash.0),
        "0xa5d596fd5144826e4b9e5cc8c9b97d8a5c9a445ee7b09479d2468d0d4c0f6bca"
    )

    // let signer = PrivateKeySigner::random();

    // Sign the hash asynchronously with the wallet.
    // let signature = signer.sign_hash_sync(&signing_hash).await?;

    // println!("Signing hash: {}", signing_hash);
}
