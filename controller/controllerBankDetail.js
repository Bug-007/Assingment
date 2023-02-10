const pool = require("../dbConnetion");

const getAllBanks = async (req, res) => {
  await pool.query("SELECT name FROM banks", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const getBranchDetails = async (request, response) => {

    const branch = request.query.branch;
  
    await pool.query('SELECT * FROM branches WHERE branch = $1', [branch], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }

module.exports = { getAllBanks, getBranchDetails };
