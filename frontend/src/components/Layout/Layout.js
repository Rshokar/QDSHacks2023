
const Layout = ({ children }) => {
    return <div style={style.container}>
        {children}
    </div>
}


const style = {
    container: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
    }
}

export default Layout;