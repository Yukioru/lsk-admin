import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

const propTypes = {
  children: PropTypes.node,
};

class PageWrapper extends Component {
  componentDidMount() {
    if (window.$ && window.$.AdminLTE) {
      // window.$.AdminLTE.layout.fix();
      /* eslint-disable */
      window.$('.layout-boxed > .wrapper').css('overflow', 'hidden');
      let a = window.$('.main-footer').outerHeight() || 0,
          b = window.$('.main-header').outerHeight() + a,
          c = window.$(window).height(),
          d = window.$('.sidebar').height() || 0;

      if (window.$('body').hasClass('fixed')) {
        window.$('.content-wrapper, .right-side').css('min-height', c - a);
      } else {
        let e;
        c >= d ? (window.$('.content-wrapper, .right-side').css('min-height', c - b), e = c - b)
               : (window.$('.content-wrapper, .right-side').css('min-height', d), e = d);

        const f = window.$(window.$.AdminLTE.options.controlSidebarOptions.selector);
        typeof f !== 'undefined' && f.height() > e && window.$('.content-wrapper, .right-side').css('min-height', f.height());
      }
      /* eslint-enable */
    }
  }

  render() {
    return (
      <div
        className={cx({
          'content-wrapper': true,
          [this.props.className]: this.props.className,
        })}
      >
        {this.props.children}
      </div>
    );
  }
}

PageWrapper.propTypes = propTypes;

export default PageWrapper;
