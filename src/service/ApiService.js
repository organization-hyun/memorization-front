import {API_BASE_URL} from "../app-config";

export async function call(api, method, request) {
    let options = {
        headers: new Headers({
            "Content-Type": "application/json",
        }),
        url: API_BASE_URL + api,
        method: method
    };
    if (request) {
        // GET method
        options.body = JSON.stringify(request);
    }
    return await fetch(options.url, options).then((response) => {
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            console.log("저 녀석", json);
            return json;
        })
    })

}

