var dogName = prompt('What is your dog name');
var dogWeight = prompt('What is the weight of your dog.');

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF ROOF WAWF');
        if (weight == isNaN){
            alert('Sorry please enter a number only.')
        }
    } else {
        console.log(name + ' roof woof rawf');
    }
};