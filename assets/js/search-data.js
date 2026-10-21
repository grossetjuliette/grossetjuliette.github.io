// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Journal articles, conference papers, book chapter, national communications and posters.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Simulation platforms and research projects I develop or contribute to — each with its papers, videos and code.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-supervision",
          title: "Supervision",
          description: "PhD, research engineer, interns and student projects I supervise or have supervised.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses at ECAM Rennes – Louis de Broglie, project-based supervision (IMT Atlantique, ECAM Rennes, Adelaide University), tutoring and outreach teaching.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-responsibilities",
          title: "Responsibilities",
          description: "Collective responsibilities, peer review, recruitment, juries, events and science outreach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/responsibilities/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Positions, education, awards and grants. Supervision, teaching and responsibilities have their own pages.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-started-a-post-doctoral-position-at-naval-group-hosted-in-the-irl-crossing-cnrs-laboratory-in-adelaide-australia",
          title: 'I started a post-doctoral position at Naval Group, hosted in the IRL CROSSING...',
          description: "",
          section: "News",},{id: "news-co-organiser-of-the-facet-offshore-wind-maintenance-workshop-in-adelaide-gathering-30-participants-around-offshore-wind-operation-and-maintenance",
          title: 'Co-organiser of the FACET Offshore Wind Maintenance Workshop in Adelaide, gathering 30 participants...',
          description: "",
          section: "News",},{id: "news-i-led-the-open-source-release-of-lotusim-the-first-open-source-simulator-in-naval-group-s-history",
          title: 'I led the open-source release of LOTUSim — the first open-source simulator in...',
          description: "",
          section: "News",},{id: "news-our-paper-lotusim-multi-domain-simulator-for-marine-robotics-has-been-accepted-at-ieee-rsj-iros-2026-pittsburgh-rank-a-arxiv-video",
          title: 'Our paper LOTUSim: Multi-Domain Simulator for Marine Robotics has been accepted at IEEE/RSJ...',
          description: "",
          section: "News",},{id: "news-our-paper-lotusim-energy-a-maritime-simulator-for-human-drone-interaction-in-autonomous-offshore-operation-amp-amp-maintenance-has-been-accepted-at-an-iros-2026-workshop",
          title: 'Our paper LOTUSim-Energy: A Maritime Simulator for Human-Drone Interaction in Autonomous Offshore Operation...',
          description: "",
          section: "News",},{id: "projects-lotusim",
          title: 'LOTUSim',
          description: "Open-source real-time multi-domain simulator for marine robotics, with multi-user human-in-the-loop interaction.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_lotusim/";
            },},{id: "projects-lotusim-energy",
          title: 'LOTUSim-Energy',
          description: "Real-time simulation of multi-domain human–drone teaming for offshore wind operation and maintenance (FACET project).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_lotusim_energy/";
            },},{id: "projects-virtual-smart-home",
          title: 'Virtual Smart Home',
          description: "A smart home digital twin built on VirtualHome to train activity recognition on synthetic sensor data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_virtual_smart_home/";
            },},{id: "projects-collective-intelligence-for-autonomous-industrial-vehicles",
          title: 'Collective intelligence for autonomous industrial vehicles',
          description: "PhD research on cooperative AIV fleets in Industry 4.0 — perception, V2X, task allocation and energy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_aiv_collective_intelligence/";
            },},{id: "projects-projet-alpha",
          title: 'Projet Alpha',
          description: "Airport baggage transport automation with AGV fleets (Alstef Group)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_projet_alpha/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%67%72%6F%73%73%65%74%31%30@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/grossetjuliette", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/juliette-grosset", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=sf6Hqf0AAAAJ", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
