import styled from 'styled-components';

const HeaderSaturate = styled.div`
    position:absolute;
    top:12px;
    left:12px;
    right:12px;
    height:40px;
    border-radius:12px;
    width: calc(100vw - 24px);
    padding:12px;
    z-index:1000;
    background:blue;
    mix-blend-mode:saturation;
`

export default HeaderSaturate;