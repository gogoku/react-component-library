import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import * as iconsList from 'react-icons/all';
import { SideNav } from '../index';
import PropGenerator from '../../PropGenerator';
import IconPicker from '../../IconPicker/IconPicker';

const defaultValueJson = {
  navJson: [
    {
      title: 'Main Nav 1',
      link: '',
      key: 'main_nav1',
      type: 'parent',
      access: true,
      children: [
        {
          title: 'Sub Nav 1',
          key: 'sub_nav1',
          type: 'child',
          link: '/about',
          access: true,
          children: [],
        },
      ],
    },
    {
      title: 'Main Nav 2',
      link: '',
      key: 'main_nav2',
      type: 'parent',
      access: true,
      children: [
        {
          title: 'Sub Nav 2',
          key: 'sub_nav2',
          type: 'child',
          link: '/about',
          access: true,
          children: [],
        },
      ],
    },
  ],
};

const propJson = [
  {
    type: 'json',
    id: 'navJson',
    name: '     ',
  },
];

const defaultIcons = {
  main_nav1: 'FaChartArea',
  sub_nav1: 'FaChartBar',
  main_nav2: 'FaChartLine',
  sub_nav2: 'FaChartPie',
  user_profile: 'FaSlidersH',
};

function SideNavStory() {
  const [valueJson, UpdateValueJson] = useState(defaultValueJson);
  const [icons, updateIcons] = useState(defaultIcons);

  const getIcons = (id) => {
    const iconName = icons[id];
    const Icon = iconsList[iconName];
    if (Icon) {
      return <Icon />;
    } else {
      return '';
    }
  };

  const IconField = ({ obj }) => {
    const onChange = (val) => {
      let newIcons = { ...icons };
      newIcons[obj['key']] = val;
      updateIcons(newIcons);
    };
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '8px',
        }}
      >
        <div>{obj.title}</div>
        <div
          style={{
            width: '80%',
          }}
        >
          <IconPicker onChange={onChange} value={icons[obj['key']]} />
        </div>
      </div>
    );
  };

  const IconGenerator = (mainNav) => {
    return mainNav.map((navObj) => (
      <>
        <IconField obj={navObj} />
        {IconGenerator(navObj.children)}
      </>
    ));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <SideNav getIcons={getIcons} navJson={valueJson.navJson} />
      <div>
        <p>
          <PropGenerator
            propJson={propJson}
            valueJson={valueJson}
            onChange={UpdateValueJson}
          />
        </p>
      </div>
      <div style={{ flex: 1, padding: '0 8px' }}>
        {IconGenerator(valueJson.navJson)}
      </div>
    </div>
  );
}

storiesOf('SideNav', module).add('SideNav', () => <SideNavStory />);
