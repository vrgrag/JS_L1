function hexStringToRGB(hexString) {
const rgb = hexString.replace(/^#/, '').toUpperCase();
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);
 return { r, g, b };
}

