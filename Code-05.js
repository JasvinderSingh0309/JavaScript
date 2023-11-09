// Switch Case
var user = 'subAdmin';
switch(user) {
    case 'admin':
        console.log('Full access allowed');
        break;
    case 'subAdmin':
        console.log('Allowed just to delete or create courses');
        break;
    case 'testprep':
        console.log('Allowed just to delete or create tests');
        break;
    // either use break or return, but return only when switch is in a function.
    case 'user':
        return console.log('Allowed just to consume content');
    default :
        console.log('Access denied');
}