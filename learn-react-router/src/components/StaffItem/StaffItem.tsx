import { useParams, useOutletContext } from 'react-router-dom'
export default function StaffItem() {
  // hook useParams(): nhận param từ url
  const { id } = useParams()
  return <div>StaffItem {id}</div>
}
