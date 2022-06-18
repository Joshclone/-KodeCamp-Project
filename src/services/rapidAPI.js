import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://fastah-ip.p.rapidapi.com/whereis/v1/json/auto',
    headers: {
      'X-RapidAPI-Key': '2c1e698eaemsh7ec7ca484be5e38p1f17ffjsnfd5114e9e1d4',
      'X-RapidAPI-Host': 'fastah-ip.p.rapidapi.com'
    }
  }  

const getDistance = async (location) => {
    const [latitude, longitude] = location


}

const getLocationByIp = async () => {
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

export default {getLocationByIp, getDistance}