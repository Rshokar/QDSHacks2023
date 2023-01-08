const Page = ({ children }) => {

    return <div style={style.container}>
        {children}
    </div>
}

const style = {
    container: {
        display: 'flex',
        flex: '1'
    }
}

export default Page; 