/*

Build identifiers through a stringbuilder

Example shows collapsing identifiers from an array
*/

import wixLocation from 'wix-location';

let path = wixLocation.path;
const headerElements = ["logo", "searchIcon"];//put the property names of the elements;

$w.onReady(() => {
	if (path.includes("event-details")){
		headerElements.forEach(e => $w(#${e}).collapse());
	} else {
		headerElements.forEach(e => $w(#${e}).expand());
	}
})