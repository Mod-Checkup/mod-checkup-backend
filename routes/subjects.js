import express from 'express'
import { getPostBySubject, getActivePostsBySubjectAndPage } from '../controllers/posts.js';
import { getAllActiveSubjects, addSubject, updateSubject, getSubjectInfo, getAllActiveSubjectsByPage, searchSubjectByAbbr} from '../controllers/subjects.js'
import checkAuthorize from '../_helpers/checkAuthorize.js'
import Role from '../_helpers/role.js'

const router = express.Router();

//Everyone Access
router.get('/', getAllActiveSubjects);
router.get('/:subject', getSubjectInfo);
router.get('/:subject/posts', getPostBySubject);
router.get('/search/:subjectAbbr', searchSubjectByAbbr);

//Teacher & Admin Access
router.post('/', checkAuthorize(Role.Admin, Role.Teacher), addSubject);
router.put('/:subject', checkAuthorize(Role.Admin, Role.Teacher), updateSubject);

//In Development
// router.get('/csv/export', exportCsvFile);
// router.post('/csv/import', importCsvFile);
router.get('/page/:pageNo/size/:pageSize', getAllActiveSubjectsByPage);
router.get('/:subject/posts/page/:pageNo/size/:pageSize', getActivePostsBySubjectAndPage);

export default router;