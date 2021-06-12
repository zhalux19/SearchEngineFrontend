export const parseErrorMessage = (error) => {
    try{
        var errorObj = JSON.parse(error.message);
        return errorObj.Message ? errorObj.Message : 
        errorObj.errors ? Object.values(errorObj.errors).flat().reduce((acc, curr) => `${acc} ${curr}`) : error.message
    }
    catch(e){
        return error.message
    }
}
