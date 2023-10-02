import ErrorPage from '@/components/pages/ErrorPage'

export default function InternalServerError() {
  return <ErrorPage statusCode={500} />
}
