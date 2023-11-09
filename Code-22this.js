// For all "regular function call", 'this' points to window/global object.
console.log(this);

// const obj = {
//     Name : 'Jasvinder',
//     age : 23,
//     count : 4,
//     display : function() {
//         console.log(this);
//     },
// };
// obj.display();

const obj = {
    Name : 'Jasvinder',
    age : 23,
    count : 4,
    display : function() {
        console.log('Line 19',this);
        function show() {
            console.log('Hello!');
            console.log('Line 22',this);
        }
        show(); // rfc
    },
};
obj.display(); // not rfc 