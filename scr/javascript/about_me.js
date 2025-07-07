const secondYearSubjects = [
{ name: "Statistical Data Analysis", grade: "97%", description: "This module aims to further develop mathematical ability and provide the basic statistical and probability concepts required for information technology, along with the knowledge needed for data analysis." },
{ name: "Intro to Object Oriented Programming", grade: "95%", description: "This module introduces the principles of object-oriented programming in C++, focusing on the creation and manipulation of classes and objects." },
{ name: "Operating Systems Scripting", grade: "93%", description: "This module introduces scripting for the purposes of operating systems administration." },
{ name: "OS Structures", grade: "92%", description: "This module extends concepts from Operating Systems Fundamentals to multi-user and network-based operating systems." },
{ name: "Public Cloud Foundations", grade: "90%", description: "This module will enable learners to manage the computer networking components of multimedia or internet application development and introduce the fundamentals of Cloud Computing." },
{ name: "Cyber Security Operations", grade: "87%", description: "This module is designed to equip individuals with the skills and knowledge needed to work as a Security Analyst in a Security Operations Centre team, balancing theory and practice." },
{ name: "Data Formats & Storage", grade: "87%", description: "This module introduces data storage systems and various formats used for reliable and efficient data storage." },
{ name: "Enterprise Network Design", grade: "85%", description: "This module provides a survey of architectures and considerations for designing, securing, operating, and troubleshooting enterprise networks, along with automation concepts supporting network digitization." },
{ name: "Server Virtualisation & Storage", grade: "84%", description: "This module will allow learners to examine the principles and technologies that enable SMEs and enterprise businesses to deploy and manage virtual servers and storage devices in data centers." },
{ name: "Database Administration", grade: "83%", description: "The aim of the module is to enable individuals to acquire and demonstrate a comprehensive understanding of modern techniques and challenges in commercial client/server database administration, processing, and subsequent analysis." },
{ name: "Client-Server Technologies", grade: "83%", description: "This module introduces the client-server paradigm, covering the technologies and methods used to implement client-server systems." },
{ name: "Data Essentials", grade: "68%", description: "This module provides a solid foundation for working with data and databases, covering fundamental concepts, design principles, and key terminology." }];

const thirdYearSubjects = [
{ name: "Data Comms", grade: "N/A", description: "This module explores the principles of data transmission and reception across networks. It covers a range of technologies, enabling a clear understanding of their capabilities and how to compare and select different network components and systems." },
{ name: "Group Project", grade: "N/A", description: "This project focuses on collaborative development of a substantial computing system for a theoretical company. It involves analyzing, designing, building, implementing, and testing a solution as a team. The process also addresses key challenges such as problem definition, time and team management, milestone delivery, and quality control." },
{ name: "Network Security", grade: "N/A", description: "This module covers security concepts and skills for managing enterprise networks, ensuring integrity, confidentiality, and availability. It combines theory with hands-on learning to develop problem-solving and collaboration skills." },
{ name: "Server Administration: Services", grade: "N/A", description: "This module teaches how to manage server services through the building, installation, configuration, and maintenance of both physical and virtual servers." },
{ name: "Technical Writing & Research Skills", grade: "N/A", description: "This module enhances technical writing and research skills for work placements and capstone projects. It covers academic communication, research methods, data collection, citation, and developing research ideas for the capstone project." },
{ name: "Work Placement", grade: "N/A", description: "This placement module allows students to apply their theoretical and practical knowledge in a professional IT setting, gaining valuable career experience and a deeper understanding of the work environment." }];

