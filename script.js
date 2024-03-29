const projects = [
  {
    name: 'Magic Quiz',
    title: 'Magic Quiz App',
    screenshot: 'screenshots/magic-quiz.png',
    builtWith: 'Javascript and jQuery',
    content: 'This is a basic quiz app that loads a quiz at random from a repository of quizzes. The questions all pertain to the Magic: The Gathering card game. As a bonus I also designed a page to make writing additional quizzes easier with a form that you can fill out and have it output the result into the console in a form that can be easily copy/pasted into the repository of quizzes.',
    page: 'https://nasaljack.github.io/magic-quiz-app/',
    repo: 'https://github.com/NasalJack/magic-quiz-app'
  },
  {
    name: 'Buffy Quiz',
    title: 'Buffy Quiz App',
    screenshot: 'screenshots/buffy-quiz.png',
    builtWith: 'Javascript and jQuery',
    content: 'This is a quiz that tests your knowledge of Buffy: the Vampire Slayer trivia. Each time the quiz loads five questions are chosen at random from the repository of possible questions, and the order of the possible answers to each question are randomized as well. No two quizes will ever be the exact same.',
    page: 'https://thinkful-ei-firefly.github.io/Quiz-App-Sam-Ben/',
    repo: 'https://github.com/thinkful-ei-firefly/Quiz-App-Sam-Ben'
  },
  {
    name: 'Bookmarker',
    title: 'Bookmark App',
    screenshot: 'screenshots/bookmark.png',
    builtWith: 'Javascript, jQuery, and AJAX',
    content: 'This is an app that allows users to save bookmarks for websites along with a rating of the site and a brief description of it. The user can add or delete bookmarks, as well as filter their current view based on the rating of webtsites they would like to see.',
    page: 'https://thinkful-ei-firefly.github.io/bookmark-app-sam/',
    repo: 'https://github.com/thinkful-ei-firefly/bookmark-app-sam'
  },
];

function loadLanding() {
  $('main').html(`
    <div class="intro">Hi, my name is Sam and I'm a full stack developer</div>
    <img class="hero" src="screenshots/hero.png" alt="Me standing in front of a lake">
    <button class="about-me-link">Learn More</button>
  `);
}

function loadAboutMe() {
  $('main').html(`
    <div class="about-page">
      <div class="about">I'm a full stack developer and (future) graduate of the Thinkful Full Stack Web Development bootcamp. I'm an avid coder because every challenge I'm presented with is just another puzzle or riddle waiting to be solved. I love finding ways to minimize and optimize the code I've written to achieve the cleanest possible solution.</div>
      <div class="about">Outside of coding I'm a video gamer, board gamer, and card gamer. I also enjoy playing tennis, bike riding, hiking, rock climbing, and binging quality television.</div>
      <button class="project-link">View my Projects</button>
    </div>
  `);
}

function loadProjects() {
  $('main').html(`
  <ul class="project-list">
    <li class="project-list-item">Magic Quiz</li>
    <li class="project-list-item">Buffy Quiz</li>
    <li class="project-list-item">Bookmarker</li>
  </ul>
  <article>
    <ul class="project-default">

    </ul>
  </article>
  `);
  thumbnailGenerator();
}

function thumbnailGenerator() {
  projects.forEach(function(project) {
    $('.project-default').append(`
      <li class="project-thumbnail">
        <img class="thumbnail-image" src="${project.screenshot}">
        <p class="thumbnail-text">${project.name}</p>
      </li>
    `);
  });
}

function loadProject(project) {
  $('article').html(`
    <h2 class="project-title">${project.title}</h2>
    <img class="screenshot" src="${project.screenshot}" alt="Example Screenshot of the App">
    <div class="content">
      <p>Bult with ${project.builtWith}</p>
      <p>${project.content}</p>
      <div class="link-buttons">
        <button class="link site-link" data-link="${project.page}">View App</button>
        <button class="link repo-link" data-link="${project.repo}">Visit Repo</button>
      </div>
    </div>
  `);
}

function loadContact() {
  $('main').html(`
    <h2 class="contact-title">You can reach me at</h2>
    <ul class="contact-list">
      <li class="contact-info"><a target="_blank" href="mailto:sam.walker@comcast.net?Subject=In%20regards%20to%20your%20profile" target="_top">sam.walker@comcast.net</a></li>
      <li class="contact-info"><a target="_blank" href="https://github.com/NasalJack">github.com/NasalJack</a></li>
      <li class="contact-info"><a target="_blank" href="https://www.linkedin.com/in/sam-walker-25aba918b/">Linkedin</a></li>
    </ul>
  `);
}

function findProjectByName(projectName) {
  return projects.filter(project => project.name === projectName);
}

function handleLinkClicked() {
  $('main').on('click', '.link', function(event) {
    const link = $(this).attr('data-link');
    window.open(link);
  });
}

function handleNameClicked() {
  $('.nav-name').click(function() {
    loadLanding();
  });
}

function handleAboutMeClicked() {
  $('.nav-about').click(function() {
    loadAboutMe();
  });
  $('main').on('click', '.about-me-link', function() {
    loadAboutMe();
  });
}

function handleProjectsClicked() {
  $('.nav-projects').click(function() {
    loadProjects();
  });
  $('main').on('click', '.project-link', function() {
    loadProjects();
  });
}

function handleProjectClicked() {
  $('main').on('click', '.project-list-item', function() {
    const projectName = $(this).html();
    const project = findProjectByName(projectName);
    loadProject(project[0]);
  });
  $('main').on('click', '.thumbnail-image', function() {
    const projectName = $(this).parent().find('p').html();
    const project = findProjectByName(projectName);
    loadProject(project[0]);
  });
  $('main').on('click', '.thumbnail-text', function() {
    const projectName = $(this).html();
    const project = findProjectByName(projectName);
    loadProject(project[0]);
  });
}

function handleContactClicked() {
  $('.contact-link').click(function() {
    loadContact();
  });
  
}

function onPageLoad() {
  handleLinkClicked();
  handleNameClicked();
  handleAboutMeClicked();
  handleProjectsClicked();
  handleProjectClicked();
  handleContactClicked();
  loadLanding();
}

$(onPageLoad);