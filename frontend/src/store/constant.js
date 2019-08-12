const DEMO = {
    BLANK_LINK: "#!",
};

let port = ':8000';
let host = window.location.host;
let parts = host.split(":");
let protocol = window.location.protocol;
export const API_URL = protocol + '//' + parts[0] + port + '/';

export default DEMO;