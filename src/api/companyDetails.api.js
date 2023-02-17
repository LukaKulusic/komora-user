import axios from 'axios'

// var apiUrl = window.location.href.indexOf('stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = "https://laravel.stomkomcg.me"
// var apiUrl = "http://127.0.0.1:8000"

export function getCompanyDetails_api() {
    return axios.get(apiUrl + '/footer');
}

export function sendEmail_api(email) {
    return axios.post(apiUrl + '/contact', email)
}