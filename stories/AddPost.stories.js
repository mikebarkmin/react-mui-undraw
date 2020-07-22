
import React from 'react';
import { color } from '@storybook/addon-knobs';
import AddPost from '../src/AddPost';

export default {
  title: 'AddPost',
  component: AddPost,
};

export const Primary = () => <AddPost color="primary" />;
export const Secondary = () => <AddPost color="secondary" />;
export const Color = () => <AddPost color={color('color', '#00FF00')} />;
    