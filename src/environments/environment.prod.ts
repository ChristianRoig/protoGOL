const API_BASE_URL: string = `http://svrappqa2.saiep:8080`;
const API_SERVLET: string = `/GOLProxyJsonHSvc`;
const API_LOGIN: string = `/userLogon.svc`;

export const environment = {
    production: true,
    api_url: API_BASE_URL + API_SERVLET,
    api_login: API_BASE_URL + API_SERVLET + API_LOGIN
};
