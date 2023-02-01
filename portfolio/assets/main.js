function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName("project__card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i= 0; i < arr2.length; i++){
        if (arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i= 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}

filterObjects('all')

/* custom cursor */

const cursor = document.getElementById("cursor");
const workLink = document.querySelectorAll(".project")

for (var i = 0; i < workLink.length; i++) {
    workLink[i].addEventListener("mouseenter", e => {
        cursor.classList.add("active")
    })

    workLink[i].addEventListener("mousemove", e => {
        var left = e.pageX;
        var top = e.pageY;
        cursor.style.left = left - 30 + "px";
        cursor.style.top = top - 18 + "px";
    })
    workLink[i].addEventListener("mouseleave", e => {
        cursor.classList.remove("active")
    })
}

/* animate on scroll */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-show");
        } else {
            entry.target.classList.remove("fade-show");
        }
    });
});

const observerOnce = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-showOnce");
        }
    });
});

const fadeInElements = document.querySelectorAll(".fade-hidden");
const fadeInOnce = document.querySelectorAll(".fade-hiddenOnce");
fadeInElements.forEach((el) => observer.observe((el)));
fadeInOnce.forEach((element) => observerOnce.observe((element)));

/* mobile nav */

document.addEventListener('DOMContentLoaded',() =>
{
	mobileMenu_init();
	
	window.addEventListener('resize', () =>
	{
		mobileMenu_init();
	});
});


/*** Mobile Menu */
function mobileMenu_show()
{
	return (window.matchMedia('(max-width: 720px)').matches) ? true : false;
}


function mobileMenu_init()
{
	if(mobileMenu_show())
	{
		if(document.querySelector('#mobile-menu') == null)
		{
			document.querySelector('header nav').innerHTML += '<div id="mobile-menu"><span></span><span></span><span></span></div>';
			mobileMenu_build();
			document.querySelector('#mobile-menu').addEventListener('click', function(event)
			{
				event.preventDefault();
				mobileMenu_toggle();
			});
		}
	}
	else
	{
		mobileMenu_destroy();
	}
}

function mobileMenu_build()
{
	let menu_content = document.createElement('div');
	menu_content.setAttribute('id', 'mobile-menu-content');
	document.body.append(menu_content);
	
	let menu_content_overflow = document.createElement('div');
	menu_content.appendChild(menu_content_overflow);
	
	let navigation_clone = document.querySelector('header nav > div > ul').cloneNode(true);
    navigation_clone.setAttribute("onclick", "mobileMenu_toggle()")
	menu_content_overflow.appendChild(navigation_clone);
}

function mobileMenu_toggle()
{
	document.getElementById('mobile-menu').classList.toggle('open');
	document.getElementById('mobile-menu-content').classList.toggle('open');
}

function mobileMenu_destroy()
{
	let mobileMenu = document.getElementById('mobile-menu');
	if(mobileMenu != null)
	{
		mobileMenu.remove();
		document.getElementById('mobile-menu-content').remove();
	}
}