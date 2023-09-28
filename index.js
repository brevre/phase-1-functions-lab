// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquartersLocation = 42;
    return Math.abs(pickupLocation - headquartersLocation);
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocksTravelled = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
  
    if (feetTravelled <= 400) {
      return 0; 
    } else if (feetTravelled > 400 && feetTravelled <= 2000) {
      return (feetTravelled - 400) * 0.02; 
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
      return 25; 
    } else {
      return 'cannot travel that far'; 
    }
  }
  