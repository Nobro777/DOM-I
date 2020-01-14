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

// const navItems = document.querySelectorAll('a');
// navItems.forEach(element => {element.classList.add('nav-item-1')})

// const links = document.getElementsByTagName('a');
// for (let i = 0; i < links.length; i++){
//   links[i].classList.add(`nav-item-${i + 1}`);
//   links[0].textContent = 'Services';
//   links[1].textContent = 'Product';
//   links[2].textContent = 'Vision';
//   links[3].textContent = 'Features';
//   links[4].textContent = 'About';
//   links[5].textContent = 'Contact';
// }

// const navElements = Array.from(document.getElementsByTagName('a'));
// for (let i = 0; i < navElements.length; i++){
//   navElements[i].innerText = siteContent['nav'][`nav-item-${i+1}`];
//   navElements.classList.add(`.nav-item-${i+1}`);
// }

const links = document.getElementsByTagName('a');









const firstNav = document.createElement('a');
firstNav.textContent = "Project"
firstNav.setAttribute('href', '#')

const secondNav = document.createElement('a');
secondNav.textContent = "Home"
secondNav.setAttribute('href', '#')
















for (let i = 0; i < links.length; i++) {
  links[i].classList.add(`nav-item-${i+1}`);
  links[i].textContent = siteContent['nav'][`nav-item-${i+1}`];
}

const navSection = document.querySelector('nav');
navSection.appendChild(firstNav);
navSection.prepend(secondNav);

const newLinks = document.querySelectorAll('a')
newLinks.forEach(element => {element.style.color = 'green'})

const newHeader = document.querySelector('h1');
newHeader.textContent = siteContent["cta"]["h1"];

const newButton = document.querySelector('button');
newButton.textContent = siteContent["cta"]["button"];


document.querySelector(".main-content").getElementsByTagName("h4")[0].textContent = siteContent["main-content"]["features-h4"];
document.querySelector(".main-content").getElementsByTagName("p")[0].textContent = siteContent["main-content"]["features-content"];

document.querySelector(".main-content").getElementsByTagName("h4")[1].textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".main-content").getElementsByTagName("p")[1].textContent = siteContent["main-content"]["about-content"];

document.querySelector(".main-content").getElementsByTagName("h4")[2].textContent = siteContent["main-content"]["services-h4"];
document.querySelector(".main-content").getElementsByTagName("p")[2].textContent = siteContent["main-content"]["services-content"];

document.querySelector(".main-content").getElementsByTagName("h4")[3].textContent = siteContent["main-content"]["product-h4"];
document.querySelector(".main-content").getElementsByTagName("p")[3].textContent = siteContent["main-content"]["product-content"];

document.querySelector(".main-content").getElementsByTagName("h4")[4].textContent = siteContent["main-content"]["vision-h4"];
document.querySelector(".main-content").getElementsByTagName("p")[4].textContent = siteContent["main-content"]["vision-content"];

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

document.querySelector('.contact').getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];

document.querySelector('.contact').getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];

document.querySelector('.contact').getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

document.querySelector('footer p').textContent = siteContent['footer']['copyright']

// document.querySelector(".contact").getElementsByTagName("h4")[5].textContent = siteContent["contact"]["contact-content"];





// const newHeader = document.querySelector('header');



// const navItems = document.querySelector('a');
// navItems.classList.add('nav-item-1');

// const navServices = document.querySelector('nav-item-1');
// navItems.textContent = 'Services';



// const navSelector = document.querySelector('nav')
// navItems.append(navServices);







// Example: Update the img src for the logo

const newImg2 = document.querySelector("#middle-img");
newImg2.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const newImg = document.querySelector("#cta-img");
newImg.setAttribute('src', siteContent["cta"]["img-src"]);

const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// let midimg = document.getElementById("middle-img");
// midimg.setAttribute('src', siteContent["topcontent"]["img-src"])




// document.querySelector()




const topContent = document.querySelectorAll("h4");
topContent[0].textContent = siteContent["main-content"]["feaimtures-h4"];
topContent[1].textContent = siteContent["main-content"]["about-h4"];
topContent[2].textContent = siteContent["main-content"]["services-h4"];
topContent[3].textContent = siteContent["main-content"]["product-h4"];
topContent[4].textContent = siteContent["main-content"]["vision-h4"];