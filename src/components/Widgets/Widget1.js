import React, { Component } from 'react';
import "../../css/widget.css";
import Loading from './Loading';
import picasso from "picasso.js";

const placeHolder = {
    element: document.querySelector('#container'), // container must have a width and height specified
    settings: {
        scales: {
        budget: { max: 5000, min: 0 },
        sales: { max: 11000, min: 3000, invert: true }
    },
    components: [
        {
            type: 'axis',
            scale: 'budget',
            layout: {
                dock: 'bottom'
            }
        },
        {
            type: 'axis',
            scale: 'sales',
            layout: {
                dock: 'left'
            }
        },
        {
            type: 'point',
            data: [
                {sales: 7456, margin: 0.3, budget: 4557},
                {sales: 5603, margin: 0.7, budget: 2234},
                {sales: 8603, margin: 0.6, budget: 4121},
                {sales: 4562, margin: 0.4, budget: 1234},
                {sales: 9873, margin: 0.9, budget: 3453},
            ],
            settings: {
                x: { scale: 'budget', fn: d => d.scale(d.datum.value.budget) },
                y: { scale: 'sales', fn: d => d.scale(d.datum.value.sales) },
                size: d => d.datum.value.margin,
            }
        }
    ]
    }
}

class Widget1 extends Component {
    constructor(props) {
        super(props);
        this.spanStyles = {};
        if (props.colspan !== 1) {
            this.spanStyles.gridColumn = `span ${props.colspan}`;
        }
        if (props.rowspan !== 1) {
            this.spanStyles.gridRow = `span ${props.rowspan}`;
        }
    }
    
    render(){  
        return (
            <div style={this.spanStyles} className="Widget1">
                {picasso.chart(placeHolder)}
            </div>
        );
    }
}

// Provide default settings for when they aren't supplied
// Widget.defaultProps = {
//     heading: "",
//     colspan: 1,
//     rowspan: 1
// }

// // Enforce the type of props to send to this component
// Widget.propTypes = {
//     heading: React.PropTypes.string,
//     colspan: React.PropTypes.number,
//     rowspan: React.PropTypes.number,
//     children: React.PropTypes.element.isRequired
// }

export default Widget1;