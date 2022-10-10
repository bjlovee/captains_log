const React = require('react')

class New extends React.Component {
    render(){
        return (
            <>
            <h1>Captains Log</h1>
            <form method='POST' action="/logs">
                Title: <input type="text" placeholder='Title'></input><br/>
                Entry: <input type="textarea" placeholder='Entry'></input><br/>
                ShipIsBroken: <input type="checkbox"></input><br/>
                <input type="submit"></input>
            </form>
            </>
        )
    }
}

module.exports = New