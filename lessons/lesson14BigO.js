const nemo = ["nemo"];
const everyone = ["dory","bruce","Marlin","nemo","grill","boat","nigel","squirt","darla","hank",
];
const large = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("We Found Nemo!");
    }
  }
}

findNemo(everyone); // O(n) --> Linear Time (it takes linear time to find nemo)
//big O depens on the number of inputs
//most common big O notation