
import React from 'react';
import { color } from '@storybook/addon-knobs';
import DomainNames from '../src/DomainNames';

export default {
  title: 'DomainNames',
  component: DomainNames,
};

export const Primary = () => <DomainNames color="primary" />;
export const Secondary = () => <DomainNames color="secondary" />;
export const Color = () => <DomainNames color={color('color', '#00FF00')} />;
    