import ProfileForm from './profile-form'
import ContentSection from '../components/content-section'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function SettingsProfile() {
  return (
    <ScrollArea className='w-full h-full px-5 '>
    <ContentSection
      title='Profile'
      desc='This is how others will see you on the site.'
    >
      <ProfileForm  />
    </ContentSection>
      </ScrollArea>
  )
}
