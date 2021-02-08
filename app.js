var i = 0;
var text = 'She is just better than you.';
type();
function type(){
    if(i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }

}
