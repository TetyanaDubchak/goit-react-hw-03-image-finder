import { Circles } from 'react-loader-spinner';
import { Wrap } from "./Loader.styled";

<Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

export const Loader = () => {
    return (
        <Wrap>
            <Circles/>
        </Wrap>
    )
}
