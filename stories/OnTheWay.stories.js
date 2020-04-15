
import React from 'react';
import { color } from '@storybook/addon-knobs';
import OnTheWay from '../src/OnTheWay';

export default {
  title: 'OnTheWay',
  component: OnTheWay,
};

export const Primary = () => <OnTheWay color="primary" />;
export const Secondary = () => <OnTheWay color="secondary" />;
export const Color = () => <OnTheWay color={color('color', '#00FF00')} />;
    