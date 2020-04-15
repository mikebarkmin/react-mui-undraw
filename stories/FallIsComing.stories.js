
import React from 'react';
import { color } from '@storybook/addon-knobs';
import FallIsComing from '../src/FallIsComing';

export default {
  title: 'FallIsComing',
  component: FallIsComing,
};

export const Primary = () => <FallIsComing color="primary" />;
export const Secondary = () => <FallIsComing color="secondary" />;
export const Color = () => <FallIsComing color={color('color', '#00FF00')} />;
    