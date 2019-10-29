// Code your solution in this file!


function logDriverNames(driversArray) {
  driversArray.forEach(function(driver) {
  console.log(driver.name)
  })
}


function logDriversByHometown(driversArray, location) {
  driversArray.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  })
}


function driversByRevenue(driversArray) {
  newArray = driversArray.slice();
  return newArray.sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

// function driversByRevenue(driversArray) {
//   return driversArray.slice().sort(function (driverOne, driverTwo) {
//       return driverOne.revenue - driverTwo.revenue
//   })
// }


function driversByName(driversArray) {
  newArray = driversArray.slice();
  return newArray.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}


function totalRevenue(driversArray) {
  return driversArray.reduce (function (sum, 
    driver) {
    return sum + driver.revenue;
  });
}


function averageRevenue(driversArray) {
  return totalRevenue(driversArray) / driversArray.length;
}