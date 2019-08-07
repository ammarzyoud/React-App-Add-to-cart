import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <div>
                <span className = {this.changeBadgeColor()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.count)}
                 className = "btn btn-secondary btn-sm">+</button>
                <button onClick={() => this.props.onDecrement(this.props.count)}
                 className = "btn btn-secondary btn-sm m-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.count.id)}
                 className="btn btn-danger btn-sm m-2">delete</button>
            </div>
        );
    }

    changeBadgeColor() {
        let classes = "badge m-2 badge-";
        classes += this.props.count.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.props.count;
        return count === 0 ? "zero": count ;
    }
}
 
export default Counter;