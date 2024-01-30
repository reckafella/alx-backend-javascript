import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function router(app) {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default router;
module.exports = router;
