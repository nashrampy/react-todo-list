import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
        return{
            background : '#f4f4f4',
            padding : '10px',
            borderBottom : '1px #ccc dotted',
            //ternary operator.
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }        
    }
    
    render() {
        // DESTRUCTING TO PULL VARIABLES OUT OF TODO IN PROPS.
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()} >
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind (this, id)} /> {' '}                
                {title}
                <button onClick={this.props.delTodo.bind( this,id)} style={btnStyle}>x</button>
            </p>
        </div>
        )
    }
}

//PropTypes
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background : '#ff0000',
    color: '#fff',
    border : 'none',
    padding : '5px 8px',
    cursor: 'pointer',
    float : 'right',
    borderRadius : '50%'
}

export default TodoItem



// const itemStyle = {
//     backgroundColor : '#f4f4f4'
// }


// if(this.props.todo.completed){
//     return {
//         textDecoration :'line-through'
//     }
// }else{
//     return{
//         textDecoration:'none'
//     }
// }

/* </div><div style={itemStyle}>
<div style={{backgroundColor:'#f4f4f4'}}>  */