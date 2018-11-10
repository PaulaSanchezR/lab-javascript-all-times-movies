/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
/*function turnHoursToMinutes(moviarray){
 const movieTime=moviarray.map(time => return time.duration);

}*/

function turnHoursToMinutes(mo){
let newArray=mo.map(function(arr){
  let arrayDuration=String(arr.duration);
  return   {  title: arr.title,
    year: arr.year,
    director: arr.director,
    duration: conveTime(arrayDuration.split(" ")),
    genre: arr.genre,
    rate: arr.rate
  };
 
});
  return newArray;
}

function conveTime(time){
  let total=time.map(function(arrtime){
    return arrtime.includes("h") ? parseInt(arrtime)*60 : parseInt(arrtime);
  }).reduce(function(acumu,curre){
    return acumu + curre;
  })
return total;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
let raAverage= movies.reduce((total,movie) => { 
  return total  + +movie.rate
},0) /movies.length.toFixed(2);

return raAverage;
}




// Get the average of Drama Movies

const dramaMovie= movies.filter(movie => movie.genre.includes("Drama"));

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
