import { useEffect, useState } from "react";

import classNames from 'classnames';

import { initialProvinces } from './belgium.constants';

const BelgiumMap = () => {

  const [provinces, setProvinces] = useState(initialProvinces);

  useEffect(() => {
    console.log(provinces);
  }, [provinces]);

  const handleClick = (e) => {
    const provinceId = e.currentTarget.id;
    const selectedProvince = provinces.find(p => p.id === provinceId);
    selectedProvince.isSelected = !selectedProvince.isSelected;

    setProvinces([
      ...provinces.filter(p => p.id !== provinceId),
      selectedProvince
    ]);

    console.log(provinceId);
  }

  return (
    <div className="wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 752.16895 611.36615"
        width="50vw"
        height="50vw"
        className="belgium-map"
      >
        {provinces.map(p => (
          <path {...p} key={p.id} onClick={handleClick} className={classNames({ 'selected': p.isSelected })}>
            <text>{p.name}</text>
          </path>
        ))}
      </svg>
      <div className="provinces">
        {provinces.map(p => (
          <>{p.isSelected && <p className="provinces__name">{p.name}</p>}</>
        ))}
      </div>
    </div>
  );
};

export default BelgiumMap;