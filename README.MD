# gdeposylka-api

Small pacakge to work with [gdeposylka.ru](https://gdeposylka.ru) trackging [api](https://gdeposylka.ru/tracking-api/).

![npm](https://img.shields.io/npm/v/gdeposylka-api.svg?style=flat-square)
##Features

- Send requests to tracking api
- Find all needed info with one method

## Installing

Using npm:

```bash
npm install gdeposylka-api
```

##Example
```ecma script level 4
const Gdeposylka = require('gdeposylka-api');

// Init tracking class first
const trackingApi = new Gdeposylka('API_KEY');

//List slugs
trackingApi.getCouriers().then(console.log);

//Find slug by tracking number
trackingApi.getSlug('TRACKING_NUMBER').then(console.log);

//Find tracking info by tracking number and slug
trackingApi.getSlug('TRACKING_NUMBER', 'SLUG_ID').then(console.log);

//Find all info about tracking number but firstly finds correct slug
trackingApi.getSlugAndInfo('TRACKING_NUMBER').then(console.log);
```