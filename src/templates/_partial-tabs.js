import React from 'react';

import Tabs from '../components/tabs/tabs';

const TabsPartial = (props) => {
  const { data } = props;
  
  return (
    <div className="wrapper-container">
      <Tabs>
        {
          data.map((tab, index) => {
            const descriptions = tab.description.map((text, textIndex) => {
              return (<p key={textIndex}>{text}</p>)
            });

            const assets = tab.assets.map((asset, assetIndex) => {
              return (
                <li key={assetIndex}><a className={`zoom-in img-${asset.assetSize}`} href={asset.url} rel="noopener noreferrer" target="_blank"><img src={asset.url}></img></a></li>
              )
            });

            return (
              <div label={tab.title} key={index} >
                { descriptions }

                <ul>
                  {assets}
                </ul>
              </div>
            )
          })
        }

      </Tabs>
    </div>
  )
}

export default TabsPartial;