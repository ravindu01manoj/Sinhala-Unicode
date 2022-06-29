var axios = require('axios')

async function data(url) {
	var res = await axios.get(url)
	console.log(res.data)
}

data('https://ucsc.cmb.ac.lk//ltrl/services/feconverter/t1.html')