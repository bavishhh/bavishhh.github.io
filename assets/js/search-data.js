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
            window.location.href = "/https:/drive.google.com/file/d/1wsyyaLyFbQJ5PbVNTJGxfuDrFuvgvDsm/view?usp=sharing";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-hyperbolic-deep-reinforcement-learning",
      
        title: "Hyperbolic Deep Reinforcement Learning",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/hyperbolic-deep-rl/";
        
      },
    },{id: "post-multi-task-learning",
      
        title: "Multi-task Learning",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/multi-task-learning/";
        
      },
    },{id: "post-meta-learning",
      
        title: "Meta Learning",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/meta-learning/";
        
      },
    },{id: "post-graph-laplacian",
      
        title: "Graph Laplacian",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/graph-laplacian/";
        
      },
    },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%76%69%73%68%6B%75%6C%75%72@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/bavish.bsky.social", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/bavishhh", "_blank");
        },
      },];
