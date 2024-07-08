const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", () => {
    let newP = document.createElement("p"); // 새로운 p 요소 노드를 만듬
    let textNode = document.createTextNode(title.innerText);    // 텍스트 노드를 만듬
    newP.appendChild(textNode); // 텍스트 노드를 p 요소 노드에 추가
    newP.style.fontSize = "0.8em";
    newP.style.color = "blue";
    orderInfo.appendChild(newP); // p 요소를 orderInfo에 추가

}, { once : true });