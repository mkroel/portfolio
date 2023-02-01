/*** Document Ready */

document.addEventListener('DOMContentLoaded',() =>
{
	mobileMenu_init();
	
	window.addEventListener('resize', () =>
	{
		mobileMenu_init();
	});
});

window.onload = function() {preloader()}

function preloader() {
    let body = document.getElementById("body")
    body.classList.remove("preload")
}


/*** Mobile Menu */

/**
 * The mobileMenu_show function returns true if the window is less than or equal to 1024 pixels wide.
 * 
 *
 *
 * @return True if the window width is less than or equal to 1024 pixels
 *
 */
function mobileMenu_show()
{
	return (window.matchMedia('(max-width: 720px)').matches) ? true : false;
}


/**
 * The mobileMenu_init function is used to initialize the mobile menu.
 * 
 *
 *
 * @return The value of mobilemenu_show
 *
 */
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


/**
 * The mobileMenu_build function creates a clone of the navigation menu and appends it to the mobile-menu-content div.
 * 
 *
 *
 * @return The div element with the id of mobile-menu-content
 *
 */
function mobileMenu_build()
{
	let menu_content = document.createElement('div');
	menu_content.setAttribute('id', 'mobile-menu-content');
	document.body.append(menu_content);
	
	let menu_content_overflow = document.createElement('div');
	menu_content.appendChild(menu_content_overflow);
	
	let navigation_clone = document.querySelector('header nav > div > ul').cloneNode(true);
	menu_content_overflow.appendChild(navigation_clone);
}


/**
 * The mobileMenu_toggle function toggles the mobile menu open and closed.
 
 *
 *
 * @return The value of the id attribute for the mobile-menu element
 *
 */
function mobileMenu_toggle()
{
	document.getElementById('mobile-menu').classList.toggle('open');
	document.getElementById('mobile-menu-content').classList.toggle('open');
}


/**
 * The mobileMenu_destroy function removes the mobile menu from the DOM.
 
 *
 *
 * @return The value of the mobilemenu variable
 *
 */
function mobileMenu_destroy()
{
	let mobileMenu = document.getElementById('mobile-menu');
	if(mobileMenu != null)
	{
		mobileMenu.remove();
		document.getElementById('mobile-menu-content').remove();
	}
}

