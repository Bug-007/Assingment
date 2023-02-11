const pool = require("../dbConnetion");

const getAllBanks = async (req, res) => {
  await pool.query("SELECT * FROM banks", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const getBranchDetails = async (request, response) => {

    const branch = request.params.branch;
  
    await pool.query('SELECT * FROM branches WHERE branch = $1', [branch], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }


  const getBankBranchDetails = async (request, response) => {

    const branch = request.params.branch;
    const bankid = parseInt(request.params.bankid);

    await pool.query('SELECT * FROM branches WHERE branch = $1 and bank_id = $2', [branch, bankid], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }


module.exports = { getAllBanks, getBranchDetails, getBankBranchDetails };
