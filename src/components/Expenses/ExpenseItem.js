import ExpenseDate from "./ExpenseDate";
import { useState } from "react"; 
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // 컴포넌트 함수에서 직접적으로 호출해야함. 
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Update!');
  }
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
