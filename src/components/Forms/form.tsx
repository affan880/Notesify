import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

type Props = {
  children: any,
  initialValues: any,
  onSubmit: (values: any) => any,
  validationSchema: any,
}

const Form = ({ children, initialValues, onSubmit, validationSchema }: Props) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {() => (
        <>
          {children}
        </>
      )}
    </Formik>
  )
}

export default Form

const styles = StyleSheet.create({})