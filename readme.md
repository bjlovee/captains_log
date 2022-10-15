
 |  Action       | URL           | HTTP Verb| JSX view filename | mongoose method |
|----------------|---------------|----------|----------------|--------------------|
| Index          | /logs/        | GET      |Index.jsx       |Log.find()          |
| Show           | /logs/show    |          |Show.jsx        |                    |
| New            | /logs/new	 | GET      |New.jsx         |none                |
| Create         | /logs/        | POST     |none            |Log.create(reqbody) |
| Edit           | /logs/:id/edit|GET       |Edit.jsx        |                    |
| Update         |/log.id        |PUT       |none  |Log.findByidAndUpdate or<br/>Log.findyidAndDelete|
| Destroy        |/logs/:id      |DELETE    |none  |Log.findByidAndRemove or<br/>Log.findByidAndDelete|
 