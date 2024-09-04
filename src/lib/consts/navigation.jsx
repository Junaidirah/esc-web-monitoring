import {
	HiOutlineViewGrid,
	HiPlus,
	HiOutlineUser,
	HiMinusCircle,
} from 'react-icons/hi';
// import { TbDiscount2 } from 'react-icons/tb';
import { MdOutlineLiveHelp } from 'react-icons/md';

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />,
	},
	{
		key: 'products',
		label: 'Tambah Stasiun',
		path: '/products',
		icon: <HiPlus />,
	},
	{
		key: 'Delete',
		label: 'Delete Stasiun',
		path: '/DeleteStasiun',
		icon: <HiMinusCircle />,
	},
	{
		key: 'about',
		label: 'About',
		path: '/About',
		icon: <HiOutlineUser />,
	},
	{
		key: 'help',
		label: 'Help',
		path: '/Help',
		icon: <MdOutlineLiveHelp />,
	},
];
