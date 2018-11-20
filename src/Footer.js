import React, { Component } from 'react';
import styled from 'styled-components';

import Beginning from './assets/footer/beginning.png';
import ASCII from './assets/footer/ascii2.png';
import Bug1 from './assets/footer/bug1.png';
import Graveyard from './assets/footer/graveyard.png';
import Lighthouse from './assets/footer/lighthouse.png';
import Fire from './assets/footer/blueflame.gif';

const Footer = styled.div`
    width:100%;
    min-height:100vh;
    min-width:100vw;
    position:relative;
    background-image: linear-gradient(to bottom, rgba(177,177,177,0.00) 50%, rgba(0,0,0,0.46) 100%);
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
`

const FooterCont = styled.div`
    max-width:1150px;
    margin: 0 auto;
    display:flex;
    flex-direction:column;

    .beginning {
        width:80%;
        position:relative;
        margin: 0 auto;
    }
`

const FooterBox = styled.div`
    width:100%;
    padding:14px 24px;
    background:#D8D8D8;
    position:relative;
    display:flex;
    flex-direction:column;
    border-radius: 2px 0 0 0;
    margin:0 auto;
    background-image:url(${ASCII});
    background-position:24px bottom;
    background-repeat: no-repeat;
    background-size: 91%;

    @media(max-width:1200px) {
        max-width:96%;
    }

    .footerBox__top {
        display:flex;
        justify-content:space-between;

        @media(max-width:850px) {
            flex-direction:column;
        }

        &--cont {
            width:48.5%;
            @media(max-width:850px) {
                width:100%;
            }
        }
        &--left {
            .footerBox__top--content {
                flex-direction:column;
            }
        }

        &--right {
            .footerBox__top--title {
                width:33.33%;
            }
            .footerBox__top--title__cont {
                display:flex;
            }
        }

        &--title {
            color:rgb(60,60,60);
            text-transform:uppercase;
            font-size:1.2rem;
            font-family: 'PingFang SC', sans-serif;
            font-weight:200;

            &__cont {
                border-bottom: 1px solid rgb(127,127,127);
                position:relative;
                margin-bottom:5px;

                &:after {
                    content: " ";
                    position: absolute;
                    top: auto;
                    left: 0px;
                    right: 0px;
                    bottom: -5px;
                    border: 0.2px solid rgb(127,127,127);
                }
            }
        }

        &--content {
            color:rgb(60,60,60);
            text-transform:uppercase;
            font-size:1.2rem;
            display:flex;
            border-bottom: 1px solid rgb(127,127,127);
            padding: 8px 0;
            position:relative;

            &:after {
                content: " ";
                position: absolute;
                top: auto;
                left: 0px;
                right: 0px;
                bottom: -5px;
                border: 0.2px solid rgb(127,127,127);
            }

            @media(max-width:850px) {
                border-bottom: none;
            }

            .oneThird {
                width:33.33%;
                position:relative;

                &__bug img {
                    position:absolute;
                    top:0;
                    left:0;
                    width: 140px;
                    height:148px;
                    z-index:1000;
                }
            }

            .hole {
                position:relative;
                height:auto;
                border-radius:50%;
                max-width: 100px;
                overflow:hidden;

                div {
                    position:relative;
                    height:100%;
                    width:100%;
                    background:rgb(238,238,238);
                    background-image:url(${Fire});

                    background-attachment: fixed;
                    background-position: 89% 10%;
                    background-repeat: no-repeat;
                    background-size: 70px auto;
                }
            }

            &__cont {
                border-bottom: 10px double rgb(127,127,127);
            }

            &__us {
                display:flex;
                flex-direction:column;

                div {
                    display:flex;
                    align-items:center;
                }

                img {
                    width:34px;
                    height:34px;
                    margin-right:14px;
                }
            }
        }
    }
    .footerBox__content {
        display:flex;
        justify-content:space-between;
        margin-top:24px;
        padding-bottom: 80px;

        @media(max-width:850px) {
            flex-direction:column;
        }
        @media(max-width:550px) {
            padding-bottom:40px;
        }

        p {
            width:48.5%;
            letter-spacing:1.8px;
            font-size:32px;
            font-weight:500;

            @media(max-width:850px) {
                width:100%;
            }

            @media(max-width:550px) {
                font-size: 24px;
            }

            &:first-of-type {
                @media(max-width:850px) {
                    margin-bottom:16px;
                }
            }
        }
    }
    .bigFont {
        font-size:4.2rem;
        color:black;
    }
`

const FooterBar = styled.div`
    width:100%;
    padding:14px 24px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-family: 'PingFang SC', sans-serif;
    background:rgb(25,25,25);

    p {
        color:white;
        font-size:1.6rem;
    }
`

class Header extends Component {
    render() {
        return (
            <Footer>
                <FooterCont>
                    <img className="beginning" src={Beginning} alt="The Beginning" />
                    <FooterBox>
                        <div className="footerBox__top">
                            <div className="footerBox__top--cont footerBox__top--left">
                                <div className="footerBox__top--title__cont">
                                    <p className="footerBox__top--title">This bit was made on–</p>
                                </div>
                                <div className="footerBox__top--content">
                                    <p className="bigFont">&copy;5/11/2018</p>
                                    <p className="bigFont">Toronto, Canada</p>
                                </div>
                            </div>
                            <div className="footerBox__top--cont footerBox__top--right">
                                <div className="footerBox__top--title__cont">
                                    <p className="footerBox__top--title">us–</p>
                                    <p className="footerBox__top--title">bug–</p>
                                    <p className="footerBox__top--title">hole–</p>
                                </div>
                                <div className="footerBox__top--content">
                                    <div className="footerBox__top--content__us oneThird">
                                        <div>
                                            <img src={Graveyard} alt="Dead" />
                                            <p className="bigFont">#1</p>
                                        </div>
                                        <div>
                                            <img src={Lighthouse} alt="Captain"/>
                                            <p className="bigFont">#2</p>
                                        </div>
                                    </div>
                                    <div className="oneThird oneThird__bug">
                                        <img alt="bug" src={Bug1} />
                                    </div>
                                    <div className="oneThird hole" >
                                        <div/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footerBox__content">
                            <p>Ethics Gradient is a FULL STACK DESIGN and DEVELOPMENT and MARKETING and BUSINESS firm. We are two real startup guys ready to hit the ground running and fully synergize with your business family.</p>
                            <p>Ethics Gradient is a FULL STACK DESIGN and DEVELOPMENT and MARKETING and BUSINESS firm. We are two real startup guys ready to hit the ground running and fully synergize with your business family.</p>
                        </div>
                    </FooterBox>
                </FooterCont>
                <FooterBar>
                    <p>the bottom.</p>
                    <p>contact us.</p>
                    <p>secret collection →</p>
                </FooterBar>
            </Footer>
        )
    }
}

export default Header;