
import React from 'react';
import { color } from '@storybook/addon-knobs';
import InsertBlock from '../src/InsertBlock';

export default {
  title: 'InsertBlock',
  component: InsertBlock,
};

export const Primary = () => <InsertBlock color="primary" />;
export const Secondary = () => <InsertBlock color="secondary" />;
export const Color = () => <InsertBlock color={color('color', '#00FF00')} />;
    