import React, { Component } from 'react'
import { Container,Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

class App extends Component {
    state = {
        minutes: 1,
        seconds: 0,
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <Container style={{ margin: "auto" }}>
                <Card.Title style={{ margin: "2em 16em",fontSize:"25px",fontFamily:"serif" ,color:"red"}} >React Timer With Reat Life Cycle Concept</Card.Title>
                <Card style={{ width: '28rem' ,margin:"10em 25em"}}>
                    <Card.Body>
                        <div>
                            {minutes === 0 && seconds === 0
                                ? <h1>Busted!</h1>
                                : <Card.Title style={{ margin: "1.7em" }} >Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Card.Title>
                            }
                            <Card.Subtitle style={{ margin: "1.7em" }} className="mb-2 text-muted">React Timer</Card.Subtitle>
                        </div>


                        <Card.Text  style={{ margin: "1.7em" }}>
                            This Component Maked By Class Component 
                            Based On React Life Cycle -
                           <b>ComponentDidMount ComponentWillUnmount</b>
                        </Card.Text>
                        <Button  style={{ margin: "2em 4em" }}href="www.linkedin.com/in/yogeshwaran-s-37939021a"> Social Link</Button>
                        <Button href="https://www.youtube.com/channel/UCP23FSqQPw2bAFsNrgCYA5A"> Youtube Link</Button>

                    </Card.Body>
                </Card>
            </Container>
        )
    }
}
export default App;