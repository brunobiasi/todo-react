import React from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import {deleteItem, changeDone} from '../actions/listAction';

function DoneImg(props){
    if(props.done){
        return(<img alt="done" src="./assets/check-circle.svg"></img>)
    } else {
        return(<img alt="undone" src="./assets/circle.svg"></img>)
    }
}

function ListItem(props){

    const dispatch = useDispatch();
    
    return(
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={()=>{dispatch(changeDone(props.item.id))}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=>{dispatch(deleteItem(props.item.id))}}><img alt="delete" src="./assets/trash.svg"></img></button>
                </div>
            </Card>
        </li>
    )
}

export default ListItem;