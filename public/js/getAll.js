"use strict";

(function () {
  document.addEventListener("DOMContentLoaded", init);

  async function init() {
    try {
      const data = await fetch("http://localhost:4000/rest/computers", {
        mode: "cors",
      });
      const result = await data.json();

      const resultset = document.getElementById("resultset");

      for (const computer of result) {
        const tr = document.createElement("tr");
        tr.appendChild(createCell(computer.id));
        tr.appendChild(createCell(computer.name));
        tr.appendChild(createCell(computer.type));
        tr.appendChild(createCell(computer.processor));
        tr.appendChild(createCell(computer.price));
        resultset.appendChild(tr);
      }
    } catch (err) {
      console.log(err);
    }
  } //end of init

  function createCell(data) {
    const td = document.createElement("td");
    td.textContent = data;
    return td;
  }
})();
