import React, { Component } from "react";
import "./Die.css";


class Die extends Component {
    render() {
        return (
            <div>
                {/* Dodata je Die klasa da bi smo je mogli oznaciti u css */}
                <i className = {`Die fas fa-dice-${this.props.face} ${this.props.rolling ? 'shaking' : ""}`} />
            </div>
        );
    }
}
export default Die;