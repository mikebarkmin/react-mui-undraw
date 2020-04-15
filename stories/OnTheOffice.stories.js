
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnTheOffice from '../src/OnTheOffice';

export default {
  title: 'OnTheOffice',
  component: OnTheOffice,
};

export const Primary = () => <OnTheOffice color="primary" />;
export const Secondary = () => <OnTheOffice color="secondary" />;
export const Color = () => <OnTheOffice color={color('color', '#00FF00')} />;
    