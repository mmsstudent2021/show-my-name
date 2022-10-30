const myName = "hein htet zan";

export function showMyName() {
    return myName;
}

export function showMyNameUI(){
    const h1 = document.createElement("h1");
    h1.innerText = myName;
    h1.style.position = 'fixed';
    h1.style.zIndex = 10000;
    h1.style.fontSize = 100+"px";
    h1.style.fontWeight = "bold";
    h1.style.top = 0;
    h1.style.right = 0;
    h1.style.backgroundColor = "black";
    document.body.append(h1);
}