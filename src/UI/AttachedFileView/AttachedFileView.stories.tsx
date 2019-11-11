import React from 'react';
import { action } from '@storybook/addon-actions';
import { UI_AttachedFileView } from './AttachedFileView';

import { storiesOf } from '@storybook/react';

storiesOf("Attached file view", module)
    .add("Active",
        () => <UI_AttachedFileView onDelete={action("deleted")} fileName={'fileName'}/>
    )

