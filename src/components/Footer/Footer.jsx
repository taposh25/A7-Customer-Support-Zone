import React from 'react'
import TwiterImg from '../../assets/twiter.png'
import LinkedInImg from '../../assets/in.png'
import FacebookImg from '../../assets/fb.png'
import EmailImg from '../../assets/email.png'


const Footer = () => {
  return (
    

    // Details Info section

    // <div className='mt-10 max-w-[1200px] mx-auto bg-black'>
    //  <div className='flex justify-between '>
    //    <div className='pl-5 pt-5'>
    //     <h1 className='font-bold text-xl text-white pb-3'>CS — Ticket System</h1>
    //  <p className='text-[#A1A1AA]'>A Customer Support Ticket System <br />manages, tracks, and resolves user issues <br /> efficiently by organizing tickets,<br /> prioritizing tasks, and providing status <br /> updates for seamless communication between <br /> customers and support teams.</p>
    //   </div>
    //   <div className='gap-3 pt-5 '>
    //     <h4 className='text-white pb-3'>Company</h4>
    //   <div className='space-y-3'>
    //       <p className='text-[#A1A1AA]'>About Us</p>
    //     <p className='text-[#A1A1AA]'>Our Mission</p>
    //     <p className='text-[#A1A1AA]'>Contact Saled</p>
    //   </div>
    //   </div>

    //   <div className='gap-3 pt-5'>
    //     <h4 className='text-white pb-3'>Services</h4>
    //    <div  className='space-y-3'>
    //      <p className='text-[#A1A1AA]'> Products & Services</p>
    //     <p className='text-[#A1A1AA]'>Customer Stories</p>
    //     <p className='text-[#A1A1AA]'>Download Apps</p>
    //    </div>
    //   </div>

    //   <div className='gap-3 pt-5'>
    //     <h4 className='text-white pb-3'>Information</h4>
    //     <div className='space-y-3'>
    //       <p className='text-[#A1A1AA]'> Privacy Policy</p>
    //     <p className='text-[#A1A1AA]'>Terms & Conditions</p>
    //     <p className='text-[#A1A1AA]'>Join Us</p>
    //     </div>
    //   </div>

       
    //   <div className='gap-3 pt-5 pr-5'>

    //    <div className='flex gap-2'>
    //      <img className='w-[20px] h-[20px]' src={TwiterImg} alt="" />
    //     <h4 className='text-white pb-3'>Social Links</h4>
    //    </div>
        
    //     <div  className='flex gap-2 p-2'>
    //       <img className='w-[20px] h-[20px]' src={LinkedInImg} alt="" />
    //     <h4 className='text-[#A1A1AA]'> @CS — Ticket System</h4>

    //     </div>
    //      <div  className='flex gap-2 p-2'>
    //       <img className='w-[20px] h-[20px]' src={FacebookImg} alt="" />
    //        <h4 className='text-[#A1A1AA]'>@CS — Ticket System</h4>
    //      </div>
    //      <div  className='flex gap-2 p-2'>
    //       <img className='w-[20px] h-[20px]' src={EmailImg} alt="" />
    //        <h4 className='text-[#A1A1AA]'>support@cst.com</h4>
    //      </div>
      
    //   </div>

    //  </div>
     


    //  <div className='w-[1150px] mx-auto border-b-2 mt-10'>

    //  </div>
    //   <footer className="footer footer-center p-4  bg-black text-gray-500  ">
    //   <p>© 2025 Customer Support System. All rights reserved.</p>
    // </footer>
    // </div>


    <div className="mt-10 max-w-[1200px] mx-auto bg-black px-5 py-8">

  
  <div className="flex flex-wrap justify-between gap-8">

   
    <div className="flex-1 min-w-[250px]">
      <h1 className="font-bold text-xl text-white pb-3">CS — Ticket System</h1>
      <p className="text-[#A1A1AA] text-sm leading-relaxed">
        A Customer Support Ticket System <br />
        manages, tracks, and resolves user issues 
        efficiently by organizing <br /> tickets, 
        prioritizing tasks, and providing status 
        updates for seamless communication between <br />
        customers and support teams.
      </p>
    </div>

  
    <div className="flex-1 min-w-[150px]">
      <h4 className="text-white pb-3">Company</h4>
      <div className="space-y-2 text-[#A1A1AA] text-sm">
        <p>About Us</p>
        <p>Our Mission</p>
        <p>Contact Sales</p>
      </div>
    </div>


    <div className="flex-1 min-w-[150px]">
      <h4 className="text-white pb-3">Services</h4>
      <div className="space-y-2 text-[#A1A1AA] text-sm">
        <p>Products & Services</p>
        <p>Customer Stories</p>
        <p>Download Apps</p>
      </div>
    </div>

   
    <div className="flex-1 min-w-[150px]">
      <h4 className="text-white pb-3">Information</h4>
      <div className="space-y-2 text-[#A1A1AA] text-sm">
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Join Us</p>
      </div>
    </div>

   
    <div className="flex-1 min-w-[200px]">
      <div className="flex items-center gap-2 pb-3">
        <img className="w-5 h-5" src={TwiterImg} alt="Twitter" />
        <h4 className="text-white">Social Links</h4>
      </div>
      <div className="flex items-center gap-2 p-1">
        <img className="w-5 h-5" src={LinkedInImg} alt="LinkedIn" />
        <h4 className="text-[#A1A1AA]">@CS — Ticket System</h4>
      </div>
      <div className="flex items-center gap-2 p-1">
        <img className="w-5 h-5" src={FacebookImg} alt="Facebook" />
        <h4 className="text-[#A1A1AA]">@CS — Ticket System</h4>
      </div>
      <div className="flex items-center gap-2 p-1">
        <img className="w-5 h-5" src={EmailImg} alt="Email" />
        <h4 className="text-[#A1A1AA]">support@cst.com</h4>
      </div>
    </div>

  </div>


  <div className="border-b-2 mt-10"></div>


  <footer className="footer footer-center p-4 bg-black text-gray-500 mt-4">
    <p>© 2025 Customer Support System. All rights reserved.</p>
  </footer>
</div>



   
  )
}

export default Footer
