import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>1480. Running Sum of 1d Array
</h1>
<div>
  LeetCode Problems
</div>
`;

var runningSum = function (nums) {
  //Created a result array
  let newNums = [];
  //Var for adding array values as we go
  let totalSoFar = 0;
  // push the inital value as it's not added
  newNums.push(nums[0]);
  //loop to go through the array
  for (let i = 1; i < nums.length; i++) {
    //Keeping a running tally of our values
    totalSoFar += nums[i - 1];
    //push those into a new array
    newNums.push(nums[i] + totalSoFar);
  }
  return newNums;
};

runningSum([1, 2, 3, 4]);
