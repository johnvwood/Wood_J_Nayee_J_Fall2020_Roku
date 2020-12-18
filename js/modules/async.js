let errorCodes ={
    404: "404: URL Cannot Be Found.",
    500: "500: Internal Server Error.",
    403: "403: Permission Denied.",
    503: "503: Service Cannot Handle Request."
}

async function fetchData(sourceURL){
        // ask for a resource, and then do something with it when it resolves
    let resource = await fetch(sourceURL).then(response => {
        if (response.status !== 200){
            throw new Error(`Error ${response.status}: ${errorCodes[response.status]}`);
        } 
        return response;           
    });
    let dataset = await resource.json();
    return dataset[0];
}

async function postData(sourceURL){
    return "You are using the postData API endpoint";
}

export {fetchData, postData};