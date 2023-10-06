import { useEffect } from "react"
import { useForm } from "react-hook-form"

const FormUser = ({createUser, infoUptade, updateUser, setInfoUptade}) => {

   const { handleSubmit, register, reset} = useForm()

   useEffect(() => {
    reset(infoUptade)
   },[infoUptade])

   const submit = data => {
    if (infoUptade) {
      //update
      updateUser('/users', infoUptade.id, data)
      setInfoUptade()
    } else {
      // Create
      createUser('/users', data)
    }
     reset({
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
     })
   }

    return (
        <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input {...register('email')} id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" id="password" />
        </div>
        <div>
          <label htmlFor="first_name">First name</label>
          <input {...register('first_name')} type="text" id="first_name" />
        </div>
        <div>
          <label htmlFor="last_name">Last name</label>
          <input {...register('last_name')}  type="text" id="last_name" />
        </div>
        <div>
          <label htmlFor="birthday">Birthday</label>
          <input {...register('birthday')}  type="date" id="birthday" />
        </div>
        <button>{ infoUptade ? 'uptade' : 'Create'}</button>
      </form>
    )
}

export default FormUser