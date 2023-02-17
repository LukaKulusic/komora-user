import axios from 'axios'

// var apiUrl = window.location.href.indexOf('stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

var apiUrl = "https://laravel.stomkomcg.me"
// var apiUrl = "http://127.0.0.1:8000/"

export function getNews_api(){
    return axios.get(apiUrl + '/news')
}

export function getNoveltyDetails_api(id) {
    return axios.get(apiUrl + '/news/'+id)
}

export function getNewsForCategory_api(action) {
    return axios.get(apiUrl + '/newsForCategory/'+action)
}

export function getNewsForFooter_api() {
    return axios.get(apiUrl + '/newsForFooter')
}

export function getPopularNews_api() {
    return axios.get(apiUrl + '/popularNews')
}

export function getLastNew_api() {
    return axios.get(apiUrl+ '/lastNew');
}