import { ButtonLoad } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
    return (
        <ButtonLoad onClick={loadMore} type = 'submit'>Load more</ButtonLoad>
        
    )
}

Button.propTypes = {
    loadMore: PropTypes.func,

}