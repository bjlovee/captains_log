const React = require('react')
const Default = require('../layouts/Default.jsx')
class New extends React.Component {
    render(){
        return (
            <Default title="Create New Log">
        
            <nav>
                <a href="/logs">Go Back To Logs Home Page</a>
            </nav>
            <form method='POST' action="/logs">
                Title: <input type="text" name="title" placeholder='title of Log Here'></input><br/>
                Entry: <input type="text" name="entry" placeholder='entry of Log Here'></input><br/>
                Ship Is Broken: <input type="checkbox" title="shipIsBroken"></input><br/>
                <input type="submit" value="Submit Log"></input>
            </form>
            </Default>
        )
    }
}

module.exports = New