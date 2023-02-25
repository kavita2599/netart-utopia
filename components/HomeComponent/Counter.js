/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui";
import React from 'react'
import CountUp from 'react-countup'
import handleViewport from 'react-in-viewport'

class Counter_Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            start: false,
            inViewport: false,
            animation_complete: false
        }
    }

    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport, value: this.props.state})
            setTimeout(() => { 
                this.setState({start: true, animation_complete: true})
            }
            , this.props.delay);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    render() {
        const { value, symbol} = this.props

        // const Animation = keyframes`
        //     0%  {color: #04e5e5;}
        //     10% {color: #f37055;}
        //     20% {color: #ef4e7b;}
        //     30% {color: #a166ab;}
        //     40% {color: #5073b8;}
        //     50% {color: #04e5e5;}
        //     60% {color: #07b39b;}
        //     70% {color: #6fba82;}
        //     80% {color: #5073b8;}
        //     90% {color: #1098ad;}
        //     100% {color: #f37055;}
        // `
        // const Symbol = styled.span`
        //     animation: ${this.props.animation ? css`${Animation} 10s infinite alternate` : `none`};
        // `

        
        return (
            <div className="counter">
                <CountUp className="value"  start={0} end={this.state.start === true ? value : 0} duration={this.props.duration ? this.props.duration : 1}/>
                <span className="symbol" style={{animation:"10s infinite alternate"}} sx={{fontFamily:'Poppins, sans-serif',fontSize:'30px'}}>{symbol}</span>
                {this.text()}
            </div>
        )
        
    }

    text() {

        if (this.props.text) {
           
            return (
                <div>
                    <span className="text" sx={{fontFamily:'Poppins, sans-serif',fontSize:'30px'}} >{this.props.text}</span>
                </div>
            )
        }
    }
}

const Counter = handleViewport(Counter_Component);

export default Counter