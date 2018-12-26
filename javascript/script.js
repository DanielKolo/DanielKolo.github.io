const text = "And Im A WebDeveloper/>"
let curr = 0;
var Write = function write(){
    let elem = document.getElementById('LBLTEXT');
    elem.textContent = elem.textContent + text.charAt(curr);
    curr++;
    if (curr < text.length)
        window.setTimeout(write, 60);
};
setTimeout(() => {
    Write();    
},1800);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView(
            {behavior: "smooth",block: "start", inline: "nearest"}
        );
    });
});
function contactClick(elem)
{
    document.querySelector(elem).scrollIntoView({ 
        behavior: 'smooth' ,block: "start", inline: "nearest"
      });
}
window.onscroll = function() {myFunction(),navMenuChange()};

function myFunction() {
    let elem =document.getElementById("NavMain");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        elem.style.backgroundColor = "white";
    } else {
        elem.style.backgroundColor = "";
    }
}
function elementInViewport(el) {
    var top = el.offsetTop;
    var height = top +el.offsetHeight;
    return (
      top >= window.pageYOffset &&
      (height) <= (window.pageYOffset + window.innerHeight)
    );
  }
function navMenuChange()
{
    if(elementInViewport(document.getElementById('bg')))
    {
        document.getElementById('home').classList.add("navbar-active");
        document.getElementById('myWork').classList.remove("navbar-active");
        document.getElementById('aboutME').classList.remove("navbar-active");
        document.getElementById('contactMe').classList.remove("navbar-active");



    }
    else if(elementInViewport(document.getElementById('myProSec')))
    {
        document.getElementById('myWork').classList.add("navbar-active");
        document.getElementById('home').classList.remove("navbar-active");
        document.getElementById('aboutME').classList.remove("navbar-active");
        document.getElementById('contactMe').classList.remove("navbar-active");

    }
    else if(elementInViewport(document.getElementById('aboutSec')))
    {
        document.getElementById('aboutME').classList.add("navbar-active");
        document.getElementById('home').classList.remove("navbar-active");
        document.getElementById('myWork').classList.remove("navbar-active");
        document.getElementById('contactMe').classList.remove("navbar-active");


    }
    else if(elementInViewport(document.getElementById('ContactMESec')))
    {
        document.getElementById('contactMe').classList.add("navbar-active");
        document.getElementById('aboutME').classList.remove("navbar-active");
        document.getElementById('home').classList.remove("navbar-active");
        document.getElementById('myWork').classList.remove("navbar-active");
    }

}
function openMenu()
{
    let elem =document.getElementById('navbar-n');
    if(elem.style.display==="none")
    {
       elem.style.display = "block";
    }
    else{
       elem.style.display = "none";
    }
}


onSubmitHandler = (e) =>
{
    e.preventDefault();
    let email = document.getElementById("Email").value;
    let name = document.getElementById("Name").value;
    let contact = document.getElementById("Content").value;


    var url = "https://mainsite-e75d7.firebaseio.com/msg.json";
    var method = "POST";
    var postData ={email:email , name: name , content: contact};
    var shouldBeAsync = true;

    var request = new XMLHttpRequest();
    request.onload = function () {
        var status = request.status;
        if(status == 200)
        {
             document.getElementById("Email").value = '';
             document.getElementById("Name").value = '';
             document.getElementById("Content").value = '';
        }
        else
            alert('Something went Wrong please try again later');
    }
    request.open(method, url, shouldBeAsync);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(JSON.stringify(postData));
}
