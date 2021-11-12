let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
runnerAge = 18;

//check if runner is an adult and is registered early
if (registeredEarly === true && runnerAge >= 18)
{
  raceNumber += 1000;
//tell adult early registered runners time of race and race number
  console.log(`You will race at 9:30AM with group ${raceNumber}.`);
}
else if (registeredEarly === false && runnerAge >= 18)
{
  console.log (`You will race at 11:00AM with group ${raceNumber}.`);
}
else //youth: doesnt matter what time they registered
{
  console.log(`Youth registrants run at 12:30PM (regardless of registration). You will race with group ${raceNumber}.`);
}
