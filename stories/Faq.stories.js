
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Faq from '../src/Faq';

export default {
  title: 'Faq',
  component: Faq,
};

export const Primary = () => <Faq color="primary" />;
export const Secondary = () => <Faq color="secondary" />;
export const Color = () => <Faq color={color('color', '#00FF00')} />;
    