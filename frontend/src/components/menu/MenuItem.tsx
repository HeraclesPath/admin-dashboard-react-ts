import { NavLink } from 'react-router-dom';
import type { IconType } from 'react-icons';

interface MenuItemProps {
  onClick?: () => void;
  catalog: string;
  listItems: {
    isLink: boolean;
    url?: string;
    icon: IconType;
    label: string;
    onClick?: () => void;
  }[];
}

const baseButtonStyle =
  'btn btn-ghost btn-block justify-start 2xl:min-h-[52px] 3xl:min-h-[64px]';
const iconStyle = 'xl:text-2xl 2xl:text-3xl 3xl:text-4xl';
const textStyle = 'xl:text-sm 2xl:text-base 3xl:text-lg capitalize';

const MenuItem = ({ onClick, catalog, listItems }: MenuItemProps) => (
  <div className="w-full flex flex-col items-stretch gap-2">
    <span className="hidden xl:block px-2 xl:text-sm 2xl:text-base 3xl:text-lg uppercase">
      {catalog}
    </span>

    {listItems.map(({ isLink, url, icon: Icon, label, onClick: itemClick }, i) =>
      isLink ? (
        <NavLink
          key={label + i}
          to={url || ''}
          onClick={onClick}
          className={({ isActive }) =>
            `${baseButtonStyle} ${isActive ? 'btn-active' : ''}`
          }
        >
          <Icon className={iconStyle} />
          <span className={textStyle}>{label}</span>
        </NavLink>
      ) : (
        <button
          key={label + i}
          onClick={itemClick}
          className={baseButtonStyle}
        >
          <Icon className={iconStyle} />
          <span className={textStyle}>{label}</span>
        </button>
      )
    )}
  </div>
);

export default MenuItem;
