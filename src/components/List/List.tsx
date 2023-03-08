interface ListObj {
    children? : React.ReactNode;
}

const List = ({children} : ListObj) => {
    return(
        <div className="list">
            <div className="list-content">
                {children}
            </div>
            <div className="separator"></div>
        </div>
    )
}

export default List;