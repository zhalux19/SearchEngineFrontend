
import { call, put, takeLeading} from 'redux-saga/effects'
import * as searchEngineApi from "../../api/searchEngineApi";
import * as actionTypes from "../actions/actionTypes";
import {fetchRanksSuccess, fetchRanksError, loadSearchEngineOptionsSuccess, loadSearchEngineOptionsError} from "../actions/searchEngineActions"
 
function* getSearchEnginOptions() {
    try {
       const searchEngineOptions = yield call(searchEngineApi.getSearchEngineOptions);
       yield put(loadSearchEngineOptionsSuccess(searchEngineOptions));
    } catch (e) {
       yield put(loadSearchEngineOptionsError(e));
    }
 }
 
export function* getSearchEngineOptionsWatchSaga(){
    yield takeLeading(actionTypes.BEGIN_LOAD_SERACH_ENGINE_OPTIONS, getSearchEnginOptions);
}

function* fetchRanks({searchEngineId, keyword, targetUrl}) {

    try {
       const ranks = yield call(searchEngineApi.getKeywordRanks, {searchEngineId, keyword, targetUrl});
       yield put(fetchRanksSuccess(ranks));
    } catch (e) {
       yield put(fetchRanksError(e));
    }
 }
 
export function* fetchRanksWatchSaga(){
    yield takeLeading(actionTypes.BEGIN_FETCH_RANKS, fetchRanks);
}
