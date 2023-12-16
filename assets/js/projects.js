$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/celestial-countdown.png',
            link: 'https://celestial-countdown.dev.maliabarker.com/',
            title: 'Celestial Countdown',
            github: ' github.com/maliabarker/celestial-countdown-refactored',
            technologies: ['Python', 'Javascript', 'Flask', 'MongoDB', 'GeoPy', 'Beautiful Soup', 'DigitalOcean', 'Caprover'],
            description: "A countdown to the next visible celestial event. Users can see the three upcoming events, view a calendar of events for the next five years, and change the timezone to adjust the countdown accordingly. Implemented a web scraper to obtain celestial event data and organize it into a CSV file by event type.",
            categories: ['featured', 'webdev', 'astronomy']
        },
        {
            image: 'assets/images/icon.png',
            link: 'github.com/GeorgeCloud/GJHM',
            title: 'Go Join Heavenly Media',
            github: 'github.com/GeorgeCloud/GJHM',
            technologies: ['Python', 'Flask', 'Flask Login', 'IMDB API', 'Github', 'Heroku'],
            description: "Managed a team of three engineers over seven sprints and retrospectives to create an application for users to keep track of and share their favorite movies and TV shows. Supported my teammates in developing backend and frontend features when needed and managed any conflicts amongst the team when they arose.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/nea.jpg',
            link: 'medium.com/@maliarosebarker/an-exploratory-analysis-of-nasas-exoplanet-archive-f1ea533c8e51',
            title: "An Exploratory Analysis of NASA's Exoplanet Archive",
            github: 'https://colab.research.google.com/drive/1_LmiegU5ePiSGvwlLLkMeLtLP7pXggXE?usp=sharing',
            technologies: ['Python', 'Numpy', 'Matplotlib', 'Seaborn', 'SkLearn', 'Scipy'],
            description: "Navigated 121 columns of data and 32,329 points of data to explore five descriptive questions and three inferential questions. Created 25 data visualizations to support conclusions made through analysis, two of which were made with machine learning.",
            categories: ['featured', 'astronomy', 'data-science']
        },
        {
            image: 'assets/images/meteorite.png',
            link: 'https://www.kaggle.com/code/maliabarker/predicting-on-the-nasa-meteorite-dataset/notebook?scriptVersionId=112702599',
            title: 'Predicting on the NASA Meteorite Dataset',
            github: false,
            technologies: ['Python', 'Numpy', 'Matplotlib', 'Seaborn', 'SkLearn', 'XGBoost'],
            description: "Created a concise Kaggle notebook detailing classification predictions on the NASA meteorite dataset. Prepared data by sanitizing the dataset and dealing with null values. Ran initial predictions with KNN, CART, NB, LOGREG, FOREST, ADA, and XGB Scikit-Learn classifiers, then ran optimization techniques to obtain better performance scores.",
            categories: ['featured', 'astronomy', "data-science"]
        },
        {
            image: 'assets/images/social-prescribing.png',
            link: 'https://github.com/dfmorse23/socialprescribing',
            title: 'Social Prescribing',
            github: 'https://github.com/dfmorse23/socialprescribing',
            technologies: ['Javascript', 'Node', 'React', 'MaterialUI', 'Firebase', 'Railway'],
            description: "Collaborated with four engineers and an industry partner to build a search engine for social prescriptions—community-based activities to substitute prescriptions for mental and physical health concerns. Collaborated with an industry designer and completed nine user interviews and tests to maximize the usability, accessibility, and overall aesthetic of the website.",
            categories: ['webdev']
        },
        {
            image: 'assets/images/exoplanet-pred.png',
            link: 'https://medium.com/@maliarosebarker/predicting-exoplanet-transit-detection-using-neural-networks-36c44f620924',
            title: 'Predicting Exoplanet Transits with Neural Networks',
            github: 'github.com/maliabarker/exoplanet-detection-model',
            technologies: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'SkLearn', 'Tensorflow'],
            description: "Explored light curve data, processed data in preparation for model usage, employed four machine learning models, and built a custom neural network to predict exoplanet detections.",
            categories: ['featured', 'astronomy', 'data-science']
        },
        {
            image: 'assets/images/cern.png',
            link: 'medium.com/@maliarosebarker/tracking-particle-events-from-the-cern-large-hadron-collider-88e5bb2ceea2',
            title: 'Tracking Particle Events using Simulated CERN Data',
            github: 'github.com/maliabarker/track-ml',
            technologies: ['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'SkLearn'],
            description: "Analyzed four CSV files of simulated particle accelerator collision data using 16 visualizations and data analysis to understand data and track objectives. Implemented two semi-supervised and two unsupervised machine learning algorithms to predict tracks of particles within an accelerator using hit data.",
            categories: ['featured', 'astronomy', 'data-science']
        },
        {
            image: 'assets/images/pegasus.png',
            link: 'https://phoenixpegasusgrid.com/',
            title: 'The PHOENIX PEGASUS Grid',
            github: 'https://github.com/maliabarker/euv-spectra-site',
            technologies: ['Python', 'JavaScript', 'Flask', 'MongoDB', 'AstroPy', 'AstroQuery', 'DigitalOcean', 'Caprover'],
            description: "An efficient and aesthetic web tool to help users access EUV spectra calculated by our research team.",
            categories: ['featured', 'astronomy', 'webdev']
        },
        {
            image: 'assets/images/susie.png',
            link: 'https://pypi.org/project/susie/',
            title: 'Susie',
            github: 'https://github.com/BoiseStatePlanetary/susie',
            technologies: ['Python', 'AstroPy', 'SciPy', 'Numpy', 'MatplotLib'],
            description: "A Python pip package to access calculations and data visualizations regarding planetary tidal decay using exoplanet transit data.",
            categories: ['featured', 'webdev', 'astronomy']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.github ? `<a href="${project.github}">Github</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
