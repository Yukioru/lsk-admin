// import { configure } from './storybook';
// function loadStories() {
//   require('./demo.story.jsx');
// }
//
// configure(loadStories, module);

import { wrapModules } from './storybook';
const stories = require('glob!./story.pattern');
// const stories = require('glob!./story.pattern');
wrapModules(stories, module);
