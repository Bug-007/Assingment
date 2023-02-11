const { Router } = require('express');
const controller = require('../controller/controllerBankDetail')
const router = Router();


router.get('/api/allbanks', controller.getAllBanks);
router.get('/branchdetail/:branch', controller.getBranchDetails);
router.get('/branchdetail/:bankid/:branch', controller.getBankBranchDetails);


module.exports = router;