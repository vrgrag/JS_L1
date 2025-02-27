function ipv4Parser(ip, mask) {
    ip = ip.split('.').map(Number); 
    mask = mask.split('.').map(Number); 
    var block = [];
    var host = [];

    for (var i = 0; i < 4; i++) {
        block.push(ip[i] & mask[i]);
        host.push(ip[i] & (~mask[i] & 255)); 
    }

    return [block.join('.'), host.join('.')];
}

