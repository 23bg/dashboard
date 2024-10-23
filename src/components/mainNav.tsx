
import { Separator } from './ui/separator'
import { Search } from 'lucide-react'
import { TopNav } from './top-nav'
import ThemeSwitch from './theme-switch'
import { UserNav } from './user-nav'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
function MainNav() {
  return (
    <>
    
      
       <div className='flex flex-row justify-center items-center gap-3'>
          {/* <img src="https://avatars.githubusercontent.com/u/150508557?s=200&v=4" alt="" className='w-10'/> */}
          <Avatar className='h-10 w-10'>
            <AvatarImage src='https://avatars.githubusercontent.com/u/150508557?s=200&v=4' alt='@shadcn'/>
            <AvatarFallback>SN</AvatarFallback>
          </Avatar>
          <p className='text-2xl font-semibold'>
          23BG</p>
          </div>
          <Separator orientation={'vertical'}/>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
       
      
    </>
  )
}



const topNav = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      isActive: true,
    },
    {
      title: 'Task',
      href: '/:name/tasks',
      isActive: true,
    },
    {
      title: 'Chats',
      href: '/:name/chats',
      isActive: false,
    },
    {
      title: 'Settings',
      href: '/:name/settings',
      isActive: false,
    },
  ]
  
export default MainNav