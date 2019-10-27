module.exports.function = function filterMovieWithGenreAndTiOSM (timeOrderedScheduleWithMovie, genreEnum, exceptExpression) {
  let result = [];
  let input = timeOrderedScheduleWithMovie;

  // '제외하고', '빼고'와 같은 단어가 안들어온 경우
  // 해당 장르만 보여준다.
  if(typeof exceptExpression == 'undefined'){
    
    input.movieOrderedSchedule.forEach(function(mosElement){
      if(mosElement.movie.genre.includes(genreEnum)){
        result.push(mosElement);
      }
    })
  } else {  
    if(!exceptExpression){
      input.movieOrderedSchedule.forEach(function(mosElement){
        if(mosElement.movie.genre.includes(genreEnum)){
          result.push(mosElement);
        }
      })
    } else {
      input.movieOrderedSchedule.forEach(function(mosElement){
        if(!mosElement.movie.genre.includes(genreEnum)){
          result.push(mosElement);
        }
      })
      
    }
  }

  return result
}
