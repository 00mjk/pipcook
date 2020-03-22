import React, { Component } from 'react';

import './index.scss';

const onClickItem = (url) => {
  location.href = url;
};

const items = [{
  title: 'MNIST Handwritten Digit Recognition',
  cover: 'https://img.alicdn.com/tfs/TB1GtzSy.T1gK0jSZFrXXcNCXXa-480-360.jpg',
  description: 'We have trained a neural network to recognize handwritten digits. You can have a try to give your own handwritten digit',
  url: '/#/showcase/mnist',
}, {
  title: 'Image Classification for Front-end Assets',
  cover: 'https://gw.alicdn.com/tfs/TB1yujRgUY1gK0jSZFMXXaWcVXa-524-410.png',
  description: 'Use CNN trained by Pipcook to try understand the meaning of image assets used in Taobao App',
  url: '/#/showcase/assets-classification',
}];


export default class Orchestration extends Component {
  render() {
    return (
      <div className="home">
        <div className="pipcook-log">Pipcook</div>
        <div className="home-title">Wonder what you can do in Pipcook? We show some cases here</div>
        <div className="card-wrapper">
          {items.map((item) => {
            return (
              <div
                className="card-item"
                onClick={() => {
                  onClickItem(item.url);
                }}
              >
                <img
                  className="card-img"
                  src={item.cover}
                  alt=""
                />
                <h5 className="card-title">{item.title}</h5>
                <p className="thirdPartyDesc">
                  {item.description}
                </p>
                <a className="thirdPartyLink" href={item.url}>
                  立即使用
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
}


