var repaintImg = function (img, _a) {
    var _b = _a.width, width = _b === void 0 ? img.width : _b, _c = _a.height, height = _c === void 0 ? img.height : _c, _d = _a.type, type = _d === void 0 ? 'image/png' : _d, _e = _a.position, position = _e === void 0 ? 'center' : _e, _f = _a.scale, scale = _f === void 0 ? false : _f;
    var myCanvas = document.createElement('canvas'), ctx = myCanvas.getContext('2d');
    myCanvas.width = width;
    myCanvas.height = height;
    var imgW = img.width, imgH = img.height, newW = width, newH = height, xStart = 0, yStart = 0;
    if (!scale) {
        newW = imgW;
        newH = imgH;
        switch (position) {
            case 'center':
                xStart = img.width / 2 - width / 2;
                yStart = img.height / 2 - height / 2;
                break;
            case 'rightTop':
                xStart = img.width - width;
                yStart = 0;
                break;
            case 'leftBottom':
                xStart = 0;
                yStart = img.height - height;
                break;
            case 'rightBottom':
                xStart = img.width - width;
                yStart = img.height - height;
                break;
            default:
                xStart = 0;
                yStart = 0;
                break;
        }
    }
    ctx.drawImage(img, -xStart, -yStart, newW, newH);
    var imgs = myCanvas.toDataURL(type);
    return imgs;
};
export default repaintImg;
