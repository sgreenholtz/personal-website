function appendDataBlock(title, body) {
  var section = document.querySelector("#projects section.flex-section"); // currently breaking here
  var dataBlock = document.createElement("div");
  dataBlock.setAttribute("class", "col-3 data-block");
  var pHeader = document.createElement("p");
  var pBody = pHeader.cloneNode(true);
  pHeader.classList.add("header");
  pBody.classList.add("body");
  pHeader.innerHTML = title;
  pBody.innerHTML = body;
  dataBlock.appendChild(pHeader);
  dataBlock.appendChild(pBody);
  section.appendChild(dataBlock);
}
