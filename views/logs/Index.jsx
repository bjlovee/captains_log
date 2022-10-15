const React = require('react');
const Default = require('../layouts/Default.jsx')


class Index extends React.Component{
    render(){
        const {logs} = this.props
        return(
            <Default title="logs Index Page">
                <ul>
                    {
                        logs.map((log) => {
                            const {title, entry, shipIsBroken} = log
                            return (
                                <li key={log._id}>
                                    <a href={`/logs/${log._id}`}>
                                    {title}</a> is {entry}
                                    
                                     <br/>
                                    {
                                        shipIsBroken? 
                                        'Ship Is Broken':
                                        'Ship Is 100% Working'
                                    }
                                    <br/>
                                    <form method="POST" action={`/logs/${logs._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${title} ${entry}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul> 
            </Default>
        )
    }
}

module.exports = Index