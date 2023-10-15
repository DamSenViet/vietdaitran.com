import ErrorPage from '@/components/pages/ErrorPage'
import DefaultLayout from '@/layout/DefaultLayout'
import withDefaultProps from '@/utils/withDefaultProps'

export default function NotFound() {
  return <ErrorPage statusCode={404} />
}

NotFound.layout = withDefaultProps(DefaultLayout, { omitFooter: true })
