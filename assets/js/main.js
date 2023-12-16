
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://medium.com/@maliarosebarker/tracking-particle-events-from-the-cern-large-hadron-collider-88e5bb2ceea2',
            title: 'Tracking Particle Events from the CERN Large Hadron Collider',
        },
        {
            url: 'https://medium.com/@maliarosebarker/predicting-exoplanet-transit-detection-using-neural-networks-36c44f620924',
            title: 'Predicting Exoplanet Transit Detection Using Neural Networks',
        },
        {
            url: 'https://medium.com/@maliarosebarker/an-exploratory-analysis-of-nasas-exoplanet-archive-f1ea533c8e51',
            title: 'An Exploratory Analysis of NASA’s Exoplanet Archive',
        },
        {
            url: 'https://medium.com/@maliarosebarker/binary-search-functions-and-data-structures-in-python-803ba1c3a',
            title: 'Binary Search Functions and Data Structures in Python',
        },
        {
            url: 'https://medium.com/@maliarosebarker/creating-a-new-way-to-improve-mental-health-connect-with-the-community-aa412e04e418',
            title: 'Creating A New Way to Improve Mental Health & Connect With the Community',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://medium.com/@maliarosebarker/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    // for the more posts link
    let post_template = `
    <div class="blog-post more-blogs" onclick="blog_link_click('https://medium.com/@maliarosebarker');">

        <div class="blog-link">

            <h3><a href="https://medium.com/@maliarosebarker">Visit the blog for more posts</a></h3>            

        </div>

        <div class="blog-goto-link">
            <img class="blog-arrow" src="/assets/images/right-open-mini.svg"/>
        </div>
    </div>
    `;

    post_html.push(post_template);

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
