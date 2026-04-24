import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from '../components/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'accent', 'outline', 'ghost', 'text'],
      description: 'Button visual variant',
    },
    size: {
      control: 'select',
      options: ['m', 'xl'],
      description: 'Button size: m (40px) or xl (56px)',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
    leftIcon: {
      control: 'boolean',
      description: 'Show left icon',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only mode (hides label)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state (shows spinner)',
    },
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

export const Accent: Story = {
  args: {
    variant: 'accent',
    label: 'Accent Button',
    leftIcon: true,
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline Button',
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div class="d-flex flex-column gap-3">
        <div class="d-flex gap-2">
          <app-button variant="primary" label="Primary"></app-button>
          <app-button variant="accent" label="Accent" [leftIcon]="true"></app-button>
          <app-button variant="outline" label="Outline"></app-button>
          <app-button variant="ghost" label="Ghost" [leftIcon]="true"></app-button>
          <app-button variant="text" label="Text" [leftIcon]="true"></app-button>
        </div>
        <div class="d-flex gap-2 align-items-center">
          <app-button variant="primary" size="m" label="Size M"></app-button>
          <app-button variant="primary" size="xl" label="Size XL"></app-button>
        </div>
      </div>
    `,
  }),
};
