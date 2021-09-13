import { LogoLink } from '../LogoLink';
import mock from './mock';
export function Header({blogName, blogDescription, logo}) {
  return (
    <div className="main-container">
      <div>
        <LogoLink
          link="/"
          srcImg={logo}
          text={`${blogName} = ${blogDescription}`}
          showText={true}
        />
      </div>
    </div>
  );
}
