import { Wrap, Form, Button, Input } from "./Searchbar.styled";
import { FcSearch } from 'react-icons/fc'; 
import PropTypes from 'prop-types';

export const Searchbar = ({onSubmitHandler}) => {
    return (
        <Wrap >
            <Form  onSubmit = {onSubmitHandler}>
                <Button type="submit" >
                    <FcSearch size={ 26}/>
                </Button>

                <Input
                    type="text"
                    name='query'
                    placeholder="Search images and photos"
                />
            </Form>
        </Wrap>
    )
}

Searchbar.propTypes = {
    onSubmitHandler: PropTypes.func,

}