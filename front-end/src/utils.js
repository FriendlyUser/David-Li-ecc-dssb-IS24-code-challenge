const baseUrl = "http://localhost:8000";

const fetchAbsolute = (fetch) => {
    return baseUrl => (url, ...otherParams) => url.startsWith('/') ? fetch(baseUrl + url, ...otherParams) : fetch(url, ...otherParams)
}

const fetcher = (...args) => {
    const fetchApi = fetchAbsolute(fetch)(baseUrl);
    return fetchApi(...args).then(res => res.json());
}


export {
    fetcher,
    baseUrl
}