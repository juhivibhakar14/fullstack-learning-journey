function EmployeeCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Role: {props.role}</p>
            <p>Address: {props.address}</p>
        </div>
    );
}

export default EmployeeCard;