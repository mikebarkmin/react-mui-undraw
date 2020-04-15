
import React from 'react';
import { color } from '@storybook/addon-knobs';
import ChasingLove from '../src/ChasingLove';

export default {
  title: 'ChasingLove',
  component: ChasingLove,
};

export const Primary = () => <ChasingLove color="primary" />;
export const Secondary = () => <ChasingLove color="secondary" />;
export const Color = () => <ChasingLove color={color('color', '#00FF00')} />;
    