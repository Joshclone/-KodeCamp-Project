
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
    headers: {
      'X-RapidAPI-Key': '2c1e698eaemsh7ec7ca484be5e38p1f17ffjsnfd5114e9e1d4',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
    }
  };
    
const getLocationByIp = async (ip = null) => {
    // options.params = {ip}
    //console.log(options)
    try {
      let response = await axios.request(options)
      console.log(response.data)
      return response.data
    } catch (error) {
      return error      
    }
}


// const getDistance = async (location) => {
//     const [latitude, longitude] = location


// }

export default {getLocationByIp}
