
import React from 'react';
import { color } from '@storybook/addon-knobs';
import LogoDesign from '../src/LogoDesign';

export default {
  title: 'LogoDesign',
  component: LogoDesign,
};

export const Primary = () => <LogoDesign color="primary" />;
export const Secondary = () => <LogoDesign color="secondary" />;
export const Color = () => <LogoDesign color={color('color', '#00FF00')} />;
    