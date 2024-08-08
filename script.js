// projects section: collapsibles

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    for(item of coll){
      item.classList.remove("active");
      item.nextElementSibling.style.display = "none";
    }
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  })
}

// skills section: language and technologies

var language = document.getElementById("lang-header");
var technology = document.getElementById("tech-header");
var nodeList = document.querySelectorAll("#lang-tech-list li");

language.addEventListener("mouseover", () => {
  language.style.backgroundColor = "#EFEA5A";
  language.style.color = "#42495B";
  nodeList.forEach(li => 
    li.className == "lang"
    ? li.style.transform = "scale(1.2)" : null
    );
});

language.addEventListener("mouseout", () => {
  language.style.backgroundColor = "transparent";
  language.style.color = "#f5f5f5";
  nodeList.forEach(li => 
    li.className == "lang"
    ? li.style.transform = "scale(1)" : null
    );
});

technology.addEventListener("mouseover", () => {
  technology.style.backgroundColor = "#EFEA5A";
  technology.style.color = "#42495B";
  nodeList.forEach(li => 
    li.className == "tech"
    ? li.style.transform = "scale(1.2)" : null
    );
});

technology.addEventListener("mouseout", () => {
  technology.style.backgroundColor = "transparent";
  technology.style.color = "#f5f5f5";
  nodeList.forEach(li => 
    li.className == "tech"
    ? li.style.transform = "scale(1)" : null
    );
});