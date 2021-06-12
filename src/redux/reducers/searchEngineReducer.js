import apiStatus from "../../utilities/apiStatus";
import * as types from "../actions/actionTypes";
import initialState from "./initalState";
import { parseErrorMessage } from "../../utilities/parseErrorMessage";

const searchEngineReducer = (state = initialState, action) => {
    switch(action.type){
        case types.BEGIN_LOAD_SERACH_ENGINE_OPTIONS:
            return {...state, loadSearchEngineOptionsApiStatus: apiStatus.LOADING};
        case types.LOAD_SERACH_ENGINE_OPTIONS_SUCCESS:
            return {
                ...state, 
                loadSearchEngineOptionsApiStatus: apiStatus.SUCCEEDED, 
                searchEngineOptions: action.searchEngineOptions
            };
        case types.LOAD_SERACH_ENGINE_OPTIONS_ERROR:
            return {
                ...state, 
                loadSearchEngineOptionsApiStatus: apiStatus.FAILED, 
                searchEngineOptions: [],
                errorMessage: parseErrorMessage(action.error)
            };
        case types.BEGIN_FETCH_RANKS:
            return {...state, fetchRanksApiStatus: apiStatus.LOADING};
        case types.FETCH_RANKS_SUCCESS:
            return {...state, fetchRanksApiStatus: apiStatus.SUCCEEDED, ranks: action.ranks};
        case types.FETCH_RANKS_ERROR:
            return {
                ...state, 
                fetchRanksApiStatus:apiStatus.FAILED, 
                errorMessage: parseErrorMessage(action.error)
            };
        case types.PAGE_CLEAN_UP:
            return initialState;
        default:
            return state;
    }
}

export default searchEngineReducer