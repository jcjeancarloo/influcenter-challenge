import { DashboardContext } from '@contexts/dashboard-context'
import { api } from '@services/fake-store-api'
import { User } from '@shared/types'
import { useCallback, useContext, useMemo } from 'react'

const useUsers = () => {
  const { users, loadingUsers, setLoadingUsers, setUsers } = useContext(DashboardContext)
  const fetchUsers = useCallback(async () => {
    try {
      setLoadingUsers(true)
      const { data } = await api.get('/users?limit=20')
      setUsers(data)
      setLoadingUsers(false)
    } catch (error) {
      console.log(error)
    }
  }, [setLoadingUsers, setUsers])

  const uploadUser = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target?.files?.[0]
      const fileReader = new FileReader()
      if (file) {
        fileReader.onload = function (event: any) {
          const data = event.target.result
          const list: User[] = [...users]
          const parsed: User[] = JSON.parse(data)
          const newUserId = list.length ? list[list.length - 1].id + 1 : list.length + 1
          parsed.map((user) => list.push({ ...user, id: newUserId }))
          list.reverse()
          setUsers(list)
        }
        fileReader.readAsText(file)
      }
    },
    [setUsers, users]
  )

  const totalUsers = useMemo(() => users.length, [users])

  const parsedUsers = useMemo(() => {
    return users.map((user) => ({
      id: user.id,
      firstname: `${user.name.firstname.charAt(0).toUpperCase()}${user.name.firstname.slice(1)}`,
      lastname: `${user.name.lastname.charAt(0).toUpperCase()}${user.name.lastname.slice(1)}`,
      email: user.email,
      username: user.username,
      phone: user.phone,
    }))
  }, [users])

  return {
    users,
    totalUsers,
    fetchUsers,
    loadingUsers,
    parsedUsers,
    uploadUser,
  }
}

export default useUsers
