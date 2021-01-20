import Loader from "react-loader-spinner"
import { StyledLoading } from "./StyledLoading"

const Loading = () => {
  return (
    <StyledLoading>
      <Loader type="ThreeDots" color="black" height={50} width={50} />
    </StyledLoading>
  )
}

export default Loading
