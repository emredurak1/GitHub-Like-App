export const getPopularRepositories = async (req, res) => {
  try {
    const { language } = req.params;

    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await response.json();

    res.status(200).json({ data });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
