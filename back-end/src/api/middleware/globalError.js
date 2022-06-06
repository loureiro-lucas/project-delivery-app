const error = (err, _req, res, _next) => {
  console.error(err.message);

  if (err.message === 'jwt malformed') return res.status(400).json({ error: err.message });

  return res.status(500).json({ error: 'Internal server error' });
};

module.exports = error;