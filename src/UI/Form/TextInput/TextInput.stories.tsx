import React from 'react';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';
import { INPUT_POSITION } from './TextInput.model';
import { UIInputField } from './Input/Input';


const fieldWrapperStyle = {'width': '300px'};

storiesOf("Form Field", module)
    .add("Default Form Field",
        () => <div style={fieldWrapperStyle}>
            <UIInputField
                onChange={action("Change")}
                placeholder={'test placeholder'}
                fieldName={'fieldName'}
                labelText={'label text'}
                value={'Value'}
            />
        </div>

    )
    .add("Form Field with error",
        () => <div style={fieldWrapperStyle}>
            <UIInputField
            onChange={action("Change")}
            placeholder={'test placeholder 2'}
            errorMessage={'error Message Default'}
            fieldName={'fieldName'}
            labelText={'label text'}
            value={'Value'}
        />
        </div>
    )
    .add("Form Field without label",
        () => <div style={fieldWrapperStyle}> <UIInputField
            onChange={action("Change")}
            placeholder={'test placeholder 2'}
            fieldName={'fieldName'}
            value={'Value'}
        /></div>
    )
    .add("Form Field left position",
        () => <div style={fieldWrapperStyle}> <UIInputField
            onChange={action("Change")}
            placeholder={'test placeholder 2'}
            errorMessage={'error Message Default'}
            inputPosition={INPUT_POSITION.LEFT}
            fieldName={'fieldName'}
            value={'Value'}
        /></div>
    )
    .add("Form Field right position",
        () => <div style={fieldWrapperStyle}> <UIInputField
            onChange={action("Change")}
            placeholder={'test placeholder 2'}
            errorMessage={'error Message Default'}
            inputPosition={INPUT_POSITION.RIGHT}
            fieldName={'fieldName'}
            value={'Test value'}
        /></div>
    );
