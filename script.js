// function setUpListener(){
//     var citys = document.getElementsByClassName("city");
//     citys[1].addEventListener("mouseover", veniceHoverEffect);
//     citys[2].addEventListener("mouseover", berlinEffect);
//     citys[3].addEventListener("mouseover", barcelonaHoverEffect);
//     citys[4].addEventListener("mouseover", parisHoverEffect);
//     citys[5].addEventListener("mouseover", amsterdamHoverEffect);
//     citys[6].addEventListener("mouseover", londonHoverEffect);
//     citys[1].addEventListener("mouseout", veniceEndEffect);
//     citys[2].addEventListener("mouseout", berlinEndEffect);
//     citys[3].addEventListener("mouseout", barcelonaEndEffect);
//     citys[4].addEventListener("mouseout", parisEndEffect);
//     citys[5].addEventListener("mouseout", amsterdamEndEffect);
//     citys[6].addEventListener("mouseout", londonEndEffect);
// }
//
// function veniceHoverEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[1].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function berlinEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[2].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function barcelonaHoverEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[3].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "<div class='hover'><p>Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia</p><a class='button' href=\"https://en.wikipedia.org/wiki/Barcelona\" target=\"_blank\">Explore More</a></div>";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function parisHoverEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[4].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function amsterdamHoverEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[5].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function londonHoverEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[6].firstElementChild;
//     var w = content.offsetWidth;
//     if(!content.innerHTML.includes("hover")){
//         content.innerHTML = content.innerHTML + "";
//     }
//     var p = document.getElementsByClassName("hover")[0].getElementsByTagName("p");
//     p[0].style.width = w / 2 + "px";
//     p[0].style.textAlign = "center";
// }
//
// function veniceEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[1].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
// function berlinEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[2].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
// function barcelonaEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[3].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
// function parisEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[4].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
// function amsterdamEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[5].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
// function londonEndEffect(){
//     var citys = document.getElementsByClassName("city");
//     var content = citys[6].firstElementChild;
//     var index = content.innerHTML.indexOf("/h2");
//     content.innerHTML = content.innerHTML.slice(0, index + 4);
// }
//
//
//
// window.addEventListener("load", setUpListener);
