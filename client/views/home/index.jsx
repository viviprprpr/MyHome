import React from 'react'
import 'css/home.less' // eslint-disable-line

export default class Home extends React.Component {
  componentDidMount() {
    // do
  }
  render() {
    return [
      <header>
        <div className="shadow-box">
          <nav className="header-nav">
            <img className="header-logo" src={require('../../assets/images/logo.svg')} alt="logo" />
            <span>HOME</span>
            <span>DOTA2</span>
            <span>ABOUT</span>
          </nav>
          <div className="header-title">
            <div>
              <h1 className="title-level-one">ORIGINAL</h1>
              <h1 className="title-level-one">ARTICLE</h1>
              <h2 className="title-level-two">原创文章</h2>
            </div>
          </div>
          <div className="header-description">
            <div className="description-style">
              <p>
                {'After a minute or two he opened them again, looked out of the window of the plane, and said to his friend, "Look at those people down there. They look as small as ants, dont they?"'}
              </p>
            </div>
            <p className="header-date">May, 24</p>
          </div>
        </div>
      </header>,
      <div className="dota-competition">
        <img className="competition-img" src={require('../../assets/images/WechatIMG1.jpeg')} alt="dota2到底谁说了算" />
        <div className="competition-description">
          <p>6月4日，DOTA2 Supermajor进入到主赛事阶段，进行了四轮比赛，胜者组的Liquid和Secret晋级下一轮</p>
          <span className="competition-all">VIEW ALL</span>
        </div>
      </div>,
    ]
  }
}
