import axios from 'axios'

// var apiUrl = window.location.href.indexOf('stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = "https://laravel.stomkomcg.me"

export function getCompanyDetails_api() {
    return axios.get(apiUrl + '/footer');
}

export function sendEmail_api(email) {
    console.log('email in api: ', email);
    return axios.get(apiUrl + '/sending-mail/'+ email)
}