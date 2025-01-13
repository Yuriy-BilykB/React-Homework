import {useSearchParams} from "react-router-dom";

const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({id: '1'})
    return (
        <div>
            <button onClick={() => {
                const id = query.get('id')
                if (id) {
                    let currentId = +id
                    setQuery({id: (--currentId).toString()})
                }
                console.log(id)
            }}>Prev
            </button>
            <button onClick={() => {
                const id = query.get('id')
                if (id) {
                    let currentId = +id
                    setQuery({id: (++currentId).toString()})
                }
                console.log(id)
            }}>Next
            </button>
        </div>
    );
};
export default PaginationComponent;