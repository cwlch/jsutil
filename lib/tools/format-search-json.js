var toSearchJson = function (search) {
    search = search.replace(/\?/g, '&');
    var searchArr = search.split('&'), obj = {};
    searchArr.forEach(function (i) {
        var me = i.split('=');
        if (me[0]) {
            obj[me[0]] = decodeURIComponent(me[1]);
        }
    });
    return obj;
};
export default toSearchJson;
