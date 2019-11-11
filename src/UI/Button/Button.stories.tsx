import React from 'react';
import { UIButton } from './Button';
import { action } from '@storybook/addon-actions';

import { storiesOf } from '@storybook/react';

storiesOf("Send Button", module)
    .add("Submit button",
        () => <UIButton onClick={action("clicked")} text={'test'}/>
    )
    .add("Submit button Disabled",
        () => <UIButton disabled onClick={action("clicked")} text={'Disabled'}/>
    );
