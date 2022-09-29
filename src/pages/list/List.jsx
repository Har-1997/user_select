import "./list.css";
import ListItem from "../../components/listItem/ListItem";
import Pagination from "../../components/pagination/Pagination";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";


const List = ({users, allInfoUser, currentPage, usersPerPage, paginate, loading}) => {

    let usersListArr = <h2>Loading ...</h2>;
    if (users !== undefined && loading === false) {
        usersListArr = users.map((user, i) => {
            return (
                <ListItem  key={i} user={user} allInfoUser={allInfoUser} />
            )
        })
    }

    return (
        <div className="list">
            <Header />
            <div className="listItemsDiv">
                {usersListArr}
                <Pagination currentPage={currentPage} totoalUsers={usersPerPage} paginate={paginate} />
            </div>
            <Footer />
        </div>
    )
}

export default List


