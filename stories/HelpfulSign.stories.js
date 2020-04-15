
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HelpfulSign from '../src/HelpfulSign';

export default {
  title: 'HelpfulSign',
  component: HelpfulSign,
};

export const Primary = () => <HelpfulSign color="primary" />;
export const Secondary = () => <HelpfulSign color="secondary" />;
export const Color = () => <HelpfulSign color={color('color', '#00FF00')} />;
    