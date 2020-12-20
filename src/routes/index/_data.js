const got = require('got');
export let data = "";

(async () => {
	const body = await got.post('https://bitbay.net/API/Public/BTC/ticker.json', {
		json: {
			hello: 'world'
		}
	}).json();

    //console.log(body);
    data = body;
    console.log(data);
	//=> {…}
})();
