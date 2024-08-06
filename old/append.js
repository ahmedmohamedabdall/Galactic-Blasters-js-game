let element = document.querySelector("#head");

let new_element = document.createElement('a');
/*
let new_content = document.createTextNode('sol');

new_element.appendChild(new_content);
or   */
new_element.setAttribute('href','https://zf.witanime.website/episode/nanatsu-no-taizai-mokushiroku-no-yonkishi-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-21/')
new_element.append('sol');

element.appendChild(new_element);