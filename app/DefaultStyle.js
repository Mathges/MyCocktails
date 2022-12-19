import {createGlobalStyle} from 'styled-components';

const DefaultStyle = createGlobalStyle`
  html {
    // colors
    --font-color-primary: #fff;
    --bg-transparency-01: rgba(255, 255, 255, 0.1);
    --bg-transparency-02: rgba(255, 255, 255, 0.2);
    --bg-transparency-03: rgba(255, 255, 255, 0.3);

    // font sizes
    --font-size-main-title: 40px;
    --font-size-subtitle: 30px;
    --font-size-text-primary: 20px;
    --font-size-text-secondary: 15px;
  }
`;

export default DefaultStyle;
