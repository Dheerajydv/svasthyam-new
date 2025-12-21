export const signin = async (request, response) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(error?.statusCode || 500).json({ error: error });
  }
}