const { Router } = require('express');
const {getAllBanks} = require('../controller/controllerBankDetail')
const {getBranchDetails} = require('../controller/controllerBankDetail')
const router = Router();


router.get('/api/allbanks',getAllBanks);
router.get('/branchdetail/:branch',getBranchDetails);

module.exports = router;