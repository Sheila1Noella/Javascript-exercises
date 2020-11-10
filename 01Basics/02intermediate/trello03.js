let myTodos = {
    day: 'Monday',
    meetings: 10,
    meetDone: 0,
    addmeeting: function(All){
        this.meetings = this.meetings + All
        console.log(this);
    },
    summary: function(){
        return `you have ${this.meetings} meetings on ${this.day}`
    }
}
myTodos.addmeeting(4)
console.log(myTodos.summary());
console.log("____________________________");
//Assignment: Handle the meetings done and create a fn that can reset entire day

let myTodos1 = {
    day: 'Tuesday',
    meetings: 10,
    meetDones: 7,
    assignme: function(days) {
        this.day = this.meetings - days       
    }
}  
myTodos1.assignme(myTodos1.meetDones)
    console.log(`All the undone meeting are ${myTodos1.day}`)