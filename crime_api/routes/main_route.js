//
// 'use strict';
// module.exports = function(app) {
//     let controller = require('../controllers/api_controller');
//
//     // todoList Routes
//     app.route('/crimes')
//         .get(controller.list_all_tasks);
// };

'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/api_controller');

    app.route('/addresses')
        .get(todoList.get_crime_address_data);

    app.route('/crimes')
        .get(todoList.get_crime_data);

};