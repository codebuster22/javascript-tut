// multiple of 3 - Block
// multiple of 5 - Chain
// multiple of 3&5 0 BlockChain

for(let i = 1; i<=60; i++){
    let output = '';
    if(i%3 === 0) output += 'Block';
    if(i%5 === 0) output += 'Chain';
    console.log( output || i );
}