// Feb 8 2021

// switch statement
const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start trading.');
        break;
    case 'Tuesday':
        console.log('Start Tuesday.');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Trading and go to work.');
        break;
    case 'Friday':
        console.log('Have a weekends.');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Do no trade');
        console.log('Just go to work');
        break;
    default:
        console.log('No valid day.')
}

// vs if statement

if (day === 'Monday') {
    console.log('Start trading.');
} else if (day === 'Tuesday') {
    console.log('Start Tuesday.');
} else if (day === 'Wednesday' || day === 'Thursday') {
    console.log('Trading and go to work.');
} else if (day === 'Friday') {
    console.log('Have a weekends.');
} else if (day === 'Saturday' || day === 'Sunday') {
    console.log('Do no trade');
    console.log('Just go to work');
} else {
    console.log('No valid day.')
}
