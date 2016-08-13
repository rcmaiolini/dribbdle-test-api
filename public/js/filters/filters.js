app.filter('cleanHTML', function () {
    return function(text) {
        return text.replace(/<[^>]+>/gm, '');
    };
});
