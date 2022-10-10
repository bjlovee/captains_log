const React = require('react')

class New extends React.Component {
    render(){
        return(
            <>
            <form method='POST' action='/logs'>
                Title: <input type="text"></input><br/>
                Entry: <input type="textarea"></input>
                ShipIsBroken: <input type="checkbox"></input>
                        <input type="submit"></input>
            </form>
            </>
        )
    }
}