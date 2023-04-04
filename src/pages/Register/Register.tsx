import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Input from 'src/components/Input'
import { schema, Schema } from 'src/utils/rules'

type FormData = Schema

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    // console.log(data)
  })

  return (
    <div className='bg-orange'>
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate={true}>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                name='email'
                register={register}
                className='mt-8'
                placeholder='Email'
                errorMessage={errors.email?.message}
                autoComplete='on'
              />
              <Input
                type='password'
                name='password'
                register={register}
                className='mt-2'
                placeholder='Mật khẩu'
                errorMessage={errors.password?.message}
                autoComplete='on'
              />
              <Input
                type='password'
                name='confirm_password'
                register={register}
                className='mt-2'
                placeholder='Nhập lại mật khẩu'
                errorMessage={errors.confirm_password?.message}
                autoComplete='on'
              />
              <div className='mt-2'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center text-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link to='/login' className='ml-1 text-red-400'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
