import React from 'react';
import { storiesOf } from '@storybook/react';
import colors from '../index';
import { Card } from '../../Card';

function Palette({ bgColor, description, color }) {
  return (
    <Card>
      <div>
        <div
          style={{
            backgroundColor: bgColor,
            height: '200px',
            width: '200px',
            color,
            display: 'flex',
            alignItems: 'flex-end',
            padding: '8px',
            border: '1px solid #eeeeee',
          }}
        >
          Sample Text
        </div>
        <div
          style={{
            backgroundColor: colors.brightBackground,
            height: '100px',
            width: '200px',
            padding: '8px',
          }}
        >
          <div> {description} </div>
        </div>
      </div>
    </Card>
  );
}

function ColorPalette() {
  return (
    <div>
      <div>
        <div>Primary Application Colors</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Palette
            bgColor={colors.pageBackground}
            description="Default Background Color for Application"
            color={colors.darkTextColor}
          />
          <Palette
            bgColor={colors.primaryBackground}
            description="Primary Background Color for content in Application"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.primaryHighlight}
            description="Primary Highlighting  color for content with Primary Background"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.secondaryHighlight}
            description="Secondary Highlight Color"
            color={colors.darkTextColor}
          />
        </div>
      </div>
      <div style={{ marginTop: '16px' }}>
        <div>Action Colors</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Palette
            bgColor={colors.success}
            description="Color to Indicate Positive Action Elements"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.successHighlight}
            description="Positive Color Shade When Highlighted"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.successActive}
            description="Positive Color Shade When Active or Focused"
            color={colors.brightTextColor}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Palette
            bgColor={colors.info}
            description="Color to Highlight Special Action Action Elements"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.infoHighlight}
            description="Special Element Color Shade When Highlighted"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.infoActive}
            description="Special Element Color Shade When Active or Focused"
            color={colors.brightTextColor}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Palette
            bgColor={colors.warning}
            description="Color to Indicate Action Elements That User need to be warned about"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.warningHighlight}
            description="Warning Color Shade When Highlighted"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.warningActive}
            description="Warning Color Shade When Active or Focused"
            color={colors.brightTextColor}
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Palette
            bgColor={colors.danger}
            description="Color to Indicate Action Elements That Result in any removal of data"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.dangerHighlight}
            description="Danger Color Shade When Highlighted"
            color={colors.brightTextColor}
          />
          <Palette
            bgColor={colors.dangerActive}
            description="Danger Color Shade When Active or Focused"
            color={colors.brightTextColor}
          />
        </div>
      </div>
    </div>
  );
}

storiesOf('Colors', module).add('Color Palette', () => <ColorPalette />);
