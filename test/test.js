var dbconfig = {
    host: "db4free.net",
    user: "testdbgithub",
    password: "dfybkffqc5",
    database: "dbgithub"
};

var jsORM = require('../index.js');

var session = jsORM.session(dbconfig);

var userMap = session.tableMap('User')
    .columnMap('id', 'id')
    .columnMap('name', 'shortName')
    .columnMap('phone', 'tel');

var sqlQuery = session.query(userMap).select(function(err, result) {
    if (err === null) console.log(result);
});
