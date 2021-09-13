import { LogoLink } from '../LogoLink';
import mock from './mock';
export function Header() {
  return (
    <div className="main-container">
      <div>
        <LogoLink
          link="/"
          srcImg={mock.logo}
          text={`${mock.blogName} = ${mock.blogDescription}`}
          showText={true}
        />
      </div>
    </div>
  );
}
