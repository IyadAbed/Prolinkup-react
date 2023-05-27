
import SecNav from '../component/SecNav'
import {Outlet} from 'react-router-dom'
export default function StartDream() {
  return (
    <>
    <SecNav />
    <Outlet />
    </>
  )
}
