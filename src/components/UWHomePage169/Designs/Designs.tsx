import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Designs.module.css';

interface Props {
  className?: string;
}
/* @figmaId 701:2 */
export const Designs: FC<Props> = memo(function Designs(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      <div className={classes.design}>Design -&gt;</div>
    </div>
  );
});
