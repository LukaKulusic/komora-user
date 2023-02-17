import axios from 'axios'

// var apiUrl = window.location.href.indexOf('stomkomcg.me') >= 0 ? 'https://laravel.stomkomcg.me' : 'http://api.zk.test';

// var apiUrl = "http://127.0.0.1:8000/"
var apiUrl = 'https://laravel.stomkomcg.me';

var config = {
    // + localStorage.getItem('token')
    headers: {'Authorization': "bearer " }
};

export function getMembers_api(){
    return axios.get(apiUrl + '/member')
}

export function getBoardMembers_api() {
    return axios.get(apiUrl + '/boardMember')
}

export function getBiography_api(id) {
    return axios.get(apiUrl + '/biography/'+id);
}

export function getMembersPg_api () {
    return axios.get(apiUrl + '/parliamentPg')
}

export function getMembersNk_api () {
    return axios.get(apiUrl + '/parliamentNk')
}

export function getMembersCt_api () {
    return axios.get(apiUrl + '/parliamentCt')
}

export function getMembersSouth_api () {
    return axios.get(apiUrl + '/parliamentSouth')
}

export function getMembersNorth_api () {
    return axios.get(apiUrl + '/parliamentNorth')
}

export function getCities_api () {
    return axios.get(apiUrl + '/cities')
}

export function addParticipans_api (details) {
    
    const data = new FormData()
    data.append('name', details.name)
    data.append('vocation', details.vocation)
    data.append('company', details.company)
    data.append('address', details.address)
    data.append('country', details.country)
    data.append('phone', details.phone)
    data.append('email', details.email)
    data.append('images', details.images)

    return axios.post(apiUrl + '/congress', data, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
}

export function getMembersPerCity_api (details) {
    return axios.get(apiUrl + '/searchMembersPerCity/'+details)
}

