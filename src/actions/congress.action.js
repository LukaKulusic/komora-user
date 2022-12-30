import { congressConstants } from "../constants/congress.constants"

export function addParticipans_request(content) {
    return {
        type: congressConstants.ADDPARTICIPANS_REQUEST,
        payload: content
    }
}
export function addParticipans_success(content) {
    return {
        type: congressConstants.ADDPARTICIPANS_SUCCESS,
        payload: content
    }
}
export function addParticipans_failure(error) {
    return {
        type: congressConstants.ADDPARTICIPANS_FAILURE,
        payload: error
    }
}
