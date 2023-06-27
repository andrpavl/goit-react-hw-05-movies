import { FallingLines } from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styled';

function Loader() {
  return (
    <LoaderStyled>
      <FallingLines
        color="#258ab3"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </LoaderStyled>
  );
}

export default Loader;
