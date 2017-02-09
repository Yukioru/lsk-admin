import * as storybook from '@kadira/storybook';
const { configure, addDecorator, setAddon, action, storiesOf } = storybook;
import { setOptions } from '@kadira/storybook-addon-options';
import backgrounds from 'react-storybook-addon-backgrounds';
import infoAddon from '@kadira/react-storybook-addon-info';
import * as knob from '@kadira/storybook-addon-knobs';
import backgroundColor from 'react-storybook-decorator-background';

import StyleWrapper from './StyleWrapper';
import StoryWrapper from './StoryWrapper';


import { host } from 'storybook-host';


setAddon(infoAddon);
setOptions({
  name: 'MG Beta',
  url: 'https://github.com/isuvorov',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

addDecorator(knob.withKnobs);

addDecorator(story => (
  // <div>
  <StyleWrapper>
    {/* <StoryWrapper> */}
    {story()}
    {/* </StoryWrapper> */}
  </StyleWrapper>
  // </div>
));
// addDecorator(backgrounds([
//   { name: 'twitter', value: '#00aced', default: true },
//   { name: 'facebook', value: '#3b5998' },
// ]));
// // addDecorator(backgroundColor(['#ffffff', '#000000']));
// addDecorator(host({
//   title: 'A host container for components under test.',
//   align: 'center middle',
//   height: '80%',
//   width: 400,
// }));


const storyParams = {
  action,
  knob,
  storiesOf,
};


function wrapModule(module) {
  if (typeof module === 'function') {
    module(storyParams);
  } else {
    console.log('DO SOMETHING ELSE');
  }
}

function wrapModules(stories, module) {
  return configure(() => {
    for (let key in stories) { // eslint-disable-line
      wrapModule(stories[key]);
    }
  }, module);
}

export { configure, storybook, wrapModule, wrapModules };
