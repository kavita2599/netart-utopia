
import React from 'react'
import handleViewport from 'react-in-viewport'
import styled, { keyframes } from 'styled-components';

class RC extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inViewport: false,
            animation_complete: false,
            classChanged: false,
            animate: false,
            running: false
        }
    }

    callParent() {
        if (this.props.callParentMethod) {
            this.props.parentMethod()
        }
    }
    componentDidUpdate() {
        if (this.state.inViewport !== this.props.inViewport && !this.state.animation_complete) {
            this.setState({inViewport: this.props.inViewport})
            let { delay } = this.props
            if (!delay) {
                delay = 0
            }

            this.setState({running : true})
                
            setTimeout(() => {
                this.callParent()
                this.animate()
                .then(() => {
                    this.setState({animation_complete: true, animate: false, running: false})
                })
            }, delay)
            
        }

        if (this.state.inViewport !== this.props.inViewport && this.state.running) {
            this.setState({animation_complete: true, animate: false, running: false})
            this.callParent()
        }
    }

    animate() {
      this.setState({animate: true})
      return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve()
        }
        , 2000);
      })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.animation_complete) {
            return false
        } else {
            return true
        }
    }

    render() {
        
        const { children } = this.props

        return <div className={this.props.className}>
                <div className={!this.state.animation_complete ? this.state.animate && this.state.running ? "reveal-animate reveal-content" : "" : "reveal-animation-complete reveal-content"}>
                    {children}
                </div>
            </div>
    }
}

const RevealContent = handleViewport(RC);

export default RevealContent;