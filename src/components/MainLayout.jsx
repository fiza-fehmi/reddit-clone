import Feed from './Feed'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

const MainLayout = () => {
  return (
    <div className='flex'>
        <LeftBar />
        <Feed />
        <RightBar />
    </div>
  )
}

export default MainLayout