const ContactForm = () => {
    return(
        <div className="mx-auto my-8 w-1/2 border-2 border-red-500 p-8">
            <h2 className="text-4xl my-4 font-bold text-red-500 text-center">WERE HERE TO HELP!</h2>
            <p className="text-center font-bold">Just fill out the form and we'll get back to you as soon as possible!</p>
            <form className="mx-auto" action="https://formsubmit.co/7d259b639cab8c82831776a55f11d5e1 " method="POST">
                <input name="Name" type="text" placeholder="Full Name" className="block mx-auto my-8 w-full font-bold h-3/4 border-0 border-b-4 border-red-300 text-xl pl-4 py-1 text-m focus:outline-none" />
                <input name="Email" type="email" placeholder="Email" className="block mx-auto my-8 w-full font-bold h-3/4 border-0 border-b-4 border-red-300 text-xl pl-4 py-1 text-m focus:outline-none" />
                <input type="hidden" name="_next" value="/" />
                <textarea name="Body" rows="5" placeholder="Message" className="block mx-auto my-8 w-full h-3/4 border-0 border-b-4 border-red-300 text-lg text-gray-600 pl-4 py-1 text-m focus:outline-none" />
                <button type="submit" className="mx-auto mt-8 w-full border-4 border-red-500 p-4 font-bold text-2xl hover:bg-red-500 hover:text-white">SEND MESSAGE</button>
            </form>
        </div>
    );
}

export default ContactForm;