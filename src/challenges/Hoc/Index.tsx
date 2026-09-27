import withAuth from './withAuth';

const Dashboard = (props: any) => {
    console.log(props, "<-- props <===");
    return (
        <div>
            <p>Dashboard</p>
        </div>
    )
}

export default withAuth(Dashboard);