
// index.js
//     findMatching()
//       ✓ returns all drivers that match the passed in name
//       ✓ returns matching drivers if case does not match but letters do
//       ✓ returns an empty array if there is no match
    

function findMatching (  drivers, name  ) 
{
    return drivers.filter ( driver => driver.toLowerCase() === name.toLowerCase()  ) ;
}


// fuzzyMatch ( )
//       1) returns a driver if beginning provided letters match
//       2) does not return drivers if only middle or ending letters match
//       3) does not return drivers if only middle or ending letters match
    

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }