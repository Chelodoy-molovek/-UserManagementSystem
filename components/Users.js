import React, {Component } from "react";


export default class Users extends Component {
    onSubmit = (evt) => {
        evt.preventDefault();
        const formData = new FormData(evt.target);
        const data = [...formData.values()];
        const user = { name: data[0], gender: data[1], age: data[2] };
        this.props.addUsers(user);
        // this.props.deleteFunc(user);
    }
    render() {

        return (
           
            <div>
                <div className="spisok">
                    <h1>Список пользователей</h1>
                </div>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="name" placeholder="name"></input>
                        <input type="text" name="gender" placeholder="gender"></input>
                        <input type="number" name="age" placeholder="age"></input>
                        <button>Добавить</button>
                    </form>
                </div>
            </div>
        )
    }
}