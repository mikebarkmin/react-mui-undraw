
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LoadMore from '../src/LoadMore';

export default {
  title: 'LoadMore',
  component: LoadMore,
};

export const Primary = () => <LoadMore color="primary" />;
export const Secondary = () => <LoadMore color="secondary" />;
export const Color = () => <LoadMore color={color('color', '#00FF00')} />;
    