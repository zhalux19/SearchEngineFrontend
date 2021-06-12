import { handleResponse, handleError } from "../utilities/apiUtilities";

const searchEngineOptionUrl = "https://localhost:44380/searchengine";
const keywordRankBaseUrl = "https://localhost:44380/keywordrank";

export function getSearchEngineOptions() {
    return fetch(searchEngineOptionUrl).then(handleResponse).catch(handleError);
}

export function getKeywordRanks({searchEngineId, keyword, targetUrl}) {
    return fetch(`${keywordRankBaseUrl}/${searchEngineId}?keyword=${keyword}&targeturl=${targetUrl}`)
        .then(handleResponse).catch(handleError);
}