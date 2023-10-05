import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Designs } from './Designs/Designs';
import classes from './UWHomePage169.module.css';

interface Props {
  className?: string;
}
/* @figmaId 18:56 */
export const UWHomePage169: FC<Props> = memo(function UWHomePage169(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.overlay}></div>
      <div className={classes.nav}></div>
      <div className={classes._580b57fcd9996e24bc43c53e1}></div>
      <div className={classes.discordLogo1}></div>
      <div className={classes.roomDesigningReinvented}>Room Designing Reinvented.</div>
      <div className={classes.roomPartPicker}>Room Part Picker</div>
      <div className={classes.rectangle3}></div>
      <div className={classes.design}>Design -&gt;</div>
      <div className={classes.completedSetups}>Completed Setups</div>
      <div className={classes.designer}>Designer</div>
      <div className={classes.guides}>Guides</div>
      <div className={classes.browseProducts}>Browse Products</div>
      <div className={classes.overlay2}></div>
      <div className={classes.nav2}></div>
      <div className={classes._580b57fcd9996e24bc43c53e2}></div>
      <div className={classes.discordLogo2}></div>
      <div className={classes.roomDesigningReinvented2}>Room Designing Reinvented.</div>
      <div className={classes.roomPartPicker2}>Room Part Picker</div>
      <Designs />
      <div className={classes.completedSetups2}>Completed Setups</div>
      <div className={classes.designer2}>Designer</div>
      <div className={classes.guides2}>Guides</div>
      <div className={classes.browseProducts2}>Browse Products</div>
    </div>
  );
});
