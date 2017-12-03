---
---
{% comment %}
function setCookie(name,value,days) {
	if (navigator.cookieEnabled == true) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 *1000));
			var expires = "; expires=" + date.toGMTString();
		} else {
			var expires = "";
		}
		var path = "; path={{ site.baseurl }}{{ site.homepage.permalink }}";
		document.cookie = name + "=" + value + expires + path;
	}
}

function getCookie(name) {
	if (navigator.cookieEnabled == true) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) 
		{
			var c = ca[i];
			while (c.charAt(0)==' ')
			{
				c = c.substring(1,c.length);
			}
			if (c.indexOf(nameEQ) == 0)
			{
				return c.substring(nameEQ.length,c.length);
			}
		}
	}
	return null;
}

function deleteCookie(name) {
	setCookie(name,"",-1);
}

{% endcomment %}
{% comment %}

function checkCookies() {
	// foldoutGroupLinks
	var input_foldoutGroupLinks = document.getElementById('foldout-group-links');
	var foldoutGroupLinks_checked = getCookie('foldoutGroupLinksChecked');
	if (input_foldoutGroupLinks && foldoutGroupLinks_checked != null) {
		input_foldoutGroupLinks.checked = (foldoutGroupLinks_checked == 'true');
	}

	// foldoutSubgroupLinks
	var input_foldoutSubgroupLinks = document.getElementById('foldout-subgroup-links');
	var foldoutSubgroupLinks_checked = getCookie('foldoutSubgroupLinksChecked');
	if (input_foldoutSubgroupLinks && foldoutSubgroupLinks_checked != null) {
		input_foldoutSubgroupLinks.checked = (foldoutSubgroupLinks_checked == 'true');
	}
}

function checkCookies() {
	/* obsolete cookies */
	deleteCookie('foldoutLinksChecked');
	deleteCookie('foldoutChildLinksChecked');
	deleteCookie('foldoutGroupLinksChecked');
	deleteCookie('foldoutSubgroupLinksChecked');
}
 
{% endcomment %}

function checkCookies() {}
function input_onchange_foldoutGroupLinks(input) {}
function input_onchange_foldoutSubgroupLinks(input) {}
function input_onchange_foldoutMaingroupLinks(input) {}