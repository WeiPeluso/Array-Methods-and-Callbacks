import { fifaData } from './fifa.js';
console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
   
const teamsFinal2014 = fifaData.filter(function(team){

    return (team.Year===2014)&&(team.Stage==='Final');
  })
  console.log(teamsFinal2014 );

  console.log('Task 1: (a)');
  console.log("Home Team name for 2014 world cup final: "+ teamsFinal2014[0]["Home Team Name"]);


  console.log('Task 1: (b)');
  console.log(" Away Team name for 2014 world cup final: " + teamsFinal2014[0]["Away Team Name"]);

  
  console.log('Task 1: (c)');
  console.log("Home Team goals for 2014 world cup final is :" + teamsFinal2014[0]["Home Team Goals"]);

  console.log('Task 1: (d)');
  console.log("Away Team goals for 2014 world cup final: "+ teamsFinal2014[0]["Away Team Goals"]);

  console.log('Task 1: (e)');
  if(teamsFinal2014[0]["Home Team Goals"]>teamsFinal2014[0]["Away Team Goals"]){
  console.log("Winner of 2014 world cup final : "+ teamsFinal2014[0]["Home Team Name"]);
  }
  else{
    console.log("Winner of 2014 world cup final : "+ teamsFinal2014[0]["Away Team Name"]);
  }
    


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects
 with only finals data */

function getFinals(list) {

    const finalsData=list.filter(function(teams){
      return teams.Stage==='Final';

    })

    return finalsData;

};

console.log('Task 2');
console.log(getFinals(fifaData));


/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, 
and returns an array called `years` containing all of the years in the dataset */

function getYears(list){

    const years= getFinals(list).map(function(team){
        return team.Year;
    });
    return years
};

console.log("Task 3")
console.log(getYears(fifaData));

/* Task 5: Impliment a higher-order function called `getWinners`,
 that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. 
 Return the name of all winning countries in an array called `winners` */ 

function getWinners(list) {

     const winners=[];
     getFinals(list).forEach(function(team){
        if(team["Home Team Goals"]>team["Away Team Goals"]){
               winners.push(team["Home Team Name"]);
        }
        else{
            winners.push(team["Away Team Name"]);
        }
    });

    return winners;
    

};

console.log("task 5");
console.log(getWinners(fifaData));


/* Task 6: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings 
"In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(cbYears, cbWinners) {

    const result=[];
 
    for(let i=0;i<cbYears.length;i++){

        result.push('In '+ cbYears[i] +' '+cbWinners[i]+' swon the world up!');
    };

     return result;
};

console.log("task 6");
console.log(getAllWinners(getYears(fifaData),getWinners(fifaData)));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials`
 and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(list,teamInitial) {

    /* code here */
    const  list2=(getFinals(fifaData));
    const result=list2.reduce(function(totalWin,team){
        let total=0;
       if(team["Home Team Initials"]===teamInitial && team["Home Team Goals"]>team["Away Team Goals"]){
    
            total=total+1;
     }
    else if(team["Away Team Initials"]===teamInitial && team["Home Team Goals"]<team["Away Team Goals"]){
          total=total+1;
     }
          return totalWin=totalWin+total;
    },0);
    return result;
};

console.log("task 7")
console.log("Brazil's total win is "+getCountryWins(fifaData,'BRA'));

/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns 
the the average number of home team goals and away team goals scored per match
 (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
 
    const aveGoal=[];
    const homeGoalTotal=data.reduce(function(totalGoal,team){
        return totalGoal+team["Home Team Goals"];
    },0);
    aveGoal.push(homeGoalTotal/data.length);
    const guestGoal=data.reduce(function(totalGoal,team){
        return totalGoal+team["Away Team Goals"];
    },0);
    aveGoal.push(guestGoal/data.length);
    return aveGoal;

};

console.log('task 10')
let result = getAverageGoals(fifaData);

console.log(' the average number of home team goals is: '+ result[0]);
console.log(' the average number of guest team goals is: '+ result[1]);

/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */