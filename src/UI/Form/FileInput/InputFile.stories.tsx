import React from 'react';
import { action } from '@storybook/addon-actions';
import { UIInputFile } from './InputFile';

import { storiesOf } from '@storybook/react';

storiesOf("Upload File", module)
    .add("Active",
        () => <UIInputFile onChange={action("clicked")} />
    )
    .add("Disabled",
        () => <UIInputFile onChange={action("clicked")} disabled={true}/>
    )

