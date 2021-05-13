import React, { Component } from "react";
import Users from "./Users";

export default class App extends Component {
    state = {
        users: [
            { id: 1, name: "Islam", age: "26", gender: "male" },
            { id: 2, name: "Rita", age: "18", gender: "female" },
            { id: 3, name: "Oleg", age: "25", gender: "male" }
        ]
    }
    addUsers = (user) => {
        console.log(this.state.users)
        const newUserArr = [...this.state.users];
        newUserArr.push(user);
        this.setState({ users: user });
      
    }
    render() {

        return (<div>
            <Users arrUsers={this.state.users} addUsers={this.addUsers} />
            {this.state.users.map(({ name, age, gender }, id) => (
                <p key={id}>{name},{age},{gender}</p>
            ))}
        </div>
        )
    }
}
