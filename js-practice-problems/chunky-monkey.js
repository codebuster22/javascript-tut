function chunkyArrayInGroups(arr, size) {
    const iteration = arr.length/size;
    const copy = [...arr];
    const result = [];
    for(let i = 0; i<iteration; i++){
        result.push(copy.splice(0,size));
    }
    return result;
}

chunkyArrayInGroups(["a","b","c","d"],2);
chunkyArrayInGroups([0,1,2,3,4,5],);
chunkyArrayInGroups([0,1,2,3,4,5,6,7,8],3);