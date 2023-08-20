

export const Searchbar = ({onSubmitHandler}) => {
    return (
        <header className="searchbar">
            <form className="form" onSubmit = {onSubmitHandler}>
                <button type="submit" className="button">
                 <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    name='query'
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}