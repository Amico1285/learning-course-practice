import type { Meta, StoryObj } from '@storybook/angular';
import { argsToTemplate } from '@storybook/angular';
import { FormFieldComponent } from '../components/form.component';
import { ButtonComponent } from '../components/button.component';

const meta: Meta<FormFieldComponent> = {
  title: 'Components/Form',
  component: FormFieldComponent,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'number'] },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    helperText: { control: 'text' },
    errorText: { control: 'text' },
    isInvalid: { control: 'boolean' },
  },
  render: (args) => ({
    props: args,
    template: `<app-form-field ${argsToTemplate(args)}></app-form-field>`,
  }),
};

export default meta;
type Story = StoryObj<FormFieldComponent>;

export const Default: Story = {
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Enter text...',
    fieldId: 'defaultText',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    fieldId: 'emailHelper',
    helperText: 'We will never share your email',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    type: 'email',
    value: 'invalid-email',
    fieldId: 'emailError',
    isInvalid: true,
    errorText: 'Please enter a valid email address',
  },
};

export const FormExample: Story = {
  render: () => ({
    moduleMetadata: {
      imports: [FormFieldComponent, ButtonComponent],
    },
    template: `
      <form style="max-width: 400px" class="d-flex flex-column">
        <app-form-field
          label="First Name"
          type="text"
          placeholder="John"
          fieldId="firstName"
        ></app-form-field>
        <app-form-field
          label="Last Name"
          type="text"
          placeholder="Doe"
          fieldId="lastName"
        ></app-form-field>
        <app-form-field
          label="Email"
          type="email"
          placeholder="john@example.com"
          fieldId="email"
        ></app-form-field>
        <app-form-field
          label="Password"
          type="password"
          fieldId="password"
        ></app-form-field>
        <app-button variant="primary" size="lg" label="Submit"></app-button>
      </form>
    `,
  }),
};
