import axios from "axios";

const url = "https://findestate.herokuapp.com/api/bookHotel";

// bookingHotel
const bookingHotel = async (hotelData) => {
  const response = await axios.post(`${url}/bookingHotel`, hotelData);

  return response.data;
};

const bookHotelService = {
  bookingHotel,
};

export default bookHotelService;
