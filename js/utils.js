function getBaseURL() {
    const localhost = 'http://localhost:4880';
    const github = 'https://liliiavint.github.io/cv';
    const liveserver = 'http://127.0.0.1:5501';
    return location.hostname === 'localhost' ? localhost : (location.hostname === 'l                                                                                                                                                                                                                                                                                iliiavint.github.io' ? github : liveserver);
}

export { getBaseURL };