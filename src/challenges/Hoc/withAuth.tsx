const withAuth = (Component: any) => {
    return function ProtectedComponent(props: any) {
        const isLoggedIn = true;
        const details = {
            id: 1,
            name: 'jaichandar',
            age: 24,
            isLoggedIn,
        }

        if (isLoggedIn) {
            return <Component {...props} { ...details } />
        } else {
            return <p>Please Login...</p>
        }
    }
}

export default withAuth;