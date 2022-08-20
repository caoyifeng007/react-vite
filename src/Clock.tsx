import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class Clock extends React.Component {
    state: Readonly<{
        date: Date;
    }>;

    timerID: number = 0;

    sayHi(date: string) {
        console.log(`hi, time is: ${date}`);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    constructor(props: any) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render(): React.ReactNode {
        return (
            <div>
                <button
                    onClick={this.sayHi.bind(
                        this,
                        this.state.date.toLocaleTimeString(),
                    )}
                >
                    Hi
                </button>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
