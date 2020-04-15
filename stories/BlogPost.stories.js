
import React from 'react';
import { color } from '@storybook/addon-knobs';
import BlogPost from '../src/BlogPost';

export default {
  title: 'BlogPost',
  component: BlogPost,
};

export const Primary = () => <BlogPost color="primary" />;
export const Secondary = () => <BlogPost color="secondary" />;
export const Color = () => <BlogPost color={color('color', '#00FF00')} />;
    