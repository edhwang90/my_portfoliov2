import React from 'react';

const ListPartial = (props) => {
  const { data } = props;

  return (
    <div className="wrapper-container">
      <ul className="img-list">
        {
          data.map((asset, index) => {
           return (
            <li key={index}><a className={`zoom-in img-${asset.assetSize}`} rel="noopener noreferrer" target="_blank" href={asset.url}><img src={asset.url}></img></a></li>
           )
          })
        }
      </ul>
    </div>
  )
}

export default ListPartial;