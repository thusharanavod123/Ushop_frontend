import style from '../styles.module.css';

export default function OTP() {
    return (
        <>
            <form>
                <div className="flex flex-col items-center">
                    <div className="mb-4 w-full">
                        <p className={style.otp_label + " text-gray-700 mb-2 text-2xl"}>
                            Enter your mobile number.
                        </p>
                        <div className={ style.phone_input+' flex'}>
                        <input type="text" disabled className={style.country_code_w+' border-0 text-right text-gray-700 border-b-2 text-xl'} value='+94'/>
                        <input type="text" maxLength={9} id="phone-no" placeholder="77*******" className="text-gray-700 px-4 py-2 rounded-0 border-0 border-b-2 border-gray-300 focus-visible:border-0 focus-visible:border-b-2 focus-visible:border-b-gray-900 focus-visible:outline-none w-full text-xl"/>
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