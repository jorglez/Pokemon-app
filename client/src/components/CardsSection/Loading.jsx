import { LoadingAnimation, LoadingContainer } from "../styles/LoadingCss";



const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingAnimation src="/magikarp.gif" alt="" />
    </LoadingContainer>
  );
}
 
export default Loading;