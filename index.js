// console.log('Learning Modern DOM JS DAY 5')

// // window -> to control browser,  create global object, represented a browser window
// // window -> BOM, DOM, JS CORE
// // syntax - > window.console.log(-)
// // DOM-> Document object model -> behaves like as tree
// // character -> tags -> token -> nodes -> dom 
// // document.getElementById('content')
// // queryselector
// // queryselectorAll
// // .inner HTML -> get an element/all of its desc or set an elements HTML content

// // let codingEx = document.querySelector('.code-example')
// // codingEx.innerHTML

// // Adding new element / content
// // create -> .createElement()
// // add -> append method -> content.appendChild(new child) //lastsibling
// // insertAdjacentHTMl -> has to be called 2arrays
// //                     -> location portion
// //                     -> HTML text/content to be inserted

// // remove method find -> hw

// /////////////////////////--------------------------DAY -6  -------------------------------////////////////////////////////

// // browser events -> invisible -> monitorEvents -> turn on     turn off-> unmonitorEvents()
// // Events, respond to events, data stored is event , stop an event, lifecycle of events
// // e.g form submit click -> action
// // / interface -> bluprint
// //  eventTarget -> Interface implemented by object that can recieve events & may listener for them
// // 3method -> 1. addEventListener , 2. removeEventListener, 3. dispatchEventListener
// // eventTarget <---Inherit----- Node <-----Inherit------Element
// // eventTarget ----> interface ------> toplevelentity
// // 1. addEventListener --> listen to event , respond to event , hook into event
// // pseudo code
// // document.addEventListener('click',function(){
// //     console.log('I clicked on document')
// // });
// // eventlistener
// // content.addEventListener('click', function(){
// //     content.style.background='red';
// // });
// // 2. removeEventListener ->>> condition -> 1. same target , 2. same type, 3. same function
// //  == -> loose equality -> only value will be same
// //          |_> allow -> type coersion  -> where JS will try to convert the memory being compared to same type
// //  === -> strict equality -> both value and type will be same

// // phases of events -> 1. Capturing Phase 2. At Target Phase 3. Bubblin phase

// // event 

// // function eventFunction(){
// //     console.log('I have clicked on the document');
// // }

// // document.addEventListener('click', eventFunction);

// // const content = document.querySelector('#wrapper');

// // content.addEventListener('click', function(event){
// //     console.log(event);
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //     const button = document.getElementById('myButton');
// //     button.addEventListener('click', () => {
// //       console.log('Button clicked!');
// //     });
// // });

// // const button = document.getElementById('myButton');
// // if (button) {
// //   button.addEventListener('click', () => {
// //     console.log('Button clicked!');
// //   });
// // }

// // let links = document.querySelectorAll('a')
// // console.log(links)

// // let thirdLinks = links[2]
// // console.log(thirdLinks)

// // thirdLinks.addEventListener('click', function(event){
// //     event.preventDefault();
// //     console.log('mazza aagya')
// // })

// // let secondlinks = links[1]
// // console.log('secondlinks')

// // secondlinks.addEventListener('click', function(event){
// //     event.preventDefault();
// //     console.log('maaza aaaya')
// // })


// // let myDiv = document.createElement('div');
// // function paraStatus(event){
// //     console.log('I have clicked on para')
// // }
// // myDiv.addEventListener('click', paraStatus)
// // for(let i=1; i<=10; i++){
// //     let newElement = document.createElement('p')
// //     newElement.textContent = 'This is para' + i;

// //     // newElement.addEventListener('click', function(event){
// //     //     console.log('I have clicked on my para');
// //     // });
// //     myDiv.appendChild(newElement)
// // }
// // document.body.appendChild(myDiv);

// // let elements = document.querySelectorAll('#dot');

// // element.addEventListener('click', function(event){
// //     console.log('click on the span' + event.target.textCONTENT);
// // })

// // elements.forEach((element) => {
// //     element.addEventListener('click', function(event) {
// //         console.log('click on the span: ' + event.target.textContent);
// //     });
// // });
 

// event loop -> inetrview question
// reflow calculation
// Document Fragment -> lightweight object, addition -> rflow, reprint 
//  |__> added with document then 1reflow and 1 reprint



// console.log('Learning Day 6')

// for(let i=0; i<100; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para' + i;

//     document.body.appendChild(newElement);
// }

// let myDiv = document.createElements('div')

// for(let i=0; i<10; i++){
//     let element = document.createElement('p');
//     element.textContent = 'This is para' + i;

//     document.body.appendChild(element)
// }

// The call stack
// single threading -> single thread language, processing of at a time  one command

// function addPara(){
//     let para = document.createElement('p')
//     para.textContent = 'JS is single thread language'
//     document.body.appendChild(para);
// }

// function appendNewMessage(){
//     let para = document.createElement('p')
//     para.textContent = 'whats app bro'
//     document.body.appendChild(para)
// }

// addPara();
// appendNewMessage();

// observation
// 1. run-to-completion
// 2. JS does not execute multiple line/function at the same time
// 3. 

// Callstack :-
// A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser)
//  to keep track of its place in a script that calls multiple functions —
// what function is currently being run and what functions are called from within that function, etc.

// flip rloupe 26minn video

