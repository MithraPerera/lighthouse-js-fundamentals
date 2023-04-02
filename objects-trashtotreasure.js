/*
CHALLENGE

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
*/

const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  }
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));