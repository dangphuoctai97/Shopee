/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

// type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }

// export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Bạn chưa nhập email!'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Email không chính xác!'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Email phải có độ dài từ 5 - 160 kí tự!'
//     },
//     minLength: {
//       value: 5,
//       message: 'Email phải có độ dài từ 5 - 160 kí tự!'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Bạn chưa nhập password!'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Email phải có độ dài từ 6 - 160 kí tự!'
//     },
//     minLength: {
//       value: 6,
//       message: 'Email phải có độ dài từ 6 - 160 kí tự!'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Bạn chưa nhập lại password!'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Mật khẩu nhập lại không chính xác'
//         : undefined
//   }
// })

export const schema = yup.object({
  email: yup.string().required('Bạn chưa nhập email!').email('Email không chính xác!').min(5).max(160),
  password: yup
    .string()
    .required('Bạn chưa nhập mật khẩu')
    .min(6, 'Mật khẩu phải có ít nhất 6 - 160 kí tự!')
    .max(160, 'Mật khẩu phải có ít nhất 6 - 160 kí tự!'),
  confirm_password: yup
    .string()
    .required('Bạn chưa nhập lại mật khẩu')
    .oneOf([yup.ref('password')], 'Mật khẩu nhập lại không chính xác!')
})

export type Schema = yup.InferType<typeof schema>
