localStorage.setItem('hero','Sheila');
localStorage.setItem('todo','Learn JS')
var myHero = localStorage.getItem('hero')
console.log(myHero);
console.log(localStorage.getItem('todo'));
localStorage.setItem('todo','Go to work daily')
console.log(localStorage.getItem('todo'));

// localStorage.removeItem('hero')
localStorage.clear()
myHero = localStorage.getItem('hero')
console.log(myHero);
