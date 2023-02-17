import axios from 'axios'

// var apiUrl = window.location.href.indexOf('admin.stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';
var apiUrl = 'https://laravel.stomkomcg.me';
// var apiUrl = "http://127.0.0.1:8000/"

var config = {
    headers: {'Authorization': "bearer " + localStorage.getItem('token')}
};

export function addParticipans_api(member) {
    return axios.post(apiUrl + '/congress', member, config)
}

