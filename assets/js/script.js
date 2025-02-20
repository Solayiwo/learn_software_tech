const dropMenu = () => {
  document.getElementById("mobileMenu").style.display = "block";
  document.getElementById("menuShow").style.display = "none";
  document.getElementById("menuHide").style.display = "block";
};

const hideMenu = () => {
  document.getElementById("mobileMenu").style.display = "none";
  document.getElementById("menuHide").style.display = "none";
  document.getElementById("menuShow").style.display = "block";
};
