let backendHost = "https://port-0-memorization-12fhqa2llo2ulv8z.sel5.cloudtype.app";

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
    backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;
