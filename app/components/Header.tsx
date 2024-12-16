import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import Link from 'next/link';

interface MenuItem {
    id: string;
    name: string;
    path: string
}

const Menu: MenuItem[] = [
    {
        id: '0',
        name: 'Home',
        path: '/'
    },
    {
        id: '1',
        name: 'CountDown',
        path: '/countdown'
    },
    {
        id: '2',
        name: 'Weather',
        path: '/weather'
    },
    {
        id: '3',
        name: 'Lunar Calendar',
        path: '/lunar-calendar'
    }
]

const Header = () => {
    return (
        <header className="bg-foreground text-white py-4 shadow-md sticky top-0">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <Link href={'/'} className="text-xl font-bold">APP-X</Link>

                <NavigationMenu>
                    <NavigationMenuList>
                        {Menu.map(menu => (
                            <NavigationMenuItem key={menu.id} className='px-2 py-1 rounded-md hover:bg-white hover:bg-opacity-70 font-semibold'>
                                <Link href={menu.path} legacyBehavior passHref>
                                    <NavigationMenuLink>
                                        {menu.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}

                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    )
}

export default Header