import * as types from "./actionTypes";

export const loadSearchEngineOptions = () =>{
    return {type: types.BEGIN_LOAD_SERACH_ENGINE_OPTIONS}
}

export const loadSearchEngineOptionsSuccess = (searchEngineOptions)=>{
    return {type: types.LOAD_SERACH_ENGINE_OPTIONS_SUCCESS, searchEngineOptions}
}

export const loadSearchEngineOptionsError = (error) => {
    return {type: types.LOAD_SERACH_ENGINE_OPTIONS_ERROR, error}
}

export const fetchRanks = (searchEngineId, keyword, targetUrl) =>{
    return {type: types.BEGIN_FETCH_RANKS, searchEngineId, keyword, targetUrl}
}

export const fetchRanksSuccess = (ranks) =>{
    return {type: types.FETCH_RANKS_SUCCESS, ranks}
}

export const fetchRanksError = (error) => {
    return {type: types.FETCH_RANKS_ERROR, error}
}

export const pageCleanUp =() =>{
    return {types: types.PAGE_CLEAN_UP}
}