const fourthYearSubjects = [
{ name: "Applied Cryptography", grade: "N/A", description: "This module offers an in-depth analysis of cryptographic principles and techniques." },
{ name: "Data Centre Design", grade: "N/A", description: "The module has a comprehensive agenda that explores and addresses the key elements associated with designing, building, and maintaining a Data Centre. It teaches industry best practice principles for the design, construction and operation of computer rooms and Data Centre facilities. The module also breaks down and addresses the requirements of a successful design to meet the business needs incorporating the key infrastructure elements of the physical infrastructure, electrical distribution systems, air-conditioning, data cabling and building support systems." },
{ name: "Digital Forensics", grade: "N/A", description: "The aim of this module is to introduce learners to the principles and practice of digital forensics." },
{ name: "Entrepreneurship", grade: "N/A", description: "This module explores the fundamental concepts of entrepreneurship, focusing on the entrepreneurial process and equipping individuals with the skills necessary to pursue careers as entrepreneurs or intrapreneurs." },
{ name: "Information Security", grade: "N/A", description: "This module provides an overview of information security, focusing on protecting an organisation from internal and external threats. It covers security concepts and best practices, teaching the skills needed to manage information security systems aligned with global standards and implement strategic and operational security measures." },
{ name: "Innovative Technologies & Future Skills", grade: "N/A", description: "This module focuses on developing transversal skills through collaboration with peers, teachers, and experts to create innovative technological solutions for real-world problems. It aims to equip students with the knowledge and skills needed to adapt to a rapidly evolving job market shaped by technological advancements." },
{ name: "IT Governance & Management", grade: "N/A", description: "This module introduces IT Governance and Service Management, focusing on IT organizational design, governance models, and industry standards. It aims to provide an understanding of IT Governance’s role in business and familiarize students with key processes and frameworks in the IT sector." },
{ name: "Penetration Testing", grade: "N/A", description: "This module enables students to develop the knowledge and skills needed to plan, execute, and evaluate penetration testing and ethical hacking of computer networks. It covers ethical and legal requirements, and students will learn to identify and exploit vulnerabilities using industry-standard tools, assess risk, and propose countermeasures." },
{ name: "Research Project", grade: "N/A", description: "A research project to investigate a chosen aspect of Computer Science." },
{ name: "Secure Public Cloud Services", grade: "N/A", description: "This module explores public cloud computing, focusing on designing and securing cloud-based solutions. Students will gain hands-on experience with AWS, learning best practices in security, automation, and workload optimization. The course combines theory with practical labs, developing key problem-solving and cloud engineering skills essential for industry roles" },
{ name: "Server Administration: Applications", grade: "N/A", description: "This module teaches students the skills needed to automate tasks across various server operating systems, improving efficiency and reducing human error. It focuses on the automation of complex systems and infrastructure management, essential for modern system administrators handling large-scale environments." },
{ name: "Software Defined Networks & Network Automation", grade: "N/A", description: "This module explores emerging solutions in Software Defined Networking and Automation for SMEs, focusing on scalable technologies. It combines theory with practical learning to develop essential skills in problem-solving and collaboration, preparing students for real-world applications." }];



function createAccordion(subjectList, parentElement) {
    subjectList.forEach(subject => {
        const li = document.createElement('li');
        li.className = "subject";
    
        const header = document.createElement('div');
        header.className = "accordionHeader";
        header.innerHTML = `<p>${subject.name}</p><p class="grade">${subject.grade}</p>`;
    
        const content = document.createElement('p');
        content.className = "content";
        content.innerHTML = `${subject.description}`;
    
        li.append(header);
        li.append(content);
        parentElement.append(li);
    });    
}

const secondYearList = document.querySelector('#secondYearAccordion');
const thirdYearList = document.querySelector('#thirdYearAccordion');
const fourthYearList = document.querySelector('#fourthYearAccordion');

createAccordion(secondYearSubjects, secondYearList);
createAccordion(thirdYearSubjects, thirdYearList);
createAccordion(fourthYearSubjects, fourthYearList);



// Controls the accordion behavior first years
const accordionHeaders = document.querySelectorAll('.accordionHeader');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        // Closes all the other accordion's content
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== this) {
                otherHeader.classList.remove('active');
            }   
        });
        this.classList.toggle('active');
    });
});

// Switches between the different tabs
const tabLinks = document.querySelectorAll('.tabLinks');
const years = document.querySelectorAll('.accordion');

tabLinks.forEach((tab, index) => {
    tab.addEventListener('click', function() {

        // Removes active from all tabs
        tabLinks.forEach(otherTab => {
                otherTab.classList.remove('active');
        });

        // Adds active to a tab
        this.classList.add('active');

        // Removes active from tab content
        years.forEach(year => {
            year.classList.remove('active');
        });

        // Adds active to the corresponding content
        years[index].classList.add('active');
    });
});