// ico tab controls 
document.addEventListener("DOMContentLoaded", () => {
   document.querySelectorAll(".ico-tab-btn").forEach(btn => {
       btn.addEventListener("click", function () {
           document.querySelectorAll(".ico-tab-content").forEach(c => c.style.display = "none");
           document.querySelectorAll(".ico-tab-btn").forEach(b => b.classList.remove("active"));

           document.getElementById(this.getAttribute("onclick").match(/'([^']+)'/)[1]).style.display = "block";
           this.classList.add("active");
       });
   });
   document.getElementById("defaultOpen").click();
});

