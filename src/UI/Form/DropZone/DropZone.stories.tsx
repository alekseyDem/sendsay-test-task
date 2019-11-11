import React from 'react';
import { DropZone } from './DropZone';

import { storiesOf } from '@storybook/react';

storiesOf("DropZone ", module)
    .add("Submit button",
        () => <DropZone onDropHandler={() => console.log('DZ')}>
            <div>DROP FILE HERE </div>
        </DropZone>
    )
