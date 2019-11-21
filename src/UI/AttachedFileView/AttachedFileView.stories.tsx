import React from 'react';
import { action } from '@storybook/addon-actions';
import { UIAttachedFileView } from './AttachedFileView';

import { storiesOf } from '@storybook/react';

storiesOf("Attached file view", module)
    .add("Active",
        () => <UIAttachedFileView onDelete={action("deleted")} fileName={'fileName'}/>
    )

