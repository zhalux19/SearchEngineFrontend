import React, {useEffect} from 'react'
import {Row, Col} from "react-bootstrap";
import apiStatus from '../utilities/apiStatus';
import {loadSearchEngineOptions, fetchRanks, pageCleanUp} from "../redux/actions/searchEngineActions"
import { connect } from "react-redux";
import SearchEngineForm from "./components/SearchEngineForm";
import LoadingMessage from '../common/LoadingComponent';
import ResultDisplay from './components/ResultDisplay';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { toast } from "react-toastify";

const StyledH1 = styled.h1`
    margin: 1.3rem 0;
`;

const SearchEngine = ({searchEngineOptions, loadSearchEngineOptionsApiStatus, 
    ranks, fetchRanksApiStatus, errorMessage, loadSearchEngineOptions, fetchRanks, pageCleanUp}) => {

    useEffect(() => {          
        loadSearchEngineOptions();
        return () => {
            pageCleanUp();
        }
        }, []);
    
    useEffect(() =>{
        if(errorMessage){
            toast.error(errorMessage,{ autoClose: true });
        }
    }, [errorMessage])

    return (
        <>
            <Row>
                <Col><StyledH1>Welcome</StyledH1></Col>
            </Row>
            {loadSearchEngineOptionsApiStatus === apiStatus.LOADING && <LoadingMessage />}
            {loadSearchEngineOptionsApiStatus === apiStatus.SUCCEEDED && <SearchEngineForm {...{searchEngineOptions, isFetchingRanks: fetchRanksApiStatus === apiStatus.LOADING , fetchRanks}}/>}
            {fetchRanksApiStatus === apiStatus.SUCCEEDED && <ResultDisplay ranks={ranks}/>}
        </>
    )
}

SearchEngine.propTypes = {
    searchEngineOptions: PropTypes.array.isRequired,
    loadSearchEngineOptionsApiStatus: PropTypes.string.isRequired, 
    ranks: PropTypes.array.isRequired,
    fetchRanksApiStatus: PropTypes.string.isRequired,
    errorMessage: PropTypes.string.isRequired,
    loadSearchEngineOptions: PropTypes.func.isRequired, 
    fetchRanks: PropTypes.func.isRequired, 
}

const mapStateToProps = (state) => {
    return {
        searchEngineOptions: state.searchEngine.searchEngineOptions,
        loadSearchEngineOptionsApiStatus: state.searchEngine.loadSearchEngineOptionsApiStatus,
        ranks: state.searchEngine.ranks,
        fetchRanksApiStatus:  state.searchEngine.fetchRanksApiStatus,
        errorMessage: state.searchEngine.errorMessage
    }
}

const mapDispatchToProps = {
    loadSearchEngineOptions, 
    fetchRanks,
    pageCleanUp
};
    
export default connect(mapStateToProps, mapDispatchToProps)(SearchEngine);
    
