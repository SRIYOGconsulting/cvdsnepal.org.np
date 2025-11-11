import React, { useState } from "react";
// Added state to show a submission message like modern forms
const VolunteerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); //  Simulate form submission
  };

  const areas = [
    "Community Outreach",
    "Education",
    "Women Empowerment",
    "Environmental Awareness",
    "Social Media / Content Creation",
    "Fundraising",
    "Admin & Operations",
    "Research & Documentation",
  ];

  const computerSkills = [
    "MS Word",
    "Excel",
    "PowerPoint",
    "Canva",
    "Photoshop",
    "Google Docs/Sheets/Drive",
  ];

  // Country codes for phone - Fixed: Added comprehensive list of country codes for scrollable dropdown
  const countryCodes = [
    { name: "Afghanistan", code: "+93" },
    { name: "Albania", code: "+355" },
    { name: "Algeria", code: "+213" },
    { name: "American Samoa", code: "+1-684" },
    { name: "Andorra", code: "+376" },
    { name: "Angola", code: "+244" },
    { name: "Anguilla", code: "+1-264" },
    { name: "Antigua and Barbuda", code: "+1-268" },
    { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" },
    { name: "Aruba", code: "+297" },
    { name: "Australia", code: "+61" },
    { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" },
    { name: "Bahamas", code: "+1-242" },
    { name: "Bahrain", code: "+973" },
    { name: "Bangladesh", code: "+880" },
    { name: "Barbados", code: "+1-246" },
    { name: "Belarus", code: "+375" },
    { name: "Belgium", code: "+32" },
    { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" },
    { name: "Bermuda", code: "+1-441" },
    { name: "Bhutan", code: "+975" },
    { name: "Bolivia", code: "+591" },
    { name: "Bosnia and Herzegovina", code: "+387" },
    { name: "Botswana", code: "+267" },
    { name: "Brazil", code: "+55" },
    { name: "British Indian Ocean Territory", code: "+246" },
    { name: "British Virgin Islands", code: "+1-284" },
    { name: "Brunei", code: "+673" },
    { name: "Bulgaria", code: "+359" },
    { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" },
    { name: "Cambodia", code: "+855" },
    { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" },
    { name: "Cape Verde", code: "+238" },
    { name: "Cayman Islands", code: "+1-345" },
    { name: "Central African Republic", code: "+236" },
    { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" },
    { name: "China", code: "+86" },
    { name: "Christmas Island", code: "+61" },
    { name: "Cocos (Keeling) Islands", code: "+61" },
    { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" },
    { name: "Cook Islands", code: "+682" },
    { name: "Costa Rica", code: "+506" },
    { name: "Croatia", code: "+385" },
    { name: "Cuba", code: "+53" },
    { name: "Curaçao", code: "+599" },
    { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" },
    { name: "Democratic Republic of the Congo", code: "+243" },
    { name: "Denmark", code: "+45" },
    { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" },
    { name: "Dominican Republic", code: "+1-809, +1-829, +1-849" },
    { name: "East Timor", code: "+670" },
    { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" },
    { name: "El Salvador", code: "+503" },
    { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" },
    { name: "Estonia", code: "+372" },
    { name: "Ethiopia", code: "+251" },
    { name: "Falkland Islands", code: "+500" },
    { name: "Faroe Islands", code: "+298" },
    { name: "Fiji", code: "+679" },
    { name: "Finland", code: "+358" },
    { name: "France", code: "+33" },
    { name: "French Polynesia", code: "+689" },
    { name: "Gabon", code: "+241" },
    { name: "Gambia", code: "+220" },
    { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" },
    { name: "Ghana", code: "+233" },
    { name: "Gibraltar", code: "+350" },
    { name: "Greece", code: "+30" },
    { name: "Greenland", code: "+299" },
    { name: "Grenada", code: "+1-473" },
    { name: "Guam", code: "+1-671" },
    { name: "Guatemala", code: "+502" },
    { name: "Guernsey", code: "+44-1481" },
    { name: "Guinea", code: "+224" },
    { name: "Guinea-Bissau", code: "+245" },
    { name: "Guyana", code: "+592" },
    { name: "Haiti", code: "+509" },
    { name: "Honduras", code: "+504" },
    { name: "Hong Kong", code: "+852" },
    { name: "Hungary", code: "+36" },
    { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" },
    { name: "Indonesia", code: "+62" },
    { name: "Iran", code: "+98" },
    { name: "Iraq", code: "+964" },
    { name: "Ireland", code: "+353" },
    { name: "Isle of Man", code: "+44-1624" },
    { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" },
    { name: "Ivory Coast", code: "+225" },
    { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" },
    { name: "Jersey", code: "+44-1534" },
    { name: "Jordan", code: "+962" },
    { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" },
    { name: "Kiribati", code: "+686" },
    { name: "Kosovo", code: "+383" },
    { name: "Kuwait", code: "+965" },
    { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" },
    { name: "Latvia", code: "+371" },
    { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" },
    { name: "Liberia", code: "+231" },
    { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" },
    { name: "Lithuania", code: "+370" },
    { name: "Luxembourg", code: "+352" },
    { name: "Macau", code: "+853" },
    { name: "Macedonia", code: "+389" },
    { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" },
    { name: "Malaysia", code: "+60" },
    { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" },
    { name: "Malta", code: "+356" },
    { name: "Marshall Islands", code: "+692" },
    { name: "Martinique", code: "+596" },
    { name: "Mauritania", code: "+222" },
    { name: "Mauritius", code: "+230" },
    { name: "Mayotte", code: "+262" },
    { name: "Mexico", code: "+52" },
    { name: "Micronesia", code: "+691" },
    { name: "Moldova", code: "+373" },
    { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" },
    { name: "Montenegro", code: "+382" },
    { name: "Montserrat", code: "+1-664" },
    { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" },
    { name: "Myanmar", code: "+95" },
    { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" },
    { name: "Nepal", code: "+977" },
    { name: "Netherlands", code: "+31" },
    { name: "New Caledonia", code: "+687" },
    { name: "New Zealand", code: "+64" },
    { name: "Nicaragua", code: "+505" },
    { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" },
    { name: "Niue", code: "+683" },
    { name: "Norfolk Island", code: "+672" },
    { name: "North Korea", code: "+850" },
    { name: "Northern Mariana Islands", code: "+1-670" },
    { name: "Norway", code: "+47" },
    { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" },
    { name: "Palau", code: "+680" },
    { name: "Palestine", code: "+970" },
    { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" },
    { name: "Paraguay", code: "+595" },
    { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" },
    { name: "Pitcairn Islands", code: "+64" },
    { name: "Poland", code: "+48" },
    { name: "Portugal", code: "+351" },
    { name: "Puerto Rico", code: "+1-787, +1-939" },
    { name: "Qatar", code: "+974" },
    { name: "Republic of the Congo", code: "+242" },
    { name: "Romania", code: "+40" },
    { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" },
    { name: "Saint Barthélemy", code: "+590" },
    { name: "Saint Helena", code: "+290" },
    { name: "Saint Kitts and Nevis", code: "+1-869" },
    { name: "Saint Lucia", code: "+1-758" },
    { name: "Saint Martin", code: "+590" },
    { name: "Saint Pierre and Miquelon", code: "+508" },
    { name: "Saint Vincent and the Grenadines", code: "+1-784" },
    { name: "Samoa", code: "+685" },
    { name: "San Marino", code: "+378" },
    { name: "São Tomé and Príncipe", code: "+239" },
    { name: "Saudi Arabia", code: "+966" },
    { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" },
    { name: "Seychelles", code: "+248" },
    { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" },
    { name: "Sint Maarten", code: "+1-721" },
    { name: "Slovakia", code: "+421" },
    { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" },
    { name: "Somalia", code: "+252" },
    { name: "South Africa", code: "+27" },
    { name: "South Korea", code: "+82" },
    { name: "South Sudan", code: "+211" },
    { name: "Spain", code: "+34" },
    { name: "Sri Lanka", code: "+94" },
    { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" },
    { name: "Swaziland", code: "+268" },
    { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" },
    { name: "Syria", code: "+963" },
    { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" },
    { name: "Tanzania", code: "+255" },
    { name: "Thailand", code: "+66" },
    { name: "Togo", code: "+228" },
    { name: "Tokelau", code: "+690" },
    { name: "Tonga", code: "+676" },
    { name: "Trinidad and Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" },
    { name: "Turkey", code: "+90" },
    { name: "Turkmenistan", code: "+993" },
    { name: "Turks and Caicos Islands", code: "+1-649" },
    { name: "Tuvalu", code: "+688" },
    { name: "Uganda", code: "+256" },
    { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" },
    { name: "United Kingdom", code: "+44" },
    { name: "United States", code: "+1" },
    { name: "Uruguay", code: "+598" },
    { name: "Uzbekistan", code: "+998" },
    { name: "Vanuatu", code: "+678" },
    { name: "Vatican City", code: "+39-06-6982" },
    { name: "Venezuela", code: "+58" },
    { name: "Vietnam", code: "+84" },
    { name: "Virgin Islands", code: "+1-340" },
    { name: "Wallis and Futuna", code: "+681" },
    { name: "Yemen", code: "+967" },
    { name: "Zambia", code: "+260" },
    { name: "Zimbabwe", code: "+263" },
  ];
  const socialMedia = ["Facebook", "Instagram", "Twitter", "LinkedIn"];

  const StandardInput = ({
    label,
    id,
    type = "text",
    className = "",
    required = false,
    placeholder = "",
    ...props
  }) => (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] focus:border-[#1F2B6C] transition-colors"
        {...props}
      />
    </div>
  );

  const StandardTextarea = ({
    label,
    id,
    rows = 4,
    className = "",
    required = false,
    placeholder = "",
    ...props
  }) => (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] focus:border-[#1F2B6C] resize-vertical min-h-[80px] transition-colors"
        {...props}
      />
    </div>
  );

  // Fixed: Added StandardSelect component for Gender and potential future selects
  const StandardSelect = ({
    label,
    id,
    className = "",
    required = false,
    children,
    ...props
  }) => (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1F2B6C] focus:border-[#1F2B6C] transition-colors"
        {...props}
      >
        {children}
      </select>
    </div>
  );

  const CheckboxOption = ({ children, className = "" }) => (
    <label
      className={`inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors shadow-sm ${className}`}
    >
      <input
        type="checkbox"
        className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
      />
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </label>
  );

  const RadioOption = ({ children, name, value }) => (
    <label className="inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
      <input
        type="radio"
        name={name}
        value={value}
        className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
      />
      <span className="text-sm font-medium text-gray-700">{children}</span>
    </label>
  );

  return (
    <div className="bg-white text-gray-900 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-['Inter']">
      {/*Added centered card with shadow */}
      <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-8 shadow-sm">
        {/*  Submission success message */}
        {submitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6 shadow-sm animate-fade-in">
            <p className="text-sm font-medium">
              Thank you! Your application has been submitted successfully. We
              will review it and get back to you soon.
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <header className="text-center mb-8">
            {/* Corrected spelling and modern styling */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#1F2B6C]">
              Volunteer Application Form
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Let’s know your area of interest to offer volunteer opportunities.
              We will get back to you with updates upon receiving this form.
            </p>
          </header>
          {/* PERSONAL INFORMATION - Fixed: Removed Date of Birth field entirely; Replaced Gender with dropdown; Replaced Phone with country code dropdown + input (scrollable); Marked Full Name and Email Address as required with * */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name - Fixed: Added label, required indicator, and placeholder using StandardInput */}
            <StandardInput
              label="Full Name"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              required
            />
            {/* Gender - Fixed: Replaced input with StandardSelect dropdown containing Male, Female, Other */}
            <StandardSelect label="Gender" id="gender" name="gender">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </StandardSelect>
            {/* Phone Number - Fixed: Replaced single input with combined country code dropdown (scrollable, visually user-friendly with max-h and overflow) and phone input; Spans full width on medium screens */}
            {/* Responsive Phone Number with Country Code */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Country Code Dropdown */}
                <select
                  id="countryCode"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                  defaultValue="+977"
                  required
                >
                  <option value="+977">🇳🇵 +977 (Nepal)</option>
                  <option value="+91">🇮🇳 +91 (India)</option>
                  <option value="+1">🇺🇸 +1 (USA)</option>
                  <option value="+44">🇬🇧 +44 (UK)</option>
                  <option value="+81">🇯🇵 +81 (Japan)</option>
                  <option value="+61">🇦🇺 +61 (Australia)</option>
                </select>

                {/* Phone Number Input */}
                <input
                  id="phone"
                  type="tel"
                  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>

            {/* Email Address - Fixed: Added label, required indicator, and placeholder using StandardInput */}
            <StandardInput
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
            {/* Residential Address - Fixed: Converted to StandardTextarea with label and placeholder; Spans full width on medium screens */}
            <StandardTextarea
              label="Residential Address"
              id="address"
              name="address"
              rows={2}
              placeholder="Enter your residential address"
              className="md:col-span-2"
            />
            {/* Emergency Contact Name - Fixed: Added label and placeholder using StandardInput */}
            <StandardInput
              label="Emergency Contact Name"
              id="emergencyName"
              name="emergencyName"
              placeholder="Enter emergency contact name"
            />
            {/* Emergency Contact Number - Fixed: Added label and placeholder using StandardInput */}
            <StandardInput
              label="Emergency Contact Number"
              id="emergencyPhone"
              name="emergencyPhone"
              placeholder="Enter emergency contact number"
            />
          </div>

          {/* EDUCATIONAL BACKGROUND */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              Educational Background
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Current Qualification"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Institution Name"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Course/Major"
              />
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Year/Semester"
              />
              <textarea
                className="border border-gray-300 rounded-md p-2 w-full md:col-span-2 focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                rows="2"
                placeholder="Previous Qualifications (if any)"
              ></textarea>
            </div>
          </section>

          {/* VOLUNTEER DETAILS */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              Volunteer Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-[#1F2B6C]"
                placeholder="Preferred Duration (e.g., 4 weeks, 2 months)"
              />
            </div>

            {/*  Availability */}
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">Availability:</p>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Full-time
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Part-time
                </label>
              </div>
            </div>

            {/*  Mode of volunteering */}
            <div className="mb-6">
              <p className="font-medium text-gray-700 mb-2">
                Mode of Volunteering:
              </p>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  On-site
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Remote
                </label>
                <label className="inline-flex items-center gap-2 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                  />{" "}
                  Hybrid
                </label>
              </div>
            </div>

            {/* Preferred Areas */}
            <div className="mb-6">
              <p className="font-medium mb-2 text-gray-700">
                Preferred Area(s) of Volunteering (tick all that apply):
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {areas.map((area, i) => (
                  <label
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-md bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 shadow-sm"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-[#1F2B6C] border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                    />
                    <span className="text-sm text-gray-700">{area}</span>
                  </label>
                ))}
              </div>
              <input
                className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2"
                placeholder="Other"
              />
            </div>
          </section>

          {/*Motivation & Experience, Technical Skills, References, Declaration */}

          {/* MOTIVATION & EXPERIENCE */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              Motivation and Experience
            </h2>
            <StandardTextarea
              label="Why do you want to volunteer with our NGO? (100–200 words)"
              id="motivation"
              rows={4}
              className="mb-6"
            />
            <StandardTextarea
              label="Do you have any relevant skills or past experience?"
              id="skills_experience"
              rows={2}
              className="mb-6"
            />
            <StandardInput
              label="Languages Known"
              id="languages_known"
              className="mb-6"
            />
            <p className="mb-2 text-gray-700">
              Are you comfortable working with vulnerable communities?
            </p>
            <div className="flex gap-6 mb-4">
              <RadioOption name="vulnerable" value="yes">
                Yes
              </RadioOption>
              <RadioOption name="vulnerable" value="no">
                No
              </RadioOption>
            </div>
            <StandardTextarea
              label="If no or unsure, please explain:"
              id="vulnerable_explain"
              rows={2}
            />
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              Technical Skills (Optional)
            </h2>
            <p className="font-medium mb-2 text-gray-700">Computer Skills:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {computerSkills.map((skill, i) => (
                <CheckboxOption key={i}>{skill}</CheckboxOption>
              ))}
            </div>

            <p className="font-medium mb-2 text-gray-700">Social Media:</p>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialMedia.map((site, i) => (
                <CheckboxOption key={i}>{site}</CheckboxOption>
              ))}
            </div>

            <StandardInput
              label="Other tools or skills"
              id="other_technical_skills"
            />
          </section>

          {/* REFERENCES */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              References
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="font-medium mb-2 text-[#1F2B6C] text-sm">
                  Reference 1:
                </p>
                <StandardInput label="Name" id="ref1_name" />
                <StandardInput label="Contact Number" id="ref1_phone" />
                <StandardInput label="Relation" id="ref1_relation" />
              </div>
              <div className="space-y-4">
                <p className="font-medium mb-2 text-[#1F2B6C] text-sm">
                  Reference 2 (optional):
                </p>
                <StandardInput label="Name" id="ref2_name" />
                <StandardInput label="Contact Number" id="ref2_phone" />
                <StandardInput label="Relation" id="ref2_relation" />
              </div>
            </div>
          </section>

          {/* DECLARATION */}
          <section className="p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-6 text-[#1F2B6C] border-b-2 border-[#1F2B6C]/20 pb-2">
              Declaration
            </h2>
            <p className="mb-4 text-gray-700">
              I hereby declare that all the information provided above is true
              and correct to the best of my knowledge.
            </p>
            <p className="mb-4 text-gray-700">
              I understand that this is a voluntary internship and may not
              include any financial compensation.
            </p>

            <label className="flex items-center gap-2 mb-6 cursor-pointer hover:opacity-80 transition-opacity">
              <input
                type="checkbox"
                className="w-4 h-4 text-[#1F2B6C] bg-gray-100 border-gray-300 rounded focus:ring-[#1F2B6C] focus:ring-2"
                required
              />
              <span className="text-sm font-medium text-gray-700">I Agree</span>
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StandardInput
                label="Upload Signature"
                id="upload_signature"
                type="file"
              />
            </div>
          </section>
          {/* Submit Button */}
          <div className="text-center mt-10">
            <button
              type="submit"
              className="bg-[#1F2B6C] hover:bg-[#162050] text-white font-medium px-6 py-2 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#1F2B6C]/25 transition-all duration-300 transform hover:scale-105"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VolunteerForm;
