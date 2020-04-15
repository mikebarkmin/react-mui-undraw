
import React from 'react';
import { color } from '@storybook/addon-knobs';
import HappyBirthday from '../src/HappyBirthday';

export default {
  title: 'HappyBirthday',
  component: HappyBirthday,
};

export const Primary = () => <HappyBirthday color="primary" />;
export const Secondary = () => <HappyBirthday color="secondary" />;
export const Color = () => <HappyBirthday color={color('color', '#00FF00')} />;
    