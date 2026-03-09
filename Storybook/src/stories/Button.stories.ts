import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from '../components/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'outline-primary',
        'outline-secondary',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
  render: (args) => ({
    props: args,
    template: `<app-button ${argsToTemplate(args)}></app-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
  },
};

export const OutlinePrimary: Story = {
  args: {
    variant: 'outline-primary',
    label: 'Outline Primary',
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="d-flex flex-column gap-3">
        <div class="d-flex gap-2">
          <app-button variant="primary" label="Primary"></app-button>
          <app-button variant="secondary" label="Secondary"></app-button>
          <app-button variant="success" label="Success"></app-button>
          <app-button variant="danger" label="Danger"></app-button>
          <app-button variant="warning" label="Warning"></app-button>
          <app-button variant="info" label="Info"></app-button>
        </div>
        <div class="d-flex gap-2">
          <app-button variant="outline-primary" label="Outline"></app-button>
          <app-button variant="outline-secondary" label="Outline"></app-button>
        </div>
        <div class="d-flex gap-2 align-items-center">
          <app-button variant="primary" size="sm" label="Small"></app-button>
          <app-button variant="primary" size="md" label="Medium"></app-button>
          <app-button variant="primary" size="lg" label="Large"></app-button>
        </div>
      </div>
    `,
  }),
};
