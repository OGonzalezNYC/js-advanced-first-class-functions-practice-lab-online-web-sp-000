// Code your solution in this file!

// function logDriverNames (array) {
//   array.forEach(function (driver) {
//     console.log(driver.name);
//   })
// }

// function logDriversByHometown(array, location) {
//   array.forEach(function(driver) {
//     if (driver.hometown === location) {
//       console.log(driver.name);
//     }
//   })
// }


// function driversByRevenue(driversArray) {
//   return driversArray.slice().sort(function (driverOne, driverTwo) {
//       return driverOne.revenue - driverTwo.revenue
//   })
// }


// function driversByRevenue(array) {
//   return array.slice().sort(function (driverOne, driverTwo) {
//     return driverOne.revenue - driverTwo.revenue;
//   });
// }

// // function driversByRevenue(array) {
// //   newArray = [];
// //   array.forEach(function(driver) {
// //     newArray.push(driver);
// //   })
// //   newArray.sort(function (a, b) { 
// //     if (a.revenue > b.revenue) {
// //         return 1
// //     } else { return -1 
// //       }
// //   })
// //   return newArray;
// // }  


// function driversByName(array) {
//   return array.slice().sort(function (driverA, driverB) {
//     return driverA.name.localeCompare(driverB.name)
//   });
// }

// // function driversByName(array) {
// //   newArray = [];
// //   array.forEach(function(driver) {
// //     newArray.push(driver);
// //   })
// //   newArray.sort(function (a, b) {
// //     return a.name.localeCompare(b.name)
// //   })
// //   return newArray;
// // }

  
// function totalRevenue(array) {
//   return array.reduce(function(sum, driver) {
//     return driver.revenue + sum
//   }, 0) // What's the signifcance and purpose of this 0?
// }

// // function totalRevenue(array) {
// //   let newArray = [];
// //   array.forEach(function (driver) {
// //     newArray.push(driver.revenue);
// //   });
// //   let sum = newArray.reduce(function (total, amount) {
// //     return total + amount; 
// //   });
// //   return sum;
// // }


// function averageRevenue(array) {
//   return totalRevenue(array) / array.length;
// }


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


function driversByName(driversArray) {
  newArray = driversArray.slice();
  return newArray.sort(function (a, b) {
    return a.name - b.name;
  });
}


function totalRevenue() {
  
}


function averageRevenue() {
  
}
