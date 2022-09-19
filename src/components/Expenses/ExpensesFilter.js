import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const filterChangeHandler = event => {
    }
    return (
        <div>
            <span>Filter by year</span>
            <select value={props.selected} onChange={(event) => props.onFilterChange(event.target.value)} >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option  value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}

export default ExpensesFilter;