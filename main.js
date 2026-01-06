const cardsData = [
{
    title: "Online Gym Store",
    description: "A complete store to purchase all your gym tools and accessories for affordable prices and delivery at your door steps for both men and women.",
    link: "https://nomad-gym.vercel.app/",
    linkText: "Visit Store"
},
    {
        title: "Online Ladies Bag Store",
        description: "A complete store to purchase all your ladies bags and accessories for affordable prices and delivery at your door steps.",
        link: "https://69392ff012a0e8000846e01b--scarlet-noir.netlify.app/",
        linkText: "Visit Store"
    },
    {
        title: "A Todo List App",
        description: " A user-friendly todo list application built with HTML, CSS, and JavaScript.",
        link: "https://mytodo-wine-tau.vercel.app/",
        linkText: "View App"
    },
    {
        title: "Portfolio Website",
        description: "A personal site built with HTML and CSS with smooth transitions and aesthetically pleasing design.",
        link: "https://myportfolio-psi-red.vercel.app/",
        linkText: "View Portfolio"
    },
    {
        title: "Online Restaurant Website",
        description: "This is a complete restaurant website with online food ordering system and table reservation system.",
        link: "https://nomad-restaurant-eta.vercel.app/",
        linkText: "Order Now"
    } ,
    {
        title: "A BMI Calculator",
        description: "This is a BMI calculator that helps you calculate your Body Mass Index.",
        link: "https://bmi-calc-bay.vercel.app/",
        linkText: "Calculate BMI"
    }

];

const container = document.getElementById('cardsContainer');

cardsData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    cardElement.innerHTML = `
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <a href="${card.link}" class="card-link">${card.linkText}</a>
            `;

    container.appendChild(cardElement);
});