import apiStatus from "../../utilities/apiStatus";

const initialState = {
    searchEngineOptions: [],
    loadSearchEngineOptionsApiStatus: apiStatus.IDLE,
    ranks: [],
    fetchRanksApiStatus: apiStatus.IDLE,
    errorMessage: ""
}

export default initialState;