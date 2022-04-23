var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
      //  document.getElementById("demo").innerHTML = xhttp.responseText;
      const data = JSON.parse(xhttp.responseText);
      console.log(data)
      // document.title = data.title


      // const display = document.getElementById("display");
      // const title = document.getElementById("Banner")

      // title.appendChild(document.createTextNode(data.title))


      // for (let i = 0; i < data.items.length; i++) {
      //   const card = document.createElement("div");
      //   const h1 = document.createElement("h1");
      //   const dv = document.createElement("div");
      //   const titleNode = document.createTextNode(data.items[i].title);
      //   const descNode = document.createTextNode(data.items[i].description);
      //   h1.appendChild(titleNode);
      //   dv.appendChild(descNode);

      //   card.appendChild(h1);
      //   card.appendChild(dv);
      //   display.appendChild(card);
      // }
    }
};
xhttp.open("GET", "/rss", true);
xhttp.send();
