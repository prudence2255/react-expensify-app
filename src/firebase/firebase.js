import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAZknRYfwMnRou-jhhEoMHXw6SAXD_BPEo",
    authDomain: "expensify-38d10.firebaseapp.com",
    databaseURL: "https://expensify-38d10.firebaseio.com",
    projectId: "expensify-38d10",
    storageBucket: "expensify-38d10.appspot.com",
    messagingSenderId: "679604038725",
    appId: "1:679604038725:web:92480a5e39883eb05c872c",
    measurementId: "G-THEGR3E1L9"
}  


 firebase.initializeApp(firebaseConfig);
const database = firebase.database();

export {database as default, firebase}

// database.ref('expenses').once('value').then((data) => {
//     console.log(data.val());
//     const expenses = [];
//     data.forEach((expense) => {
//         expenses.push({
//            id: expense.key,
//            ...expense.val(),
//         });
//     })
//     console.log(expenses);
// });

// database.ref('expenses').on('value', (data) => {
//     const expenses = [];

//     data.forEach((expense) => {
//         expenses.push({
//             id: expense.key,
//             ...expense.val(),
//         })
//     })
//     console.log(expenses);
   
// })




// database.ref('notes').push({
//     title: 'ToDo',
//     body: 'Go to school' 
// })
// database.ref('notes/-LqmiMCQCLECg81PU_Mv').update({
//     body: 'Updated'
// })


// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 12300,
//     createdAt: 1237654889,
// });
// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 12300,
//     createdAt: 1237654889,
// })
// database.ref('expenses').push({
//     description: 'Water bill',
//     note: '',
//     amount: 12300,
//     createdAt: 1237654889,
// })
