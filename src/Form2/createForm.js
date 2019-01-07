import React from 'react';
import forEach from 'lodash/forEach';
import set from 'lodash/set';
import pickBy from 'lodash/pickBy';
import isFunction from 'lodash/isFunction';
import map from 'lodash/map';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { withFormik } from 'formik';
import validate from 'validate.js';
import Promise from 'bluebird';

const prepareControls = (ctrls, FormGroup) => {
  const prepared = {};
  forEach(ctrls, (ctrl, name) => {
    const ControlWrapper = ctrl.FormGroup || FormGroup;
    let component;
    if (ControlWrapper) {
      component = (props2) => {
        // console.log('component', props2);
        return React.createElement(
          ControlWrapper,
          props2,
          React.createElement(ctrl.component, props2),
        );
      };
    } else {
      ({ component } = ctrl);
    }

    prepared[name] = {
      name,
      ...ctrl,
      component,
    };
  });
  return prepared;
};


const createForm = ({
  controls: rawControls,
  view: View,
  displayName,
  FormGroup,
  withFormik: rawWithFormik,
  ...props
}) => {
  const controls = prepareControls(rawControls, FormGroup);
  const staticProps = {
    controls,
  };

  const WrappedView = props => React.createElement(View, { ...staticProps, ...props });

  const wrapperWithFormik = rawWithFormik || withFormik;
  return wrapperWithFormik({
    mapPropsToValues() {
      const defaultValues = {};
      Object.keys(rawControls).forEach((key) => {
        set(defaultValues, key, rawControls[key].default);
      });
      return defaultValues;
    },
    handleSubmit: (values, { /* setSubmitting , */ props }) => {
      const { onSubmit } = props;
      if (onSubmit) onSubmit(values);
    },
    handleChange: (values, { /* setSubmitting, */ props3/* , form  */ }) => {
      // console.log('Form2.handleChange', values, props, props3);
      try {
        const onChange = get(this, 'props.onChange') || get(props3, 'onChange');
        if (onChange) onChange(values);
      } catch (err) {
        console.log('onChange err', err);
      }
    },
    getValidators: (ctrls) => {
      const validators = {};
      let customValidators = [];
      forEach(ctrls, (value, key) => {
        validators[key] = pickBy(value.validator, (validator) => {
          return !isFunction(validator);
        });

        const custom = pickBy(value.validator, isFunction);
        if (!isEmpty(custom)) {
          customValidators = [
            ...customValidators,
            ...map(custom, (validator) => {
              return {
                name: key,
                validator,
              };
            }),
          ];
        }
      });
      return {
        validators,
        customValidators,
      };
    },
    async validate(values) {

      const errors = {};

      const {
        validators,
        customValidators,
      } = this.getValidators(controls);

      // validate by validate.js
      try {
        await validate.async(values, validators, { fullMessages: false });
      } catch (err) {
        forEach(err, (error, name) => {
          errors[name] = error?.[0];
        });
      }

      // validate by custom functions
      await Promise.map(customValidators, async ({ name, validator }) => {
        try {
          const message = await validator(values[name], values);
          if (message) {
            errors[name] = typeof message === 'string' ? message : 'The Error';
          }
        } catch (err) {
          if (typeof err === 'string') errors[name] = err;
          if (typeof err.message === 'string') errors[name] = err.message;
        }
      });


      // throw if errors
      if (!isEmpty(errors)) throw errors;
      try {
        // this.handleChange(values);
        const onChange = get(this, 'props.onChange') || get(props, 'onChange');
        // const { onChange } = props;
        if (onChange) onChange(values);
      } catch (err) {
        console.log('onChange err', err);
      }
    },
    validateOnChange: false,
    validateOnBlur: false,
    displayName: displayName || 'Form',
    ...props,
  })(WrappedView);
};

export default createForm;