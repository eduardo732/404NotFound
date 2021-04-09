const h = document.getElementById("h");
const p = document.getElementById("p");

h.addEventListener("click", () => {
  if(!h.style.border) h.style.border = "thick solid #EF5537";
  else h.style.border = "";
});
p.addEventListener("click", () => {
  if(!p.style.border)p.style.border = "thick solid #FFD25B";
  else p.style.border="";
});
