import React from 'react';

import { InlineForm } from '../../lib/react-formulation';

const MyTinyForm = () => (
    <InlineForm
        name="name"
        initialValue="Foo Bar"
        rules={{
            required: true,
            minLength: 2,
            maxLength: 20,
        }}
        messages={{
            required: 'Please don\'t leave me empty',
        }}
        onSubmit={(val) => { console.log(val); }}
    >
        <InlineForm.Field resetOnEscape>
            <label htmlFor="tinyform-name">Name</label>
            <input id="tinyform-name" className="form-control" autoComplete="off" />
        </InlineForm.Field>
        <InlineForm.Errors />
        <InlineForm.Cancel>
            <button
                className="btn btn-secondary"
                type="button"
            >
                Cancel
            </button>
        </InlineForm.Cancel>
        <InlineForm.Submit>
            <button
                className="btn btn-primary"
                type="submit"
            >
                Save
            </button>
        </InlineForm.Submit>
    </InlineForm>
);

export default MyTinyForm;
