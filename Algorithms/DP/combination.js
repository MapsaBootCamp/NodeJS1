function comb(n , k) {
    if(n === k) return 1;
    else if(k === 1) return n;
    // else if()
    return comb(n-1, k) + comb(n-1, k-1);
}

console.log(comb(50, 22));