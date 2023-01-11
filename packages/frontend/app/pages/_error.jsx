import * as Sentry from "@sentry/nextjs"
import NextErrorComponent from "next/error"

const CustomErrorComponent = (props) => {
  Sentry.captureUnderscoreErrorException(props)

  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <NextErrorComponent statusCode={props.statusCode} />
}

CustomErrorComponent.getInitialProps = async (contextData) => {
  await Sentry.captureUnderscoreErrorException(contextData)

  return NextErrorComponent.getInitialProps(contextData)
}

export default CustomErrorComponent
