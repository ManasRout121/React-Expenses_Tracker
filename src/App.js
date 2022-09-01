import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = [
  {
    id: "e1",
    date: new Date(2022, 8, 31),
    title: "School Fee",
    amount: 800
  }
  ,
  {
    id: "e2",
    date: new Date(2022, 8, 25),
    title: "Book Fee",
    amount: 300
  }
  ,
  {
    id: "e3",
    date: new Date(2022, 7, 20),
    title: "Beer Fee",
    amount: 1000
  }
  ,
  {
    id: "e4",
    date: new Date(2022, 6, 11),
    title: "Bus Fee",
    amount: 200
  }
];


const App = ()=> {
    
    const[expenses, setExpenses] = useState(DUMMY_EXPENSE);

    // fetch('https://api.sampleapis.com/coffee/hot').then(
    //   response =>{
    //     return response.json();
    //   }
    // ).then(
    //   data =>{
    //     console.log(data);
    //     setExpenses(data);
    //   }
    // );

    const addExpenseHandler = (expense)=>{
      const updateExpense = [expense, ...expenses];
      setExpenses(updateExpense);
    }

  return (
    <div>
        <NewExpense onAddExpense ={addExpenseHandler}/>
        <Expenses item={expenses}/>
    </div>
  );
}

export default App;
