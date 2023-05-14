import { createOptimizedPicture } from '../../scripts/lib-franklin.js';
import { getMetadata, decorateIcons } from '../../scripts/lib-franklin.js';

// media query match that indicates mobile/tablet width
function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

var decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};
const isDesktop = window.matchMedia('(min-width: 900px)');
export default async function decorate(block) {
  // fetch nav content
  // const navMeta = getMetadata('nav');
  // const navPath = navMeta ? new URL(navMeta).pathname : '/twoitems';
  // const resp = await fetch(`${navPath}.plain.html`);
  // if (resp.ok) {
  //   const html = await resp.text();
	// 	const htmldecoded=decodeHtml(html)
	// console.log(htmldecoded);
	//   // div.innerHTML = htmldecoded.replace(/<br>/g,'').replace(/<p>/g,'').trim();
  //     var txt = document.createElement("textarea");
  //     txt.innerHTML = decodeHtmlEntity(htmldecoded.replace(/<br>/g,'').replace(/<p>/g,'').trim());
	//   var divv=document.createElement("div")
	//   divv.innerHTML=decodeHtmlEntity(txt.value).replace(/&lt;/g,'<').replace(/&gt;/g,'>');
	//  // console.log(decodeHtmlEntity(txt.value).replace(/&lt;/g,'<').replace(/&gt;/g,'>'));
  // block.append(divv);
//  block.append(txt)
}
  
}


