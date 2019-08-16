const homeBtn = document.querySelector (".home");
const portfolioBtn = document.querySelector (".portfolio"); 
const content = document.querySelector (".container");
const HomeURL = "./partials/home.html";
const PortfolioURL = "./partials/portfolio.html"; 

const handleHomeRequest = e => {
   
    content.classList.add;
    
    fetch(HomeURL)
        .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error(response.statusText);
    })
    .then(data => {
        content.innerHTML = data;
    })
    .catch(error => {
        content.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
    });
    
};

homeBtn.addEventListener("mousedown", handleHomeRequest);


const handlePortfolioRequest = e => {
    content.classList.add;
    
    fetch(PortfolioURL)
        .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error(response.statusText);
    })
    .then(data => {
        content.innerHTML = data;
    })
    .catch(error => {
        content.innerHTML = `<pre>${error.name}: ${error.message}</pre>`;
    });
    
};

portfolioBtn.addEventListener("mousedown", handlePortfolioRequest);


