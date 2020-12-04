let theTasks = {
    day : 'Monday',
    meetings: 0,
    meetingDone: 0,
}
let addMeeting = function(todo, meet = 0){
    todo.meetings = todo.meetings + meet
}
// addMeeting(theTasks, 2)
let meetingDone = function(todo, meet = 0){
    todo.meetingDone = todo.meetingDone - meet
}
let resetDay = function(todo){
    todo.meetings = 0
    todo.meetingDone = 0
}
let getSummaryOfDay = function(todo){
    let meetleft = todo.meetings - todo.meetingDone
    return `you have ${meetleft} of meetings today!`
}
addMeeting(theTasks, 3)
addMeeting(theTasks, 2)
addMeeting(theTasks, 4)
console.log(theTasks);

console.log(getSummaryOfDay(theTasks));