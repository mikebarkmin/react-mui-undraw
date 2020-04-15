from string import Template

stories = Template(
    """
import React from 'react';
import { color } from '@storybook/addon-knobs';
import $name from '../src/$name';

export default {
  title: '$name',
  component: $name,
};

export const Primary = () => <$name color="primary" />;
export const Secondary = () => <$name color="secondary" />;
export const Color = () => <$name color={color('color', '#00FF00')} />;
    """
)

