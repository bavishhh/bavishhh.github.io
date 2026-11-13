// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-scaling-and-bitter-lesson-substack",
      
        title: 'Scaling and Bitter Lesson (Substack) <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://bavish.substack.com/p/scaling-and-bitter-lesson", "_blank");
        
      },
    },{id: "post-interpreting-linear-regression-solution",
      
        title: "Interpreting Linear Regression Solution",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/linear-regression/";
        
      },
    },{id: "post-zotero-tips-and-tricks",
      
        title: "Zotero Tips and Tricks",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/zotero-tips/";
        
      },
    },{id: "post-hyperbolic-deep-reinforcement-learning",
      
        title: "Hyperbolic Deep Reinforcement Learning",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/hyperbolic-deep-rl/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%76%69%73%68%6B%75%6C%75%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=6cJGHZcAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bavishhh", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bavish-k", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/bavishhh", "_blank");
        },
      },];
