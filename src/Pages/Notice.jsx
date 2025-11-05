import React from 'react'

const notices =[
 {
    title: "Annual Report 2025", // fixed  title
    link:"#",
    date:"2025-10-16", // original date
    type:"Formal", // fixed unique type
    fileType:"pdf", // fixed realistic file type
    uploadedBy:"Admin"
  },
  {
    title: "Community Health Program Update", // fixed title
    link:"#",
    date:"2025-11-05", // 20 days gap
    type:"Academic", // unique type
    fileType:"doc", // fixed new type
    uploadedBy:"Program Manager"
  },
  {
    title: "Volunteer Training Schedule", 
    link:"#",
    date:"2025-11-20", // 15 days gap
    type:"Formal", 
    fileType:"ppt", // fixed new type
    uploadedBy:"HR Department"
  },
  {
    title: "NGO Annual Fundraising Event", 
    link:"#",
    date:"2025-12-05", // 15 days gap
    type:"Event", 
    fileType:"pptx", // fixed new type
    uploadedBy:"Admin"
  },
  {
    title: "Project Proposal Submission Guidelines", 
    link:"#",
    date:"2025-12-25", // 20 days gap
    type:"Academic", 
    fileType:"xls", // fixed new type
    uploadedBy:"Project Coordinator"
  },
  {
    title: "Environmental Awareness Campaign Summary", 
    link:"#",
    date:"2026-01-10", // 16 days gap
    type:"Report", 
    fileType:"xlsx", // fixed new type
    uploadedBy:"Admin"
  },
  {
    title: "Board Meeting Minutes", 
    link:"#",
    date:"2026-01-30", // 20 days gap
    type:"Formal", 
    fileType:"odt", // fixed new type
    uploadedBy:"Secretary"
  },
  {
    title: "Donation Drive Overview", 
    link:"#",
    date:"2026-02-15", // 16 days gap
    type:"Report", 
    fileType:"zip", // fixed new type
    uploadedBy:"Admin"
  },
  {
    title: "Annual Staff Newsletter", 
    link:"#",
    date:"2026-03-01", // 14 days gap
    type:"Newsletter", 
    fileType:"txt", // fixed new type
    uploadedBy:"Communications Team"
  },
]

const Notice = () => {
  return (
    <div className='overflow-x-auto p-4 max-w-6xl mx-auto min-h-screen'>
       {/* Intro paragraph to increase page height and provide context */}
      <p className='mb-6 text-gray-700 text-[16px] leading-relaxed'>
        Welcome to the official notices page of our organization. Here you can find all the latest updates, 
        reports, event announcements, and project-related documents. Our goal is to keep all stakeholders, 
        volunteers, and partners informed about our activities and progress. Please refer to the notices 
        below for detailed information on upcoming events, reports, and important guidelines. 
      </p>

      <p className='mb-6 text-gray-700 text-[16px] leading-relaxed'>
        The documents include formal reports, newsletters, event schedules, and proposals in various formats 
        such as PDF, DOC, PPT, XLS, and more. Make sure to check the publish dates and the notice type 
        to find relevant information quickly. We encourage everyone to stay engaged and review these notices regularly 
        to stay up to date with our ongoing projects and initiatives.
      </p>
      <table className='min-w-full border border-gray-200 divide-y divide-gray-200'>
        <thead className='bg-gray-100 '>
          <tr>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>S.N</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Notice Title</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Publish Date</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Notice Type</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>File Type</th>
            <th className='px-4 py-2 text-left text-[16px] font-semibold text-gray-700'>Uploaded By</th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {notices.map((notice,index)=>(
            <tr key={index}>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{index+1}.</td>
              <td className='px-4 py-2 text-[16px] text-blue-600 underline hover:text-blue-800'>
                <a href={notice.link} target='_blank'>{notice.title}</a>
              </td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.date}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.type}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.fileType}</td>
              <td className='px-4 py-2 text-[16px] text-gray-600'>{notice.uploadedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Notice
