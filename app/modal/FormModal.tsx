
import Button from '@mui/material/Button'
import DialogTitle from "@mui/material/DialogTitle"
import Dialog from "@mui/material/Dialog"
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import IconButton from "@mui/material/IconButton"
import { IoMdClose } from 'react-icons/io'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  useField,
} from 'formik';

const SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbxNj0DUXE8gypeYCoFrqJSIUWZEOdh70O5vnV3SneXJzXksoH7yphF4A2bPoOKzBsPY/exec'

interface Props {
  firstName: string,
  lastName: string,
  email: string,
  subject: string
}

export default function FormModal() {
  const initialValues: Props = { firstName: '', lastName: '', email: '', subject: '' }
  const [openDialog, handleDisplay] = useState(false)
  const handleClose = () => {
    handleDisplay(false)
  }
  const openDialogBox = () => {
    handleDisplay(true)
  }
  const MyTextArea = (props: any) => {
    const [field, meta] = useField(props)
    return (
        <>
            <textarea className="text-area" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    )
  }
  return (
    <>
      <button onClick={openDialogBox} aria-label="email">
        <MdEmail/>
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle>
          Let&apos;s Connect
          <IconButton
            style={{ position: "absolute", top: "0", right: "0" }}
            onClick={handleClose}
          >
            <IoMdClose />
          </IconButton>
        </DialogTitle>
        <Formik
         initialValues={initialValues}
         onSubmit={(values, actions) => {
          let formData = new FormData()

          formData.append('firstName', values.firstName)
          formData.append('lastName', values.lastName)
          formData.append('email', values.email)
          formData.append('subject', values.subject)

          fetch(SUBMIT_URL, {method: 'POST', body: formData})
          .then(response => {
            if (response.status === 200) {
              actions.setStatus({message: 'Thank you for submitting a request!'})
            }
          })
          .catch(error => console.error('Error!', error.message))
          actions.setSubmitting(false)
          actions.resetForm()
          handleDisplay(false)
         }}
       >
        <Form className="px-4 pb-4 flex flex-col gap-3">
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" className="p-2 border border-gray-300 rounded-md min-w-full focus:ring-teal-500" name="firstName" placeholder="First Name" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" className="p-2 border border-gray-300 rounded-md min-w-full focus:ring-teal-500" name="lastName" placeholder="Last Name" />

          <label htmlFor="firstName">Email</label>
          <Field
            id="email"
            className="py-3 px-2 border border-gray-300 rounded-md min-w-full focus:ring-teal-500"
            name="email"
            type="email"
            placeholder="Email" />

          <label htmlFor="subject">Subject</label>
          <MyTextArea
            id="subject"
            className="py-3 px-2 border border-gray-300 rounded-md min-w-full focus:ring-teal-500"
            name="subject"
            placeholder="Let me know more about your plans..."
            style={{minHeight: "250px"}}
          />

          <button className='custom bg-teal-500 text-slate-50 border border-teal-500 hover:bg-white hover:text-teal-500 hover:border-teal-500! py-2 px-5 rounded-md cursor-pointer' type="submit">Submit</button>
        </Form>
        </Formik>
      </Dialog>
    </>
  )
}