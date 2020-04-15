
import React from 'react';
import { color } from '@storybook/addon-knobs';
import Influencer from '../src/Influencer';

export default {
  title: 'Influencer',
  component: Influencer,
};

export const Primary = () => <Influencer color="primary" />;
export const Secondary = () => <Influencer color="secondary" />;
export const Color = () => <Influencer color={color('color', '#00FF00')} />;
    