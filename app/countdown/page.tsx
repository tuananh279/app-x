import { Button } from '@/components/ui/button';
import CountdownBanner from './CountdownBanner';
import MyCountdown from './MyCountdown';
import DialogCreateCountdown from './components/DialogCreateCountdown';

const CountDown = () => {

    return (
        <div className="pb-10">
            <CountdownBanner />
            <MyCountdown />
            <div className='container mx-auto px-10 mt-5'>
                <div className='flex items-start bg-background-main h-[300px] flex-col justify-center px-5 rounded-xl'>
                    <h1 className='text-text-main font-semibold text-5xl'>Countdown timer</h1>
                    <h2 className='text-text-main text-3xl py-5'>Pick a template, customize it online, and make it yours</h2>
                    <div className='flex gap-x-5'>
                        <DialogCreateCountdown />
                        <Button variant={'secondary'}>Find out more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountDown