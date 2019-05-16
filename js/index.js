const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

/*Delete later
console.log(navItems);
navItems.style.color='green';
*/

//Update Images
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Update Navigation
const navItems = document.querySelectorAll('a');

navItems[0].textContent =  siteContent["nav"]["nav-item-1"];
navItems[1].textContent =  siteContent["nav"]["nav-item-2"];
navItems[2].textContent =  siteContent["nav"]["nav-item-3"];
navItems[3].textContent =  siteContent["nav"]["nav-item-4"];
navItems[4].textContent =  siteContent["nav"]["nav-item-5"];
navItems[5].textContent =  siteContent["nav"]["nav-item-6"];

//Update H1

const textH1 = document.querySelector('h1');
textH1.textContent = siteContent["cta"]["h1"];

const textButton = document.querySelector('button');
textButton.textContent =  siteContent["cta"]["button"];

//Update H4s
const textContentH4s = document.querySelectorAll('h4');

textContentH4s[0].textContent =  siteContent["main-content"]["features-h4"];
textContentH4s[1].textContent =  siteContent["main-content"]["about-h4"];
textContentH4s[2].textContent =  siteContent["main-content"]["services-h4"];
textContentH4s[3].textContent =  siteContent["main-content"]["product-h4"];
textContentH4s[4].textContent =  siteContent["main-content"]["vision-h4"];
textContentH4s[5].textContent =  siteContent["contact"]["contact-h4"];

//Update Paragraphs
const textContentPs = document.querySelectorAll('p');

textContentPs[0].textContent =  siteContent["main-content"]["features-content"];
textContentPs[1].textContent =  siteContent["main-content"]["about-content"];
textContentPs[2].textContent =  siteContent["main-content"]["services-content"];
textContentPs[3].textContent =  siteContent["main-content"]["product-content"];
textContentPs[4].textContent =  siteContent["main-content"]["vision-content"];
textContentPs[5].textContent =  siteContent["contact"]["address"];
textContentPs[6].textContent =  siteContent["contact"]["phone"];
textContentPs[7].textContent =  siteContent["contact"]["email"];
textContentPs[8].textContent =  siteContent["footer"]["copyright"];

//Make Nav Green
navItems.forEach(i => {
  i.style.color = 'green';
});

//Add two new items to the navigation system
const newNav1 = document.createElement('a');
newNav1.textContent = "News";
newNav1.style.color = 'green';

const navParent = document.querySelector('nav');
navParent.prepend(newNav1);

const newNav2 = document.createElement('a');
newNav2.textContent = "Blog";
newNav2.style.color = 'green';

navParent.append(newNav2);


