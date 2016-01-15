function getNumberFromId ( dom_object : HTMLElement ) : number {
    let x = +dom_object.id.slice(23); //todo: Remove the hard-coded '23'. Just use regex and filter for numbers or something.
    return x;
}
function scrollWindowTo ( dom_object : HTMLElement ) : void {
    let sectionNumber = getNumberFromId(dom_object);
    scrollTo(0, (sectionNumber-1)*(innerHeight));
}
function submit() : void {

}