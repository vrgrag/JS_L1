function domainName(url) {
    let istochnik = url.replace(/^(https?:\/\/)?(www\.)?/, '').split(/[/?#]/)[0];
    let domain = istochnik.split('.')[0];
    return domain;
    }