"use strict";
var showTotalLinks = function () {
    var el = document.querySelector(".info__total__value");
    var totalLinks = document.querySelectorAll("li").length;
    el.textContent = totalLinks.toString();
};
window.addEventListener("load", showTotalLinks);
//# sourceMappingURL=script.js.map