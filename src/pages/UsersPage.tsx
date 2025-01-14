import UsersComponent from "../components/UsersComponent.tsx";
import PaginationComponent from "../pagination/PaginationComponent.tsx";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};

export default UsersPage;