'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ValidationError, useForm } from "@formspree/react";


export default function Contact() {
  const [state, handleSubmit] = useForm("mleqjbdd");
  if (state.succeeded) {
      return (
      <div className="flex flex-col lg:flex-row gap-8 px-4 py-8 container">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>

        <div className="w-full h-full text-3xl flex items-center justify-center font-bold text-center">
          <h1 className="text-center w-full text-amber-600">Thank you for Contacting us! <br />
        We will get back to you soon.</h1>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <p className="text-gray-500 dark:text-gray-400">1234 Street Name, City, State, 56789</p>
        <p className="text-gray-500 dark:text-gray-400">Phone: (123) 456-7890</p>
        <p className="text-gray-500 dark:text-gray-400">Email: info@company.com</p>
        <div className="w-full h-64 rounded-md overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0517788611123!2d85.4105452753237!3d23.35013857894549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e322f9f9b353%3A0x7d7b40feb951ae94!2sSarala%20Birla%20University!5e0!3m2!1sen!2sin!4v1706951239983!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>);
  }
  return (
    (
    <div className="flex flex-col lg:flex-row gap-8 px-4 py-8 container">
      <div className="w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        {/* <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
          </div>
          <Button>Submit</Button>
        </div> */}
        <form className="flex flex-col items-start justify-center rounded-lg border-solid border-2 border-gray-500" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full p-5 items-start justify-center "  >
        <label htmlFor="name">
        Name 
      </label>
      <input 
      className="w-full p-2 rounded-lg border-solid border-2 border-gray-500"
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      </div>
      <div className="flex flex-col w-full p-5 items-start justify-center" >
        <label htmlFor="email">
        Email Address
      </label>
      <input 
      className="w-full p-2 rounded-lg border-solid border-2 border-gray-500"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      <div className="flex flex-col w-full p-5 items-start justify-center" >
        <label htmlFor="Subject">
        Subject
      </label>
      <input 
      className="w-full p-2 rounded-lg border-solid border-2 border-gray-500"
        id="Subject"
        type="Subject" 
        name="Subject"
      />
      <ValidationError 
        prefix="Subject" 
        field="Subject"
        errors={state.errors}
      />
      </div>
      <div className="flex flex-col w-full p-5 items-start justify-center" >
      <label htmlFor="Message">
        Message
      </label>
        <textarea
        className="w-full rounded-lg border-solid border-2 border-gray-500"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className="flex w-full items-center justify-center" ><button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="submit" disabled={state.submitting}>
        Submit
      </button></div>
    </form>
      </div>
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <p className="text-gray-500 dark:text-gray-400">1234 Street Name, City, State, 56789</p>
        <a className="text-gray-500 dark:text-gray-400" href="tel:+919525521005">Phone: +91 9525521005</a>
        <a className="text-gray-500 dark:text-gray-400" href="mailus:aryamaninfotech@gmail.com">Email: aryamaninfotech@gmail.com</a>
        <div className="w-full h-[400px]  rounded-md overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.0517788611123!2d85.4105452753237!3d23.35013857894549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e322f9f9b353%3A0x7d7b40feb951ae94!2sSarala%20Birla%20University!5e0!3m2!1sen!2sin!4v1706951239983!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>)
  );
}



