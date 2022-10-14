const React = require('react');
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
   
    render(){
        const {title, entry, shipIsBroken, _id} = this.props.log
        const captitle = title[0].toUpperCase() + title.substring(1)
        return(
        <Default title={`${captitle} Show Page`} log={this.props.log}>
            <p>{captitle} is {entry} and {shipIsBroken? 'it\'s shipIsBroken': 'it\'s not shipIsBroken'}</p>
        </Default>
        )
   } 
}

module.exports = Show