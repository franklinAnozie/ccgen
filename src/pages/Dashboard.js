import { useEffect, useState } from 'react'
import { useRegContext } from '../context/regContext'
import axios from 'axios'

const Dashboard = () => {
    const { id , URI} = useRegContext()
    const [userData, setUserData] = useState()

    useEffect(() => {
      const fetchUserInfo = async () => {
        const res = await axios.get(`${URI}/${id}`)
        setUserData(res.data)
      }

      fetchUserInfo()
    }, [URI, id])

  return (
    <div>
      <div>
        <header>
          {userData && <h3>Welcome, {userData.fullname}</h3>}
        </header>
      </div>
    </div>
  )
}

export default Dashboard