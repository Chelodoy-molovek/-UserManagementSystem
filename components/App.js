import React, { Component } from "react";
import Users from "./Users";

export default class App extends Component {
    state = {
        search: "",
        users: [
            { id: 1, name: "Islam", age: "26", gender: "male" },
            { id: 2, name: "Rita", age: "18", gender: "female" },
            { id: 3, name: "Oleg", age: "25", gender: "male" }
        ]
    }
    addUsers = (user) => {
        user.id = new Date().getTime();
        const newUserArr = [...this.state.users];
        newUserArr.push(user);
        this.setState({ users: newUserArr });
    }
    deleteFunc = (user) => {
        const newCard = this.state.users.filter((item) => item.id !== user.id)
        this.setState({ users: newCard });
    }
    slam = (e) =>{
        const value = e.target.value;
        this.setState({search : value});
    }
    render() {

        return (<div>
            <Users deleteFunc={this.deleteFunc} addUsers={this.addUsers} />
            {this.state.users.map(({ id, name, age, gender }) => (
                <div key={id}>
                    <p >{name},{age},{gender}</p>
                    <button onClick={(e) => this.deleteFunc({ id, name, age, gender })}>del</button>
                </div>
            ))}
            {/* <input onChange={this.slam}></input>
            {this.state.users.filter((user) => user === this.state.search).map((user)=>( 
                <Employee name={user.name} key={user.name} />
            ))} */}
        </div>
        )
    }
}
