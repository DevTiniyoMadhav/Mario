// Returns a function that we can read Environment variables,
// where we put things we never want to check into github.
module.exports = function(){
    switch(process.env.NODE_ENV){
    case 'debug':
        return {
	    'MODE':process.env.NODE_ENV,
	    'DYNO_CART_SENDER':'communicart.test@gmail.com',
	    'SENDER_CREDENTIALS':process.env.COMMUNICART_DOT_SENDER,
	    'GSA_SCRAPE_URL' :'http://gsa-advantage-scraper:8089/cgi-bin/gsa-adv-cart.py',
	    'GSA_PASSWORD': process.env.GSA_PASSWORD,
	    'GSA_USERNAME': process.env.GSA_USERNAME,
	    'SIM_MAP_USER_EMAIL':{ "ROBERTLREAD" : "read.robert@gmail.com" }
	};
    case 'development':
        return {
	    'MODE':process.env.NODE_ENV,
	    'DYNO_CART_SENDER':'communicart.test@gmail.com',
	    'SENDER_CREDENTIALS':process.env.COMMUNICART_DOT_SENDER,
	    'GSA_SCRAPE_URL' :'http://gsa-advantage-scraper:8089/cgi-bin/gsa-adv-cart.py',
	    'GSA_PASSWORD': process.env.GSA_PASSWORD,
	    'GSA_USERNAME': process.env.GSA_USERNAME,
	    'SIM_MAP_USER_EMAIL':{ "ROBERTLREAD" : "read.robert@gmail.com" }
	};
    default:
        return {
	    'MODE':process.env.NODE_ENV,
	    'DYNO_CART_SENDER':'communicart.test@gmail.com',
	    'SENDER_CREDENTIALS':process.env.COMMUNICART_DOT_SENDER,
	    'GSA_SCRAPE_URL' :'http://gsa-advantage-scraper:8089/cgi-bin/gsa-adv-cart.py',
	    'GSA_PASSWORD': process.env.GSA_PASSWORD,
	    'GSA_USERNAME': process.env.GSA_USERNAME,
	    'SIM_MAP_USER_EMAIL':{ "ROBERTLREAD" : "read.robert@gmail.com" }
	};


    }
};
