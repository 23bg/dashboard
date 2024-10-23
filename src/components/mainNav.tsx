
import { Separator } from './ui/separator'
import { Search } from 'lucide-react'
import { TopNav } from './top-nav'
import ThemeSwitch from './theme-switch'
import { UserNav } from './user-nav'
import { Button } from './custom/button'

function MainNav() {
  return (
    <>
    
      
       <div className='flex flex-row justify-center items-center'>
          {/* <img src="https://avatars.githubusercontent.com/u/150508557?s=200&v=4" alt="" className='w-8'/> */}
          
          <p className='text-xl font-bold '>
          23BG</p>
          </div>
          <Separator orientation={'vertical'} className='bg-zinc-500'/>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Button variant='ghost' size='icon' >
          <Search />
          
          </Button>
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