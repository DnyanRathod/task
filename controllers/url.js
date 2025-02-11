const URL = require("../models/url");

async function handleGeneratNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortID });
  return res.json({
    totalClick: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGeneratNewShortURL,
  handleGetAnalytics,
};
