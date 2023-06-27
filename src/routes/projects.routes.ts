import express from 'express';
import ProjectController from "../controllers/projects.contr.js"
import adminChecker from '../middleware/admin.checker.js';

const router = express.Router();
router.post('/projects', adminChecker, ProjectController.createProject);
router.get('/projects', ProjectController.getAllProjects);
router.get('/projects/:id', ProjectController.getProjectById);
router.put('/projects/:id', adminChecker, ProjectController.updateProject);
router.delete('/projects/:id', adminChecker, ProjectController.deleteProject);

export default router;