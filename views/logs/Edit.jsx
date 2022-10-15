const React = require('react');
const Default = require('../layouts/Default.jsx')


class Edit extends React.Component {
    render(){
        const {title, _id, entry, shipIsBroken} = this.props.logs
        return (
            <Default title={`${title} Edit Page`} log={this.props.logs}>
                <form method="POST" action={`/logs/${_id}?_method=PUT`}>
                    title: <input type="text" title="title" defaultValue={title}></input><br/>
                    entry: <input type="text" title="entry" defaultValue={entry}></input><br />
                    ship Is Broken: <input type="checkbox" title="shipIsBroken" defaultChecked={shipIsBroken}/> <br />
                    <input type="submit" value="Edit Logs" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit