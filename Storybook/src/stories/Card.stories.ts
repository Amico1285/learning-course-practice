import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { CardComponent } from '../components/card.component';
import { ButtonComponent } from '../components/button.component';

const meta: Meta<CardComponent> = {
  title: 'Components/Card',
  component: CardComponent,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    maxWidth: { control: 'number' },
  },
  render: (args) => ({
    props: args,
    template: `<app-card ${argsToTemplate(args)}></app-card>`,
  }),
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Basic: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [CardComponent, ButtonComponent],
    },
    template: `
      <app-card title="Card Title" text="This is a basic card component styled by the custom Bootstrap theme. It demonstrates border radius, shadow, and typography." [maxWidth]="345">
        <div class="d-flex gap-2">
          <app-button variant="link" size="sm" label="Learn More"></app-button>
          <app-button variant="primary" size="sm" label="Action"></app-button>
        </div>
      </app-card>
    `,
  }),
};

export const Dashboard: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [CardComponent],
    },
    template: `
      <div class="row g-3">
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="card-text text-body-secondary mb-1">Revenue</p>
              <h4 class="mt-1">$24,500</h4>
              <p class="card-text text-primary">+12% from last month</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="card-text text-body-secondary mb-1">Users</p>
              <h4 class="mt-1">1,234</h4>
              <p class="card-text text-primary">+8% from last month</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card">
            <div class="card-body">
              <p class="card-text text-body-secondary mb-1">Orders</p>
              <h4 class="mt-1">456</h4>
              <p class="card-text text-primary">+23% from last month</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
