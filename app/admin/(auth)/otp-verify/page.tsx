import Link from 'next/link';
import style from '../styles.module.css';

const phoneNo = '772669068';

export default function OTP() {
    return (
        <>
            <form>
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <p className={style.otp_label + " text-gray-700 mb-2 text-2xl"}>
                            Please enter the 5-Digit code provided via sms
                        </p>
                        <div className="flex text-gray-900 justify-center gap-2 items-center">
                            <p className='font-semibold text-lg'>{phoneNo}</p>
                            <Link className='underline text-blue-500 text-sm font-semibold' href='/admin/otp'>Change</Link>
                        </div>
                        <input type="text" maxLength={4} id="phone-no" placeholder="XXXX" className="text-center text-gray-700 px-4 py-2 rounded-0 border-0 border-b-2 border-gray-300 focus-visible:border-0 focus-visible:border-b-2 focus-visible:border-b-gray-900 focus-visible:outline-none w-full text-xl" />
                        <p className={style.otp_label + " text-gray-700 mb-2 text-xs mt-3"}>
                            Didn’t get the code?
                        </p>
                        <div className="flex justify-center gap-1 font-semibold">
                            <button className='text-gray-900 text-xs border-0'>Try again</button>
                            <p className='text-gray-900 text-xs'> in 01:00</p>
                        </div>
                    </div>
                    <button type="submit"
                        className="items-center px-4 py-2 text-white font-bold bg-custom-green">
                        Confirm
                    </button>
                </div>
            </form>
        </>

    )
}