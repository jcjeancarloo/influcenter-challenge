import { DashboardContext } from '@contexts/dashboard-context'
import usersList from '@data/users-list.json'
import { User } from '@shared/types'
import { useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'

const useUsers = () => {
  const { users, setUsers } = useContext(DashboardContext)
  const { t } = useTranslation()
  const fetchUsers = useCallback(async () => {
    setTimeout(() => {
      setUsers(usersList)
    }, 100)
  }, [setUsers])

  const uploadUser = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target?.files?.[0]
      const fileReader = new FileReader()
      if (file) {
        fileReader.onload = function (event: any) {
          const data = event.target.result
          const list: User[] = [...users]
          const parsed: User[] = JSON.parse(data)
          if (!parsed[0].username)
            return toast.error(`${t('common.invalidFile')}`, { theme: 'colored' })
          parsed.map((user) => list.push({ ...user, id: list[list.length - 1].id + 1 }))
          setUsers(list)
          toast.success(`${t('common.successItem')}`, { theme: 'colored' })
        }
        fileReader.readAsText(file)
      }
    },
    [setUsers, t, users]
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
    parsedUsers,
    uploadUser,
  }
}

export default useUsers
