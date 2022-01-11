let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let runnersAge = 18;

if (runnersAge >=18 && registeredEarly === true){
  raceNumber += 1000
}

if (runnersAge > 18 && registeredEarly === true){
  console.log(`Runner number ${raceNumber}: The race will start at 9:30 am`)
} else if (runnersAge > 18 && !registeredEarly === true){
  console.log(`Runner number ${raceNumber}: The race will start at 11:00 am`)
} else if (runnersAge < 18 ){
  console.log(`Runner number ${raceNumber}: The race will start at 12:30 am`)
} else {
  console.log(`If you are 18 years old see the registration desk.`)
}