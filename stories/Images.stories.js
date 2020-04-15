
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Images from '../src/Images';

export default {
  title: 'Images',
  component: Images,
};

export const Primary = () => <Images color="primary" />;
export const Secondary = () => <Images color="secondary" />;
export const Color = () => <Images color={color('color', '#00FF00')} />;
    