export const searchAll = async (req, res) => {
  const { value } = req.query;

  const searchValue = value.toLowerCase().trim();

  try {
    const hotelsBySearch = await Hotel.findAll({
      where: {
        name: {
          [Op.like]: `%${searchValue}%`,
        },
        or: {
          description: {
            [Op.like]: `%${searchValue}%`,
          },
        },
      },
    });
  } catch (e) {
    return res.status(400).json({
      success: false,
      message: "Error searching for hotels",
    });
  }
};
