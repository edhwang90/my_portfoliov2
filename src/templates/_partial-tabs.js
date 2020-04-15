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

            let additionalLink;

            if (tab.link) {
              additionalLink = <p><a className="to-bold" rel="noopener noreferrer" href={tab.link.url} title={tab.link.title} target="_blank">{`${tab.link.title}:`} {tab.link.url}</a></p>;
            }
            
            const assets = tab.assets.map((asset, assetIndex) => {
              if (!asset.isVideo) {
                return (
                  <li key={assetIndex}><a className={`zoom-in img-${asset.assetSize}`} href={asset.url} rel="noopener noreferrer" target="_blank"><img src={asset.url}></img></a></li>
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

            });

            return (
              <div label={tab.title} key={index} >
                { descriptions }
                { additionalLink }
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