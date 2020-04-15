
import React from 'react';
import { color } from '@storybook/addon-knobs';
import CoWorking from '../src/CoWorking';

export default {
  title: 'CoWorking',
  component: CoWorking,
};

export const Primary = () => <CoWorking color="primary" />;
export const Secondary = () => <CoWorking color="secondary" />;
export const Color = () => <CoWorking color={color('color', '#00FF00')} />;
    