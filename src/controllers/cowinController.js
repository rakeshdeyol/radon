let axios = require('axios');

let getStates = async function (req, res) {
  try {
    let options = {
      method: 'get',
      url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    var options = {
      method: 'post',
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

let getById = async function (req, res) {
  try {
    let district = req.query.districtId;
    let date = req.query.date;
    console.log(`query params are: ${district} ${date}`);
    var options = {
      method: 'get',
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// get weather of London from http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>  (NOTE: must use HTTP infront of the url else axios will attempt to hit localhost and give error  ..also use HTTP only and not HTTPS)

let getWeather = async function (req, res) {
  try {
    var options = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=9aa3078f0ef4517a9ea92eda85bb794a`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// then change the above to get the temperature only( of London)

let getTemp = async function (req, res) {
  try {
    var options = {
      method: 'get',
      url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=9aa3078f0ef4517a9ea92eda85bb794a`,
    };
    let result = await axios(options);
    console.log(result.data.main.temp);
    res.status(200).send({ temp: result.data.main.temp });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

//   Sort the cities  ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"] in order of their increasing temperature
//   result should look something like this
//   [
//   {city:"London", temp: 280},
//   {city:"Moscow", temp: 290},
//   {city:"Bangalore", temp: 301.2},
//   .......
//   ]

let sortTemp = async function (req, res) {
  try {
    let city = [
      'Bengaluru',
      'Mumbai',
      'Delhi',
      'Kolkata',
      'Chennai',
      'London',
      'Moscow',
    ];
    let sorting = [];
    for (let i = 0; i < city.length; i++) {
      let options = {
        method: 'get',
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=9aa3078f0ef4517a9ea92eda85bb794a`,
      };
      let result = await axios(options);
      let obj = {
        city: city[i],
        temp: result.data.main.temp,
      };
      console.log(obj);
      sorting.push(obj);
    }
    sorting.sort((a, b) => a.temp - b.temp);
    res.status(200).send({ msg: sorting });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

// Get all the memes at Postman (https://api.imgflip.com/get_memes)

let getMeme = async function (req, res) {
  try {
    let options = {
      method: 'get',
      url: `https://api.imgflip.com/get_memes`,
    };
    let memes = await axios(options);
    let allMemes = memes.data;
    res.status(200).send({ msg: allMemes });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

// Pick a memeId you want (Eg 129242436) for the POST request
// Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>
// text0 <text you want as a caption>
// text1 <optional>
// username chewie12345
// password @1meme23
// Return a response with a body like this
// "data": {
//           "url": "https://i.imgflip.com/5mvxax.jpg",
//           "page_url": "https://imgflip.com/i/5mvxax"
//         }

let postMeme = async function (req, res) {
  try {
    memeId = req.query.template_id;
    text0 = req.query.text0;
    text1 = req.query.text1;
    username = req.query.username;
    password = req.query.password;
    var options = {
      method: 'post',
      url: `https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };
    let result = await axios(options);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getById = getById;
module.exports.getWeather = getWeather;
module.exports.getTemp = getTemp;
module.exports.sortTemp = sortTemp;
module.exports.getMeme = getMeme;
module.exports.postMeme = postMeme;
