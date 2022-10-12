const React = require('react');
const Logs = require('../../models/logs');

class Index extends React.Component{
    render(){
        return(
            <>
                <h1>Create Page</h1>
                <ul>
                    <a href="/logs">Go To Create Page</a> 
                   
                </ul>
            </>
        )
    }
}

module.exports = Index