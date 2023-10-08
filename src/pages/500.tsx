import ErrorPage from '@/components/pages/ErrorPage'
import DefaultLayout from '@/layout/DefaultLayout'
import withDefaultProps from '@/utils/withDefaultProps'

export default function InternalServerError() {
  return <ErrorPage statusCode={500} />
}

InternalServerError.layout = withDefaultProps(DefaultLayout, {
  omitFooter: true,
})
