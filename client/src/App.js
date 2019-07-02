import React from 'react'
import './App.css'
import { Button, Divider, Icon } from 'semantic-ui-react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    
    componentDidMount = async () => {
        const res = await fetch('/users')
        console.log(res)
        const users = await res.json()
        console.log(users)
        this.setState({ users })
    }
    
    render = () => {
        return (
            <div className="App">
                <Button>HEUYY</Button>
                <p>hello</p>
            </div>
        )
    }
}

export default App;
