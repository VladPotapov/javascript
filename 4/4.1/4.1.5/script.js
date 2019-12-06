function d3(text, x, y, tcolor, fsize, fweight, ffamily, zind) {
    if(!text) return null;
    if(!ffamily) ffamily = 'Arial';
    if(!fweight) fweight = 800;
    if(!fsize) fsize = 36;
    if(!tcolor) tcolor = '#00aaff';
    if(!x) x = 0;
    if(!y) y = 0;

    var sd = 5, hd = 2;
    var xzind = "";

    if(zind) xzind = "; z-index: " + zind;

    var xstyle = 'font-family: ' + ffamily + '; font-size: ' + fsize + '; font-weight: ' + fweight + ';';
    var xstr = '<div style="position: absolute; top: ' + (y + sd) + 'px; left: ' + (x + sd) + xzind +'px;">';
    xstr += '<p style="' + xstyle + 'color: darked">my text</p></div>';
    xstr += '<div style="position: absolute; top:"' + y + ';left:' + x + xzind + '">';
    xstr += '<p style="' + xstyle + 'color: silver">my text</p></div>';
    xstr += '<div style="position:absolute;top:' + (y + hd) + ';left:' + (x + hd) + xzind + '">';
    xstr += '<p style="' + xstyle + 'color:' + tcolor +'">my text</p></div>';
    document.write(xstr);
}
d3("mytext");