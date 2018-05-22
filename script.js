/* JavaScript code here */

//task 1
console.log("Internal JS");

//task 2

function ArraySum(Array) {
  var sum=0;
        Array.forEach(function(value, index){
          sum+=value;

        });
        return sum;
        }

        console.log(ArraySum([1,2,3,4,5]));
        console.log(ArraySum([11,-4,20,-5]));
    
    //Task 3

function EmailChecking(emailString){
  var EmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var match = EmailFormat.test(emailString);
  return match;
}

console.log(EmailChecking("isty@hossain.com"));
console.log(EmailChecking("istyhossain.info"));

//Task 4

var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];

function getreadingStatus(index){
  return library[index].readingStatus;
}

console.log(getreadingStatus(2));
