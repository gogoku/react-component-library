import React, { useState } from 'react';
import Select from 'react-select';
import { PropTypes } from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import styles from './propgenerator.module.css';

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

const InputJSON = ({ propObj, value, onValueUpdate }) => {
  const onupdate = (val) => {
    onValueUpdate(propObj.id, val.jsObject);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <span>{propObj.name}&nbsp;&nbsp;</span>
      <span>
        <JSONInput
          id="a_unique_id"
          placeholder={value}
          // colors={'darktheme'}
          onChange={onupdate}
          locale={locale}
          height="550px"
          waitAfterKeyPress={4000}
        />
      </span>
    </div>
  );
};

const CheckBox = ({ propObj, value, onValueUpdate }) => {
  const onupdate = (ev) => {
    onValueUpdate(propObj.id, ev.currentTarget.checked);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{propObj.name}&nbsp;&nbsp;</span>
      <span>
        <input
          type="checkbox"
          className={styles.txtInput}
          onChange={onupdate}
          value={value}
          key={propObj.id}
        />
      </span>
    </div>
  );
};

const TextComponent = ({ propObj, value, onValueUpdate }) => {
  const onupdate = (ev) => {
    onValueUpdate(propObj.id, ev.currentTarget.value);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{propObj.name}&nbsp;&nbsp;</span>
      <span>
        <input
          className={styles.txtInput}
          onChange={onupdate}
          value={value}
          key={propObj.id}
        />
      </span>
    </div>
  );
};

const Dropdown = ({ propObj, value, onValueUpdate }) => {
  const updateStyle = (obj1) => ({ ...obj1, width: '40%' });

  const onupdate = (val) => {
    onValueUpdate(propObj.id, val);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>{propObj.name}&nbsp;&nbsp;</span>
      <Select
        onChange={onupdate}
        value={value}
        options={propObj.options}
        key={propObj.id}
        styles={{ container: updateStyle }}
      />
    </div>
  );
};

const PropUI = ({ propObj, value, onValueUpdate }) => {
  switch (propObj.type) {
    case 'text':
      return (
        <>
          <TextComponent
            propObj={propObj}
            value={value}
            onValueUpdate={onValueUpdate}
          />
          <br />
        </>
      );
    case 'dropdown':
      return (
        <>
          <Dropdown
            propObj={propObj}
            value={value}
            onValueUpdate={onValueUpdate}
          />
          <br />
        </>
      );
    case 'checkbox':
      return (
        <>
          <CheckBox
            propObj={propObj}
            value={value}
            onValueUpdate={onValueUpdate}
          />
          <br />
        </>
      );
    case 'json':
      return (
        <>
          <InputJSON
            propObj={propObj}
            value={value}
            onValueUpdate={onValueUpdate}
          />
          <br />
        </>
      );
    default:
      return <div></div>;
  }
};

export default function PropGenerator({ propJson, valueJson, onChange }) {
  const onValueUpdate = (id, value) => {
    const newValues = { ...valueJson };
    newValues[id] = value;
    onChange(newValues);
  };
  return (
    <div>
      {propJson.map((propObj) => (
        <PropUI
          propObj={propObj}
          value={valueJson[propObj.id]}
          onValueUpdate={onValueUpdate}
        />
      ))}
    </div>
  );
}

PropGenerator.propTypes = {
  propJson: PropTypes.array,
};
