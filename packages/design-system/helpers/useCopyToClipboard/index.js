import { number, oneOfType, string } from "prop-types"
import { useState, useEffect } from "react"

const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = (toCopy) => {
    navigator.clipboard.writeText(toCopy)
    setIsCopied(true)
  }

  useEffect(() => {
    if (isCopied === true) {
      setTimeout(() => {
        setIsCopied(false)
      }, 5000)
    }
  }, [isCopied])

  return [isCopied, copyToClipboard]
}
useCopyToClipboard.propTypes = {
  text: oneOfType([string, number]),
}

export default useCopyToClipboard
