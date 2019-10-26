module.exports.function = function filterMovieWithTimeAndTiOS (timeOrderedSchedule, dateTimeExpression, isStartTime) {
  let result = [];
  let input = timeOrderedSchedule;

  let timeInput = dateTimeExpression.dateTime.time.hour*60 + dateTimeExpression.dateTime.time.minute*1;

  // 이후 시작하는 영화
  if(typeof isStartTime == 'undefined'){
    input.timeSchedule.forEach(function(timeScheduleElement){
      let time = timeScheduleElement.startTime.split(":");
      let aTime = time[0]*60 + time[1]*1;
      if(aTime >= time){
        result.push(timeScheduleElement);
      }

      input.timeSchedule = result;
    })
  } else {
    // 시작하는: 이후 시작하는 영화
    if(isStartTime){
      input.timeSchedule.forEach(function(timeScheduleElement){
        let time = timeScheduleElement.startTime.split(":");
        let aTime = time[0]*60 + time[1]*1;
        if(aTime >= time){
          result.push(timeScheduleElement);
        }

        input.timeSchedule = result;
      })
    } else {    // 끝나는: 인풋시간 이전에 끝나는 영화
      input.timeSchedule.forEach(function(timeScheduleElement){
        let time = timeScheduleElement.endTime.split(":");
        let aTime = time[0]*60 + time[1]*1;
        if(aTime <= time){
          result.push(timeScheduleElement);
        }

        input.timeSchedule = result;
      })
    }
  }
  return input;
}
