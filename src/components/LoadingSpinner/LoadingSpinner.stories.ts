import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from './LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
    title: 'ReactComponentsLibrary/LoadingSpinner',
    component: LoadingSpinner,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const PrimaryLoadingSpinner: Story = {
    args: {
        show: true
    }
};
