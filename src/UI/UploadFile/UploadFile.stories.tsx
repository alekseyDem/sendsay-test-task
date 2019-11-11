import React from 'react';
import { action } from '@storybook/addon-actions';
import { UI_UploadFile } from './UploadFile';

import { storiesOf } from '@storybook/react';

storiesOf("Upload File", module)
    .add("Active",
        () => <UI_UploadFile onChange={action("clicked")} />
    )
    .add("Disabled",
        () => <UI_UploadFile onChange={action("clicked")} disabled={true}/>
    )

