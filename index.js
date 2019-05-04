const axios = require('axios');

class Gdeposylka {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        this.API_URL = "https://gdeposylka.ru/api/v4/";
    }

    async sendRequest(url) {
        const full_url = this.API_URL + url;
        return axios.get(full_url, {
            method: 'GET',
            headers: {
                "X-Authorization-Token": this.API_KEY,
                "Content-Type": "application/json"
            }
        })
            .then(res => res.data)
            .then(data => {
            if (data.result === 'error') {
                throw data;
            }
            return data;
        }).catch(err => console.log(err));
    }

    async getCouriers() {
        return await this.sendRequest("couriers");
    }

    async getSlug(trackNumber) {
        const url = `tracker/detect/${trackNumber}`;
        return await this.sendRequest(url);
    }

    async getInfo(trackNumber, slug) {
        const url = `tracker/${slug}/${trackNumber}`;
        return await this.sendRequest(url);
    }

    async getSlugAndInfo(trackNumber) {
        const slugs = await this.getSlug(trackNumber);
        const slugName = slugs.data[0].courier.slug;
        return this.getInfo(trackNumber, slugName);
    }

}

module.exports = Gdeposylka;