import { fifaData } from './fifa.js';
console.log(fifaData);
//Create a function that takes country initials as a 
//parameter and determines how many goals that country has scored in World Cup games since 1930.

function getGoalSince1930(list,initial){

    const finalsData=list.filter(function(teams){
        return teams.Stage==='Final';
  
      });


      const result=finalsData.reduce(function(totalGoal,team){
          let total=0;
         if(team.Year>=1930&& team["Home Team Initials"]===initial){
              total=total+team["Home Team Goals"];
         }
         else if(team.Year>=1930&& team["Away Team Initials"]===initial){
              total=total+team["Away Team Goals"];
         }
        
             return totalGoal=totalGoal+total;
       },0)
    return result;
}

console.log("strech:");
console.log("Brasil has scored "+getGoalSince1930(fifaData,'BRA')+" goals in World Cup games since 1930");
console.log("Should be 14, 1958: 5 goals , 1962: 3 goals, 1970: 4 goals, 1994: 0 goals and 2002: 2 goals ")













/* Task 8: Write a function called getGoals() that accepts a parameter `data` and 
returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(list) {
/*
    const  list2=(getFinals(fifaData));

    const teams=[];
    list2.forEach(function(team){

       let obj1={
            team:team["Home Team Name"],
            goal:team["Home Team Goals"],
            apperance:1,
        }

       let  obj2={
            team:team["Away Team Name"],
            goal:team["Away Team Goals"],
            apperance:1,
        }
        teams.push(obj1);
        teams.push(obj2);

    })

   for(let i=0;i<teams.length;i++){
    console.log(teams[i]);s
   }*/
       
  
}

getGoals();


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and
 calculates the team with the most goals scored against them per appearance (average goals against)
  in the World Cup finals */

function badDefense(list) {


};

badDefense();