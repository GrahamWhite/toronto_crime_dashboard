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

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/crimes_raw')
        .get(todoList.get_crime_address_data);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};