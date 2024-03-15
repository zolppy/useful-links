const showTotalLinks = () => {
  const el = document.querySelector(".info__total__value");
  const totalLinks = document.querySelectorAll("li").length;

  el.textContent = totalLinks;
}

window.addEventListener("load", showTotalLinks);