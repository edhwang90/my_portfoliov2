import React from 'react';

import './asset-list.scss';

const AssetList = (props) => {
  const { data } = props;
  return (
    <ul className="asset-list">
    {
      data.map((asset, assetIndex) => {
        if (!asset.isVideo) {
          return (
            <li key={assetIndex}><a className={`zoom-in asset-${asset.assetSize}`} href={asset.url} rel="noopener noreferrer" target="_blank"><img src={asset.url}></img></a></li>
          )
        }
        else {
          return (
            <li key={assetIndex}>
              <video controls>
              <source src={asset.url} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
            </li>
          )
        }
      })
    }
  </ul>
  );
}

export default AssetList;