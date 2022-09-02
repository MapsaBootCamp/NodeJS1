function comb(n , k, dp=null) {
    if(dp === null)
        dp = Array(n + 1).fill(0).map(() => Array(k + 1).fill(-1))
    if(n === k || k === 0) return 1;
    else if(n === 0) return 0; 
    else if(k === 1) return n;
    else if(dp[n][k] >= 0) return dp[n][k];
    dp[n][k] = comb(n-1, k, dp) + comb(n-1, k-1, dp);
    return dp[n][k];
}

console.log(comb(500, 22));
