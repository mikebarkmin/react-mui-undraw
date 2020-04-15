
import React from 'react';
import { color } from '@storybook/addon-knobs';
import WallPost from '../src/WallPost';

export default {
  title: 'WallPost',
  component: WallPost,
};

export const Primary = () => <WallPost color="primary" />;
export const Secondary = () => <WallPost color="secondary" />;
export const Color = () => <WallPost color={color('color', '#00FF00')} />;
    