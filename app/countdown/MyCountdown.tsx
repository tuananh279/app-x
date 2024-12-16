import CountdownItem from './components/CountdownItem'

const MyCountdown = () => {
    return (
        <div className='container mx-auto mt-5 px-10'>
            <h1 className='text-xl font-semibold text-text-main py-3'>Popular countdown</h1>
            <div className='flex gap-x-5'>
                <CountdownItem />
            </div>
        </div>
    )
}

export default MyCountdown