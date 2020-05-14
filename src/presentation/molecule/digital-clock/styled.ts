import styled from "styled-components";

const Clock = styled.div<{ color: string }>`
  .segment {
    color: #00000015;
  }
  .hours,
  .minutes,
  .seconds {
    width: auto;
    position: relative;
    display: inline-block;
    margin: 20px;
  }
  .hours::before,
  .minutes::after,
  .hours::after,
  .minutes::before {
    content: "";
    position: absolute;
    right: -25px;
    width: 8px;
    height: 8px;
    background-color: ${({ color }) => color};
  }
  .hours::before,
  .minutes::before {
    top: 20px;
  }
  .minutes::after,
  .hours::after {
    top: 52px;
  }
  .digital {
    margin: 5px;
    height: 72px;
    width: 39px;
    fill: ${({ color }) => color + "10"};
  }

  .num-0 .a,
  .num-0 .b,
  .num-0 .c,
  .num-0 .e,
  .num-0 .f,
  .num-0 .g {
    fill: ${({ color }) => color};
  }

  .num-1 .c,
  .num-1 .f {
    fill: ${({ color }) => color};
  }

  .num-2 .a,
  .num-2 .c,
  .num-2 .d,
  .num-2 .e,
  .num-2 .g {
    fill: ${({ color }) => color};
  }
  .num-3 .a,
  .num-3 .c,
  .num-3 .d,
  .num-3 .f,
  .num-3 .g {
    fill: ${({ color }) => color};
  }

  .num-4 .b,
  .num-4 .c,
  .num-4 .d,
  .num-4 .f {
    fill: ${({ color }) => color};
  }

  .num-5 .a,
  .num-5 .b,
  .num-5 .d,
  .num-5 .f,
  .num-5 .g {
    fill: ${({ color }) => color};
  }
  .num-6 .a,
  .num-6 .b,
  .num-6 .d,
  .num-6 .e,
  .num-6 .f,
  .num-6 .g {
    fill: ${({ color }) => color};
  }
  .num-7 .a,
  .num-7 .c,
  .num-7 .f {
    fill: ${({ color }) => color};
  }
  .num-8 .a,
  .num-8 .b,
  .num-8 .c,
  .num-8 .d,
  .num-8 .e,
  .num-8 .f,
  .num-8 .g {
    fill: ${({ color }) => color};
  }
  .num-9 .a,
  .num-9 .b,
  .num-9 .c,
  .num-9 .d,
  .num-9 .f,
  .num-9 .g {
    fill: ${({ color }) => color};
  }
`;

export default { Clock };
