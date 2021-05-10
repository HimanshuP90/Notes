import React, { Component } from 'react'

export class AutoComplete extends Component {
    state = {
        inputVal: ''
    }

    handleChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    render() {
        const { inputVal } = this.state;

        const matches = this.props.names && this.props.names
        .filter(name => {
            return name.toLowerCase().indexOf(inputVal.toLowerCase()) == 0
        }).map(name => {
            return <li key={name}>{name}</li>
        })
        return (
            <div>
                <h1>Autocomplete feature</h1>
                <label>Name
                    <input
                        type="text"
                        value={inputVal}
                        onChange={this.handleChange}
                    />
                </label>
                <ul>{matches}</ul>
            </div>
        )
    }
}

export default AutoComplete
