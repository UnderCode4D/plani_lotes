const cors = require('cors');

const corsOptions = {
  origin: '*',
};

module.exports = cors(corsOptions);
