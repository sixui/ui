import { SVGProps } from 'react';
const SvgTriangleDown = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='currentColor'
    viewBox='7 10 10 5'
    {...props}
  >
    <path fillRule='evenodd' d='m7 10 5 5 5-5z' />
  </svg>
);
export { SvgTriangleDown };
