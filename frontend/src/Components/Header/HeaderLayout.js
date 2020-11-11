import styled from 'styled-components';

const borderWidth = 4

const HeaderLayout = styled.div`
  position: absolute;
  width: calc(100vw - 24px);
  padding: 12px;
  z-index: 1000;
  display: flex;

  & > div {
    border: ${borderWidth}px solid ${props => props.theme.greenBeige};
    border-radius: 12px;
  }

  .header__header-left {
    display: flex;
    position: relative;
    width: 100%;
    height: 40px;

    &-eg {
      position: absolute;
      left: -${borderWidth}px;
      top: -${borderWidth}px;
      bottom: -${borderWidth}px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${props => props.theme.greenGrey};
      border: ${borderWidth}px solid ${props => props.theme.greenBeige};
      border-radius: 12px;
      padding: 6px 12px;
    }
  }
  .header__header-right {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.greenGrey};
    border: ${borderWidth}px solid ${props => props.theme.greenBeige};
    border-radius: 12px;
  }
`;

export default HeaderLayout;