const showTotalLinks = () => {
  const el = document.querySelector(".info__total__value") as HTMLSpanElement;
  const totalLinks: number = document.querySelectorAll("li").length;

  el.textContent = totalLinks.toString();
};

window.addEventListener("load", showTotalLinks);
